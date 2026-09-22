"use client";
import { useState } from "react";
import BudgetCalculator from "./BudgetCalculator";
import type { Scenario } from "../lib/income-scenarios";
export default function ScenarioCalculator({ cases }: { cases: Scenario[] }) {
  const [selected, setSelected] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [revision, setRevision] = useState(0);
  const current = cases[loaded];
  return <section aria-label="家計例の調整"><div className="scenario-picker"><label htmlFor="scenario-preset">入力に使う計算例</label><select id="scenario-preset" value={selected} onChange={event => setSelected(Number(event.target.value))}>{cases.map((item,index) => <option key={item.name} value={index}>{item.name}</option>)}</select><button type="button" className="action-button" onClick={() => { setLoaded(selected); setRevision(value => value + 1); }}>この例を入力する</button><p className="field-hint">ボタンを押すと入力内容と比較用の記録を置き換えます。</p></div><p role="status" className="field-hint mb-4">読み込んだ例：{current.name}</p><BudgetCalculator key={revision} initialIncome={current.income} initialExpenses={current.expenses} initialAnnual={current.annual} initialSavings={current.savings} /></section>;
}
