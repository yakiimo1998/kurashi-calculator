"use client";
import { useState } from "react";
import MoneyInput from "../components/MoneyInput";
import ToolPage from "../components/ToolPage";
import { amount } from "../lib/calculations";
const fmt = (n: number) => n.toLocaleString("ja-JP", {maximumFractionDigits:2});
export default function TakeHomePage() {
  const [mode, setMode] = useState("payslip");
  const [gross, setGross] = useState("30");
  const [deductions, setDeductions] = useState("6");
  const [reimbursements, setReimbursements] = useState("1");
  const [salary, setSalary] = useState("500");
  const [ratio, setRatio] = useState("78");
  const annual = amount(salary, 0, 100000);
  const percentage = amount(ratio, 0, 100);
  const annualResult = annual !== null && percentage !== null ? annual * percentage / 100 : null;
  const g = amount(gross,0,10000), d = amount(deductions,0,10000), r = amount(reimbursements,0,10000);
  const invalidDifference = g !== null && d !== null && d > g;
  const net = g !== null && d !== null && r !== null && !invalidDifference ? g-d : null;
  return <ToolPage title="手取りと生活費に使える金額を確認" description="給与明細から差引支給額を計算する方法と、年収に仮の手取り率を掛ける簡易試算を選べます。">
    <fieldset className="mode-picker"><legend>計算方法を選ぶ</legend>{[["payslip","給与明細の金額から計算"],["estimate","年収・仮の率から試算"]].map(([value,label]) => <label key={value}><input type="radio" name="takehome-mode" value={value} checked={mode===value} onChange={() => setMode(value)} />{label}</label>)}</fieldset>
    <div className="budget-workspace"><div className="budget-inputs"><p className="field-hint mb-5">初期値は計算例です。税額や保険料の自動計算は行いません。</p><div className="input-grid">
      {mode === "payslip" ? <><MoneyInput label="給与明細の支給合計" value={gross} onChange={setGross} hint="給与明細に記載された合計額を入力" /><MoneyInput label="給与明細の控除合計" value={deductions} onChange={setDeductions} hint="税・社会保険・その他天引きの合計。自分で税率を計算する必要はありません。" /><MoneyInput label="支給合計に含まれる通勤費・立替精算等" value={reimbursements} onChange={setReimbursements} hint="生活費に使わず別に確保する分。ない場合は0。支給合計には足し直しません。" />{invalidDifference && <p className="field-error" role="alert">控除合計が支給合計を上回っています。通常の月の明細か、入力金額をご確認ください。</p>}</> : <><MoneyInput label="額面の年収（賞与込み）" value={salary} onChange={setSalary} max={100000} /><MoneyInput label="仮の手取り率" value={ratio} onChange={setRatio} max={100} unit="％" hint="78％は比較用の仮定です。平均や税制上の率ではありません。" /></>}
    </div></div><section className="budget-result" aria-live="polite"><p className="result-label">{mode === "payslip" ? "給与明細から求めた差引支給額" : "設定した率での年間手取り"}</p>
      {mode === "payslip" ? net !== null && r !== null ? <><p className="result-number">{fmt(net)}<span>万円</span></p><p className="result-equation">支給合計 − 控除合計</p><div className="result-divider" /><div className="result-detail"><span>通勤費・立替精算等を除いた残額</span><strong>{fmt(net-r)}万円</strong></div><p className="result-note">{net < r ? "別に確保する金額が差引支給額を上回っています。金額をご確認ください。" : "通勤費等をここで差し引く場合、家計の交通費に同じ額を重ねて計上しないようにしてください。"} 実際の振込は複数口座等に分かれる場合があります。</p></> : <p>入力内容を確認してください。</p> : annualResult !== null ? <><p className="result-number">{fmt(annualResult)}<span>万円</span></p><p className="result-equation">年収 {salary}万円 × {ratio}％</p><div className="result-divider" /><div className="result-detail"><span>12か月で均等に割ると</span><strong>{fmt(annualResult/12)}万円／月</strong></div><p className="result-note">賞与を含む年額の均等割です。実際の月々の給与振込額とは異なります。</p></> : <p>入力内容を確認してください。</p>}
    </section></div>
    <section className="explanation"><h2>家計には、通常の月に受け取る金額を使う</h2><p>賞与や立替金の返金が多い月を基準にすると、普段の生活費を多く見積もることがあります。通常の給与明細と銀行の入金を照らし合わせ、年収の均等割と区別して入力しましょう。</p><h3>支給30万円・控除6万円・精算等1万円の例</h3><p>差引支給額は24万円、精算等に使う1万円を別に確保すれば残額は23万円です。家計側にその1万円の支出も入力するなら、手取りは24万円として計算し、重複を避けてください。</p><h3>この計算で分からないこと</h3><p>税率・扶養・年齢・居住地・社会保険の加入条件は反映しません。支給額や控除が正しいかを検証するツールではなく、明細の金額を家計に整理するためのものです。明細に不明点がある場合は勤務先の給与担当に確認してください。</p><p><a href="/simulation">確認した手取りで生活費と貯金目標を計算する →</a></p></section>
  </ToolPage>;
}
