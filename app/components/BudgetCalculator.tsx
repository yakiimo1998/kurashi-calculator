"use client";
import { useState } from "react";
import Link from "next/link";
import MoneyInput from "./MoneyInput";
import { amount, budget } from "../lib/calculations";
const fields = ["家賃・管理費", "食費", "水道光熱費", "通信費", "日用品", "交通費", "その他の支出"];
const initial = ["7", "3", "1.5", "1", "1", "1", "2"];
export default function BudgetCalculator({ compact = false, expensesOnly = false }: { compact?: boolean; expensesOnly?: boolean }) {
  const [income, setIncome] = useState("25");
  const [expenses, setExpenses] = useState(initial);
  const [other, setOther] = useState("9.5");
  const values = (compact ? [expenses[0], other] : expenses).map(value => amount(value, 0, 10000));
  const parsedIncome = expensesOnly ? 0 : amount(income, 0.0001, 10000);
  const result = parsedIncome !== null && values.every(value => value !== null) ? budget(parsedIncome, values as number[]) : null;
  const updateExpense = (index: number, value: string) => setExpenses(current => current.map((item, i) => i === index ? value : item));
  return <div className={`budget-workspace ${compact ? "budget-compact" : ""}`}>
    <div className="budget-inputs"><div className="section-kicker">{compact ? "まずは、3つの金額から" : "毎月の金額を入力"}</div>
      <p className="field-hint mb-5">入力済みの金額は計算例です。ご自身の金額に変更できます。</p>
      <div className={compact ? "input-grid" : "input-grid input-grid-detail"}>
        {!expensesOnly && <MoneyInput label="毎月の手取り" value={income} onChange={setIncome} min={0.0001} />}
        {(compact ? fields.slice(0, 1) : fields).map((label, index) => <MoneyInput key={label} label={label} value={expenses[index]} onChange={value => updateExpense(index, value)} />)}
        {compact && <MoneyInput label="家賃以外の生活費" value={other} onChange={setOther} hint="食費・光熱費・通信費などの合計" />}
      </div>{!compact && <p className="field-hint mt-4">保険・医療・衣服・交際費・返済などは「その他の支出」に加えてください。</p>}
    </div>
    <section className="budget-result" aria-label="計算結果" aria-live="polite" aria-atomic="true">
      <p className="result-label">{expensesOnly ? "毎月の生活費" : result && result.remaining < 0 ? "毎月の不足額" : "毎月残るお金"}</p>
      {result ? <><p className="result-number">{Math.abs(expensesOnly ? result.total : result.remaining).toLocaleString("ja-JP", { maximumFractionDigits: 2 })}<span>万円</span></p>
        <p className="result-equation">{expensesOnly ? "入力した7項目の合計" : `手取り ${income}万円 − 生活費 ${result.total.toLocaleString("ja-JP", { maximumFractionDigits: 2 })}万円`}</p>
        <div className="result-divider" /><div className="result-detail"><span>{expensesOnly ? "12か月分の生活費" : result.annual < 0 ? "12か月分の不足額" : "12か月分の残額"}</span><strong>{Math.abs(expensesOnly ? result.total * 12 : result.annual).toLocaleString("ja-JP", { maximumFractionDigits: 2 })}万円</strong></div>
        {!expensesOnly && <p className="result-note">{result.remaining < 0 ? "支出が収入を上回っています。家賃以外の支出も含め、予算を確認しましょう。" : "臨時の出費を引く前の金額です。この全額を貯金できるとは限りません。"}</p>}</> : <p className="py-6">入力内容を確認してください。すべての項目が有効になると結果を表示します。</p>}
      {compact && <Link className="result-link" href="/simulation">費目ごとに詳しく計算する →</Link>}
    </section></div>;
}
