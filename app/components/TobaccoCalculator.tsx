"use client";
import { useSyncExternalStore, useState } from "react";
import MoneyInput from "./MoneyInput";
import { japanDate, periods, PRICE_CHECKED_AT, priceAt, smokingCost, sources, tobaccoBrands, validNumber } from "../lib/tobacco";

const yen = (n: number) => Math.round(n).toLocaleString("ja-JP");
const groups = [...new Set(tobaccoBrands.map(b => b.group))];
function subscribeDate(callback: () => void) {
  const timer = setInterval(callback, 60_000);
  window.addEventListener("focus", callback);
  return () => { clearInterval(timer); window.removeEventListener("focus", callback); };
}
const getDate = () => japanDate();
const getServerDate = () => PRICE_CHECKED_AT;
const goals = [{ title: "外食を楽しむ", unit: "回", price: "1500" }, { title: "本を読む", unit: "冊", price: "2000" }, { title: "旅行の予算に", unit: "回", price: "50000" }];

export default function TobaccoCalculator() {
  const date = useSyncExternalStore(subscribeDate, getDate, getServerDate);
  const [brandId, setBrandId] = useState(tobaccoBrands[0].id);
  const [dailyText, setDailyText] = useState("20");
  const [custom, setCustom] = useState(false);
  const [customPrice, setCustomPrice] = useState("580");
  const [customSize, setCustomSize] = useState("20");
  const [period, setPeriod] = useState(2);
  const [goalPrices, setGoalPrices] = useState(goals.map(g => g.price));
  const brand = tobaccoBrands.find(b => b.id === brandId)!;
  const listedPrice = priceAt(brand, date);
  const price = custom ? validNumber(customPrice, 1, 100000) : listedPrice;
  const size = custom ? validNumber(customSize, 1, 1000) : brand.packSize;
  const daily = validNumber(dailyText, 0, 200);
  const valid = price !== null && size !== null && Number.isInteger(size) && daily !== null;
  const costs = periods.map(p => valid ? smokingCost(price, size, daily, p.days) : null);
  const total = costs[period];
  function toggleCustom() {
    if (!custom) { setCustomPrice(String(listedPrice)); setCustomSize(String(brand.packSize)); }
    setCustom(!custom);
  }
  return <div className="tobacco-calculator">
    <div className="tobacco-intro"><span className="tool-tag">タバコ代計算機</span><h2>その一服、<br />積み重ねるといくら？</h2><p>銘柄と本数を選んで、吸わなかった場合の使い道を考えてみましょう。</p></div>
    <section className="tobacco-settings" aria-label="タバコ代の入力条件">
      <div className="tobacco-brand"><label htmlFor="tobacco-brand">銘柄を選ぶ</label><select id="tobacco-brand" value={brandId} onChange={e => { setBrandId(e.target.value); setCustom(false); }}>
        {groups.map(group => <optgroup label={group} key={group}>{tobaccoBrands.filter(b => b.group === group).map(b => <option value={b.id} key={b.id}>{b.name} ／ {priceAt(b, date)}円</option>)}</optgroup>)}
      </select><p className="field-hint">{tobaccoBrands.length}銘柄を掲載。見つからないときは、下の手入力を使えます。</p></div>
      <MoneyInput label="1日の平均本数" value={dailyText} onChange={setDailyText} unit="本" max={200} hint="毎日同じ本数として計算。平均なので小数も使えます。" />
      <div className="tobacco-price"><strong>1箱 {yen(listedPrice)}円（税込）・{brand.packSize}本</strong><span>登録価格の適用基準日：{date.replaceAll("-", "/")}</span><a href={sources[brand.source].url} target="_blank" rel="noopener noreferrer">選択銘柄の価格出典（新しいタブ） ↗</a>
        {brand.nextDate && date < brand.nextDate && <span>{brand.nextDate.replaceAll("-", "/")}から{brand.nextPrice}円に改定予定</span>}
      </div>
      <div className="tobacco-custom"><label className="tobacco-check"><input type="checkbox" checked={custom} onChange={toggleCustom} />価格・本数を手入力（未掲載の銘柄にも対応）</label>
        {custom && <div className="tobacco-custom-fields"><MoneyInput label="1箱の価格（税込）" value={customPrice} onChange={setCustomPrice} unit="円" min={1} max={100000} /><MoneyInput label="1箱の本数" value={customSize} onChange={setCustomSize} unit="本" min={1} max={1000} step="1" hint="1以上の整数で入力してください。" />{size !== null && !Number.isInteger(size) && <p role="alert" className="field-error">1箱の本数は整数で入力してください。</p>}</div>}
      </div>
    </section>
    <section className="tobacco-results" aria-label="期間別のタバコ代" aria-live="polite" aria-atomic="true">
      <div className="section-heading"><h2>積み重なるタバコ代</h2><span>{custom ? "手入力の価格・本数で計算中" : "登録価格で計算中"}</span></div>
      {!valid && <p className="field-error">入力を確認すると、計算結果が表示されます。</p>}
      <div className="tobacco-periods">{periods.map((p, i) => <article key={p.days} className={i === 2 ? "tobacco-period tobacco-year" : "tobacco-period"}><h3>{p.label}<small>{p.days.toLocaleString("ja-JP")}日</small></h3><p><strong>{costs[i] === null ? "—" : yen(costs[i])}</strong> 円</p><span>吸わなければ、この金額を別の使い道に。</span></article>)}</div>
      <p className="field-hint">期間中の価格と本数は一定と仮定。実際の支払額や貯金額を保証するものではありません。</p>
    </section>
    <section className="tobacco-alternatives"><p className="section-kicker">もし、別のことに使ったら？</p><h2>あなたなら、何に使う？</h2><p>使い道ごとに、タバコ代の全額を充てた場合を比較します。</p>
      <fieldset className="tobacco-switch"><legend>比較する期間</legend>{periods.map((p, i) => <label key={p.days}><input type="radio" name="tobacco-period" value={i} checked={period === i} onChange={() => setPeriod(i)} /><span>{p.label}</span></label>)}</fieldset>
      <p className="tobacco-available" aria-live="polite">{periods[period].label}分の予算：<strong>{total === null ? "—" : yen(total)}円</strong></p>
      <div className="tobacco-goals">{goals.map((g, i) => {
        const goalPrice = validNumber(goalPrices[i], 1, 10000000);
        const count = total !== null && goalPrice !== null ? Math.floor(total / goalPrice) : null;
        return <article key={g.title}><h3>{g.title}</h3><MoneyInput label={`${g.title}：1${g.unit}の予算`} value={goalPrices[i]} onChange={value => setGoalPrices(prices => prices.map((p, j) => j === i ? value : p))} unit="円" min={1} max={10000000} />
          <div aria-live="polite"><p className="tobacco-goal-count">{count === null ? "—" : count.toLocaleString("ja-JP")}<small>{g.unit}分</small></p>{total !== null && goalPrice !== null && count !== null && <p className="field-hint">{count === 0 ? `1${g.unit}分まであと${yen(goalPrice - total)}円` : `残りの予算は${yen(total - count * goalPrice)}円`}</p>}</div></article>;
      })}</div>
      <p className="tobacco-example-note">金額は使い道を考えるための仮の予算例です。商品の実売価格や全国平均ではありません。希望する予算に変更してお使いください。各例を同時に購入できるという意味ではありません。</p>
    </section>
  </div>;
}
