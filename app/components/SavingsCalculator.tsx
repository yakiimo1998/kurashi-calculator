"use client";
import { useState } from "react";
import MoneyInput from "./MoneyInput";
import { amount, savingsPlan } from "../lib/calculations";
const fields = [ {label:"準備したい目標金額",value:"100",max:100000}, {label:"この目標のために今ある貯金",value:"20",max:100000}, {label:"毎月積み立てる金額",value:"3",max:10000}, {label:"目標までの期間",value:"24",max:1200,min:1,unit:"か月",step:"1"} ];
const fmt = (n:number) => n.toLocaleString("ja-JP",{maximumFractionDigits:4});
export default function SavingsCalculator() {
  const [inputs,setInputs] = useState(fields.map(field => field.value));
  const values = inputs.map((value,i) => amount(value,fields[i].min ?? 0,fields[i].max));
  const valid = values.every(value => value !== null) && Number.isInteger(values[3]);
  const result = valid ? savingsPlan(...values as [number,number,number,number]) : null;
  return <div className="budget-workspace"><div className="budget-inputs"><p className="field-hint mb-5">入力例は仮定です。生活費や年払いに使うお金を除いた額を入力してください。</p><div className="input-grid input-grid-detail">{fields.map((field,i) => <MoneyInput key={field.label} {...field} value={inputs[i]} onChange={value => setInputs(current => current.map((item,j) => i===j ? value : item))} />)}</div></div><section className="budget-result" aria-live="polite"><p className="result-label">期限に合わせて必要な月額</p>{result ? <><p className="result-number">{Math.round(result.requiredMonthly * 10000).toLocaleString("ja-JP")}<span>円</span></p><p className="result-equation">不足する目標額 ÷ 残りの月数（1円未満切り上げ）</p><div className="result-divider" /><div className="result-detail"><span>目標まであと</span><strong>{fmt(result.remaining)}万円</strong></div><div className="result-detail"><span>現在の積立額で必要な期間</span><strong>{result.monthsNeeded === null ? "月額0円では到達しません" : result.monthsNeeded === 0 ? "目標額を確保済み" : `${result.monthsNeeded.toLocaleString()}か月`}</strong></div><div className="result-detail"><span>{inputs[3]}か月後の合計</span><strong>{fmt(result.projected)}万円</strong></div><p className="result-note">毎月同額を積み立て、途中の取り崩し・利息・運用益・手数料はない仮定です。1か月目の積立後を最初の判定時点とします。</p></> : <p>入力内容を確認してください。</p>}</section></div>;
}
