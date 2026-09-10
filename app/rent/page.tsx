"use client";
import { useState } from "react";
import MoneyInput from "../components/MoneyInput";
import ToolPage from "../components/ToolPage";
import { amount } from "../lib/calculations";
export default function RentPage() {
  const [income, setIncome] = useState("25");
  const [ratio, setRatio] = useState("28");
  const salary = amount(income, 0.0001, 10000);
  const percentage = amount(ratio, 0, 100);
  const result = salary !== null && percentage !== null ? salary * percentage / 100 : null;
  return <ToolPage title="家賃の予算計算機" description="手取りの何％を住居費に充てるかを変えて、予算を比べます。">
    <div className="budget-workspace"><div className="budget-inputs"><div className="input-grid">
      <MoneyInput label="毎月の手取り" value={income} onChange={setIncome} min={0.0001} />
      <MoneyInput label="家賃・管理費に充てる割合" value={ratio} onChange={setRatio} unit="％" max={100} hint="28％は比較用の仮定です。ご自身の予算に合わせて変更してください。" />
    </div></div><section className="budget-result" aria-live="polite"><p className="result-label">設定した割合での家賃・管理費</p>
      {result !== null ? <><p className="result-number">{result.toLocaleString("ja-JP", {maximumFractionDigits:2})}<span>万円</span></p><p className="result-equation">手取り {income}万円 × {ratio}％</p><div className="result-divider" /><p className="result-note">家賃だけで生活の余裕は決まりません。食費・返済・貯金の予算も合わせて確認してください。</p></> : <p>入力内容を確認してください。</p>}
    </section></div>
    <section className="explanation"><h2>「適正家賃」は人によって変わります</h2><p>この計算は手取りに割合を掛けるだけの予算試算です。審査基準、地域相場、推奨額を示すものではありません。家賃と管理費・共益費を合算して考えましょう。</p><p>手取り25万円なら、25％で6.25万円、28％で7万円、30％で7.5万円です。残るお金から生活費や年払いの費用をまかなえるか、一人暮らしシミュレーターで確認できます。</p></section>
  </ToolPage>;
}
