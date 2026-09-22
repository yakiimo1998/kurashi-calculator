"use client";
import { useState } from "react";
import MoneyInput from "../components/MoneyInput";
import ToolPage from "../components/ToolPage";
import { amount, electricityCost } from "../lib/calculations";
const fmt = (n:number) => n.toLocaleString("ja-JP",{maximumFractionDigits:2});
export default function ElectricityPage() {
  const [mode,setMode] = useState("power");
  const [inputs,setInputs] = useState(["1000","5","30","31","1000","3","400","300"]);
  const limits = [100000,24,31,10000,100000,24,1000000,1000000];
  const values = inputs.map((value,i) => amount(value,0,limits[i]));
  const valid = (mode === "power" ? [0,1,2,3,4,5] : [3,6,7]).every(i => values[i] !== null);
  const [power,hours,days,rate,powerB,hoursB,kwhA,kwhB] = values as number[];
  const a = valid ? mode === "power" ? electricityCost(power,hours,days,rate) : {kwh:kwhA/12,monthly:kwhA*rate/12,annual:kwhA*rate} : null;
  const b = valid ? mode === "power" ? electricityCost(powerB,hoursB,days,rate) : {kwh:kwhB/12,monthly:kwhB*rate/12,annual:kwhB*rate} : null;
  const input = (i:number,label:string,unit:string,hint?:string) => <MoneyInput label={label} unit={unit} max={limits[i]} value={inputs[i]} onChange={value => setInputs(current => current.map((item,j) => i===j ? value : item))} hint={hint} />;
  return <ToolPage title="電気代計算機｜使い方・家電の違いを比較" description="消費電力と使用時間、または年間消費電力量から試算。条件A・Bの差額まで確認できます。">
    <fieldset className="mode-picker"><legend>手元の情報から計算方法を選ぶ</legend>{[["power","消費電力（W）と時間"],["energy","年間消費電力量（kWh/年）"]].map(([value,label]) => <label key={value}><input type="radio" name="electricity-mode" value={value} checked={mode===value} onChange={() => setMode(value)} />{label}</label>)}</fieldset>
    <div className="budget-workspace"><div className="budget-inputs"><p className="field-hint mb-5">金額と性能値の初期値は説明用の仮定です。特定の商品や契約の価格ではありません。</p><div className="input-grid input-grid-detail">
      {input(3,"電気料金単価","円/kWh","31円は計算例です。契約先の単価へ変更してください。")}
      {mode === "power" ? <>{input(2,"1か月の使用日数（共通）","日")}{input(0,"条件Aの消費電力","W")}{input(1,"条件Aの1日の使用時間","時間")}{input(4,"条件Bの消費電力","W")}{input(5,"条件Bの1日の使用時間","時間")}</> : <>{input(6,"条件Aの年間消費電力量","kWh/年","製品の表示などで対象期間と測定条件を確認")}{input(7,"条件Bの年間消費電力量","kWh/年","Aと同じ用途・条件で比較してください。")}</>}
    </div></div><section className="budget-result" aria-live="polite"><p className="result-label">{mode === "power" ? "条件Aの1か月の電気代" : "条件Aの年間電気代"}</p>{a && b ? <><p className="result-number">{Math.round(mode === "power" ? a.monthly : a.annual).toLocaleString()}<span>円</span></p><p className="result-equation">{mode === "power" ? `使用電力量 ${fmt(a.kwh)} kWh／月` : "年間消費電力量 × 単価。実際の使用環境では変わります。"}</p><div className="result-divider" /><div className="result-detail"><span>条件A・年間</span><strong>{Math.round(a.annual).toLocaleString()}円</strong></div><div className="result-detail"><span>条件B・年間</span><strong>{Math.round(b.annual).toLocaleString()}円</strong></div><div className="result-detail"><span>Bに変えた年間差額（B−A）</span><strong>{Math.round(b.annual-a.annual).toLocaleString()}円</strong></div><div className="result-detail"><span>月額換算の差額（B−A）</span><strong>{Math.round(b.monthly-a.monthly).toLocaleString()}円</strong></div><p className="result-note">差額がマイナスならBの電力量料金が低い試算です。{mode === "power" ? "年間は同じ月の使い方を12回繰り返す仮定です。" : "月額換算は年額の均等割で、各月の請求額ではありません。"} 買替え代・基本料金・未入力の調整額等は含みません。</p></> : <p>入力内容を確認してください。</p>}</section></div>
    <section className="explanation"><h2>消費電力と、消費電力量の違い</h2><p>Wはその時の電力、kWhは一定の期間に使う電力量です。Wから計算する場合は「W÷1,000×1日の使用時間×使用日数×単価」。年間kWhが分かる場合は、その年額に時間をもう一度掛けません。</p><p>初期値の例では1,000W・5時間・30日・31円で月4,650円。3時間に変えると月2,790円で、差額は月1,860円です。暑さ寒さへの対応など必要な使用を控えるための基準ではありません。</p><h3>計算に含まれないもの</h3><p>基本料金、燃料費調整額、再エネ賦課金、割引などは自動加算されません。単価に含めた項目は別に足さないでください。段階制料金や時間帯別料金も自動適用しません。</p><p>エアコンや冷蔵庫などは電力が変動します。一定のWでの計算が合わない場合は、実測値や製品の消費電力量を確認してください。電子レンジの「出力W」と「消費電力W」は区別します。</p><p><a href="/electricity-guide">表示値の調べ方と、買替え比較の計算例を見る →</a></p></section>
  </ToolPage>;
}
