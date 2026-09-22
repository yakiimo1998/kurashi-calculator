"use client";
import { useState } from "react";
import Link from "next/link";
import MoneyInput from "./MoneyInput";
import { amount, budgetPlan } from "../lib/calculations";
export const budgetFields = ["家賃・管理費", "食費", "水道光熱費", "通信費", "日用品", "交通費", "その他の支出"];
const format = (n: number) => n.toLocaleString("ja-JP", { maximumFractionDigits: 2 });
type Props = { compact?: boolean; expensesOnly?: boolean; initialIncome?: number; initialExpenses?: number[]; initialAnnual?: number; initialSavings?: number };
export default function BudgetCalculator({ compact = false, expensesOnly = false, initialIncome = 25, initialExpenses = [7, 3, 1.5, 1, 1, 1, 2], initialAnnual = 12, initialSavings = 3 }: Props) {
  const [income, setIncome] = useState(String(initialIncome));
  const [expenses, setExpenses] = useState(initialExpenses.map(String));
  const [other, setOther] = useState("9.5");
  const [annual, setAnnual] = useState(String(initialAnnual));
  const [savings, setSavings] = useState(String(initialSavings));
  const [saved, setSaved] = useState<{ income: string; expenses: string[]; annual: string; savings: string; result: ReturnType<typeof budgetPlan> } | null>(null);
  const values = (compact ? [expenses[0], other] : expenses).map(value => amount(value, 0, 10000));
  const parsedIncome = expensesOnly ? 0 : amount(income, 0, 10000);
  const parsedAnnual = compact ? 0 : amount(annual, 0, 100000);
  const parsedSavings = compact || expensesOnly ? 0 : amount(savings, 0, 10000);
  const result = parsedIncome !== null && parsedAnnual !== null && parsedSavings !== null && values.every(value => value !== null)
    ? budgetPlan(parsedIncome, values as number[], parsedAnnual, parsedSavings) : null;
  const updateExpense = (index: number, value: string) => setExpenses(current => current.map((item, i) => i === index ? value : item));
  return <>
    <div className={`budget-workspace ${compact ? "budget-compact" : ""}`}>
      <div className="budget-inputs"><div className="section-kicker">{compact ? "まずは、3つの金額から" : "毎月の支出と、年払いの備えを分ける"}</div>
        <p className="field-hint mb-5">初期値は当サイトの計算例です。平均・推奨額ではありません。</p>
        <div className={compact ? "input-grid" : "input-grid input-grid-detail"}>
          {!expensesOnly && <MoneyInput label="毎月の手取り" value={income} onChange={setIncome} />}
          {(compact ? budgetFields.slice(0, 1) : budgetFields).map((label, index) => <MoneyInput key={label} label={label} value={expenses[index]} onChange={value => updateExpense(index, value)} />)}
          {compact && <MoneyInput label="家賃以外の生活費" value={other} onChange={setOther} hint="食費・光熱費・通信費などの合計" />}
          {!compact && <MoneyInput label="年払い・臨時支出の年間予算" value={annual} onChange={setAnnual} max={100000} hint="更新料の積立・帰省・家電買替えなど。上の月額に入れた分は除きます。" />}
          {!compact && !expensesOnly && <MoneyInput label="毎月の貯金目標" value={savings} onChange={setSavings} hint="年払いの備えとは別に残したい金額" />}
        </div>{!compact && <p className="field-hint mt-4">保険・医療・衣服・交際費・返済などは「その他の支出」へ。計算中の入力内容・比較用の記録は、ページを再読み込みすると消えます。</p>}
      </div>
      <section className="budget-result" aria-label="計算結果" aria-live="polite" aria-atomic="true">
        <p className="result-label">{expensesOnly ? "年払いの備えを含む月額" : result && result.flexible < 0 ? "予算に対する毎月の不足額" : compact ? "毎月残るお金" : "備え・貯金目標を引いた残額"}</p>
        {result ? <><p className="result-number">{format(Math.abs(expensesOnly ? result.monthlyCost : result.flexible))}<span>万円</span></p>
          <p className="result-equation">{compact ? `手取り ${income}万円 − 生活費 ${format(result.total)}万円` : "表示は小数点以下2桁まで。端数は計算途中で保持しています。"}</p>
          <div className="result-divider" />
          {!compact && <><div className="result-detail"><span>毎月の生活費</span><strong>{format(result.total)}万円</strong></div><div className="result-detail"><span>年払いの備え（年額÷12）</span><strong>{format(result.reserve)}万円</strong></div>
            {!expensesOnly && <><div className="result-detail"><span>貯金目標</span><strong>{format(result.savings)}万円</strong></div><div className="result-detail"><span>貯金目標を引く前の残額</span><strong>{format(result.available)}万円</strong></div></>}</>}
          <div className="result-detail"><span>{expensesOnly ? "年間の支出予算" : compact ? "12か月分の残額" : "備えを引いた年間の残額（貯金前）"}</span><strong>{format(expensesOnly ? result.monthlyCost * 12 : result.annualAvailable)}万円</strong></div>
          <p className="result-note">{compact ? "臨時の出費を引く前の金額です。この全額を貯金できるとは限りません。" : expensesOnly ? "年払いの備えは月々に取り分ける予算です。実際の請求時期とは異なります。" : result.flexible < 0 ? "設定した支出・備え・貯金目標の合計が手取りを上回っています。入力漏れや重複を確かめ、予算を見直してください。" : "残額は予備の余裕です。未入力の支出・収入変動は反映していません。貯金の実現を保証するものではありません。"}</p>
        </> : <p className="py-6">空欄・負数・入力範囲を確認してください。有効な金額を入力すると結果を表示します。</p>}
        {compact && <Link className="result-link" href="/simulation">年払い・貯金目標も含めて計算する →</Link>}
      </section>
    </div>
    {!compact && <section className="explanation"><h2>変更前と変更後を比べる</h2><p>現在の条件を記録してから、家賃や食費を変えてください。比較はこのページを開いている間だけ使えます。</p>
      <div className="action-row"><button className="action-button" type="button" disabled={!result} onClick={() => result && setSaved({ income, expenses: [...expenses], annual, savings, result })}>{saved ? "現在の条件で記録し直す" : "現在の条件を比較用に記録"}</button>{saved && <button className="action-button secondary" type="button" onClick={() => { setIncome(saved.income); setExpenses([...saved.expenses]); setAnnual(saved.annual); setSavings(saved.savings); }}>記録した入力に戻す</button>}</div>
      {saved && <><p role="status" className="field-hint">比較用の条件を記録しています。下の表は入力に合わせて更新されます。</p><div className="table-scroll" tabIndex={0} role="region" aria-label="予算の比較表"><table className="comparison-table"><caption>単位：万円／月（年払いの備えを含む）</caption><thead><tr><th scope="col">項目</th><th scope="col">記録した条件</th><th scope="col">現在の条件</th><th scope="col">差額（現在−記録）</th></tr></thead><tbody>
        {!expensesOnly && <tr><th scope="row">手取り</th><td>{format(Number(saved.income))}</td><td>{parsedIncome !== null ? format(parsedIncome) : "入力を確認"}</td><td>{parsedIncome !== null ? format(parsedIncome - Number(saved.income)) : "—"}</td></tr>}
        {([ ["支出と備え", "monthlyCost"], ...(!expensesOnly ? [["貯金目標", "savings"], ["貯金目標を引いた残額", "flexible"]] : []) ] as [string, "monthlyCost" | "savings" | "flexible"][]).map(([label, key]) => <tr key={key}><th scope="row">{label}</th><td>{format(saved.result[key])}</td><td>{result ? format(result[key]) : "入力を確認"}</td><td>{result ? format(result[key] - saved.result[key]) : "—"}</td></tr>)}
      </tbody></table></div></>}
    </section>}
  </>;
}
