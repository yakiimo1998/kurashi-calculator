"use client";
import { useState } from "react";
import MoneyInput from "./MoneyInput";
import { amount, budget } from "../lib/calculations";
const fields = [
  {label:"引っ越しに使える資金",value:"60",hint:"引っ越し後に残す生活用の予備資金は除いて入力"},
  {label:"新居の契約時支払額",value:"30",hint:"敷金・礼金・前家賃・保証料等の見積合計"},
  {label:"運搬・梱包・設置代",value:"6",hint:"引っ越し業者の見積合計"},
  {label:"家具・家電の購入等",value:"12",hint:"送料・設置料を含め、運搬費との重複を除く"},
  {label:"旧居の追加支払・家賃の重複分",value:"5",hint:"退去費用の見込み等。新居の前家賃は上に含める"},
  {label:"その他の予算",value:"2",hint:"移動・宿泊・日用品など、他の欄にない費用"},
];
const fmt = (n:number) => n.toLocaleString("ja-JP",{maximumFractionDigits:2});
export default function MovingCalculator() {
  const [inputs,setInputs] = useState(fields.map(field => field.value));
  const values = inputs.map(value => amount(value,0,100000));
  const result = values.every(value => value !== null) ? budget(values[0]!,values.slice(1) as number[]) : null;
  return <div className="budget-workspace"><div className="budget-inputs"><p className="field-hint mb-5">相場ではなく、見積額を整理する計算機です。初期値は説明用の仮定です。</p><div className="input-grid input-grid-detail">{fields.map((field,i) => <MoneyInput key={field.label} {...field} max={100000} value={inputs[i]} onChange={value => setInputs(current => current.map((item,j) => j===i ? value : item))} />)}</div></div><section className="budget-result" aria-live="polite"><p className="result-label">引っ越しの支払予定総額</p>{result ? <><p className="result-number">{fmt(result.total)}<span>万円</span></p><div className="result-divider" /><div className="result-detail"><span>{result.remaining < 0 ? "用意する資金の不足額" : "用意した資金からの残額"}</span><strong>{fmt(Math.abs(result.remaining))}万円</strong></div><p className="result-note">敷金など、将来返金される可能性のあるお金も一旦払う資金として合算します。未確定の返金は差し引きません。実際に必要な支払日ごとの残高は別に確認してください。</p></> : <p>入力内容を確認してください。</p>}</section></div>;
}
