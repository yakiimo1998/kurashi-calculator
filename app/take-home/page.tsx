"use client";
import { useState } from "react";
import MoneyInput from "../components/MoneyInput";
import ToolPage from "../components/ToolPage";
import { amount } from "../lib/calculations";
export default function TakeHomePage() {
  const [salary, setSalary] = useState("500");
  const [ratio, setRatio] = useState("78");
  const annual = amount(salary, 0.0001, 100000);
  const percentage = amount(ratio, 0, 100);
  const result = annual !== null && percentage !== null ? annual * percentage / 100 : null;
  return <ToolPage title="手取りの簡易試算" description="年収に仮の手取り率を掛ける計算です。所得税・住民税・社会保険料の個別計算は行いません。">
    <div className="budget-workspace"><div className="budget-inputs"><div className="input-grid">
      <MoneyInput label="額面の年収（賞与込み）" value={salary} onChange={setSalary} min={0.0001} max={100000} />
      <MoneyInput label="仮の手取り率" value={ratio} onChange={setRatio} max={100} unit="％" hint="78％は従来の計算に使っていた仮定です。平均や税制上の率ではありません。" />
    </div></div><section className="budget-result" aria-live="polite"><p className="result-label">設定した率での年間手取り</p>{result !== null ? <>
      <p className="result-number">{result.toLocaleString("ja-JP", {maximumFractionDigits:2})}<span>万円</span></p><p className="result-equation">年収 {salary}万円 × {ratio}％</p><div className="result-divider" /><div className="result-detail"><span>12か月で均等に割ると</span><strong>{(result / 12).toLocaleString("ja-JP", {maximumFractionDigits:2})}万円／月</strong></div><p className="result-note">賞与を含む年額の均等割です。実際の月々の給与振込額とは異なります。</p>
    </> : <p>入力内容を確認してください。</p>}</section></div>
    <section className="explanation"><h2>給与明細がある場合は、実際の手取りを使う</h2><p>年収による税率の違い、扶養、年齢、居住地、控除、社会保険の加入状況などは反映していません。正確な手取り額の算定や、申告・納税には使えません。</p><p>家賃や生活費の予算づくりには、給与明細の差引支給額を確認し、一人暮らしシミュレーターへ入力してください。</p></section>
  </ToolPage>;
}
