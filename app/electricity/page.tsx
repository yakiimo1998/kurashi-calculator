"use client";
import { useState } from "react";
import MoneyInput from "../components/MoneyInput";
import ToolPage from "../components/ToolPage";
import { amount, electricityCost } from "../lib/calculations";
const fields = [
  { label:"消費電力", unit:"W", max:100000, value:"1000" },
  { label:"1日の使用時間", unit:"時間", max:24, value:"5" },
  { label:"1か月の使用日数", unit:"日", max:31, value:"30" },
  { label:"電気料金単価", unit:"円/kWh", max:10000, value:"31" },
];
export default function ElectricityPage() {
  const [inputs, setInputs] = useState(fields.map(field => field.value));
  const values = inputs.map((value, i) => amount(value, 0, fields[i].max));
  const result = values.every(value => value !== null) ? electricityCost(...values as [number,number,number,number]) : null;
  return <ToolPage title="電気代計算機" description="家電の消費電力と使う時間から、電力量料金を試算します。">
    <div className="budget-workspace"><div className="budget-inputs"><div className="input-grid input-grid-detail">{fields.map((field, i) => <MoneyInput key={field.label} {...field} value={inputs[i]} onChange={value => setInputs(current => current.map((item,j) => j === i ? value : item))} hint={i === 3 ? "31円は計算例です。契約先の単価へ変更してください。" : undefined} />)}</div></div>
      <section className="budget-result" aria-live="polite"><p className="result-label">この家電の1か月の電気代</p>{result ? <><p className="result-number">{Math.round(result.monthly).toLocaleString()}<span>円</span></p><p className="result-equation">使用電力量 {result.kwh.toLocaleString("ja-JP",{maximumFractionDigits:2})} kWh</p><div className="result-divider" /><div className="result-detail"><span>同じ条件で12か月使用</span><strong>{Math.round(result.annual).toLocaleString()}円</strong></div></> : <p>入力内容を確認してください。</p>}</section></div>
    <section className="explanation"><h2>計算式と含まれない料金</h2><p>消費電力（W）÷ 1,000 × 1日の使用時間 × 使用日数 × 電気料金単価。1,000W・5時間・30日・31円なら4,650円です。</p><p>基本料金は含みません。燃料費調整額・再エネ賦課金・割引なども自動加算されません。単価に含めた場合は別に足さないようにしてください。</p><p>一定の消費電力で動かす仮定です。エアコンや冷蔵庫など電力が変動する機器は、実測値や製品の消費電力量を参考にしてください。電子レンジの「出力W」と「消費電力W」も異なります。</p><a href="/electricity-guide">電気代の見積もり方を読む →</a></section>
  </ToolPage>;
}
