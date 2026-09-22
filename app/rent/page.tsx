"use client";
import { useState } from "react";
import MoneyInput from "../components/MoneyInput";
import ToolPage from "../components/ToolPage";
import { amount, budgetPlan } from "../lib/calculations";
const fmt = (n: number) => n.toLocaleString("ja-JP", { maximumFractionDigits: 2 });
export default function RentPage() {
  const [inputs, setInputs] = useState(["25", "28", "9.5", "12", "3", "7", "0.5"]);
  const fields = [
    {label:"毎月の手取り",max:10000}, {label:"住居費に充てる割合（比較用）",max:100,unit:"％",hint:"28％は仮定です。平均・推奨額ではありません。"},
    {label:"家賃以外の毎月の生活費",max:10000,hint:"食費・通信費・交通費・返済などの合計"}, {label:"年払い・臨時支出の年間予算",max:100000,hint:"毎月の生活費に含めた費用は除きます。"},
    {label:"毎月の貯金目標",max:10000}, {label:"候補の部屋の家賃",max:10000}, {label:"候補の部屋の管理費・共益費",max:10000},
  ];
  const values = inputs.map((v,i) => amount(v,0,fields[i].max));
  const valid = values.every(v => v !== null);
  const [income, ratio, living, annual, savings, rent, management] = values as number[];
  const plan = valid ? budgetPlan(income, [living], annual, savings) : null;
  const housing = valid ? rent + management : 0;
  return <ToolPage title="家賃の予算計算機" description="生活費・年払いの備え・貯金目標から家賃の予算を逆算。候補の部屋で毎月いくら残るかを確認します。">
    <div className="budget-workspace"><div className="budget-inputs"><p className="field-hint mb-5">入力済みの金額は計算例です。生活費や物件の見積もりに合わせて変更してください。</p><div className="input-grid input-grid-detail">{fields.map((field,i) => <MoneyInput key={field.label} {...field} value={inputs[i]} onChange={value => setInputs(current => current.map((item,j) => j===i ? value : item))} />)}</div></div>
    <section className="budget-result" aria-live="polite"><p className="result-label">{plan && plan.flexible < 0 ? "家賃を払う前の不足額" : "生活費・貯金目標から逆算した住居費予算"}</p>{plan ? <>
      <p className="result-number">{fmt(Math.abs(plan.flexible))}<span>万円</span></p><p className="result-equation">手取り − 家賃以外の生活費 − 年払いの備え − 貯金目標</p>
      <div className="result-divider" /><div className="result-detail"><span>割合で計算した住居費（{ratio}％）</span><strong>{fmt(income * ratio / 100)}万円</strong></div><div className="result-detail"><span>候補の家賃＋管理費</span><strong>{fmt(housing)}万円</strong></div><div className="result-detail"><span>{plan.flexible - housing < 0 ? "候補の部屋での毎月の不足額" : "候補の部屋での毎月の残額"}</span><strong>{fmt(Math.abs(plan.flexible - housing))}万円</strong></div>
      <p className="result-note">{plan.flexible < housing ? "候補の住居費を払うと、入力した生活費・備え・貯金目標をすべて確保できません。" : "入力した費用と貯金目標を確保した後の残額です。未入力の支出も確認してください。"} 入居審査の可否や地域の家賃相場を示すものではありません。</p>
    </> : <p>空欄・負数・入力範囲を確認してください。</p>}</section></div>
    <section className="explanation"><h2>割合だけでは分からない、住居費の余裕</h2><p>同じ手取りでも、返済や車の費用がある人と、通勤費が少ない人では残せる金額が違います。割合で求めた予算と、実際の生活費から逆算した予算を並べて確認してください。</p><p>例えば手取り25万円、家賃以外9.5万円、年払い12万円、貯金目標3万円なら、逆算した住居費予算は11.5万円です。家賃7万円・管理費0.5万円の部屋では、さらに4万円残ります。11.5万円まで使うことを勧める例ではありません。</p><h3>候補の部屋を比較する順番</h3><ol className="guide-list"><li>家賃と管理費を見積書から入力する。</li><li>引っ越し後に変わる交通費・駐車場代・光熱費を生活費に反映する。</li><li>更新料や保険など、年払いの備えを確認する。</li><li>貯金目標を確保した後の残額と、契約時に必要な現金を別々に確認する。</li></ol><p>敷金・礼金・引っ越し代などの初期費用はこの月額には含みません。<a href="/moving-cost">引っ越し費用の整理方法</a>も確認できます。</p></section>
  </ToolPage>;
}
