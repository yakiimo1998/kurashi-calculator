import Link from "next/link";
import ToolPage from "./ToolPage";
import ScenarioCalculator from "./ScenarioCalculator";
import { incomeGuides } from "../lib/income-scenarios";
import { budgetPlan } from "../lib/calculations";
const fmt = (n: number) => n.toLocaleString("ja-JP", {maximumFractionDigits:2});
const labels = ["家賃・管理費", "食費", "水道光熱費", "通信費", "日用品", "交通費", "その他"];
export default function IncomeGuidePage({ income }: { income: number }) {
  const guide = incomeGuides[income];
  const results = guide.cases.map(item => budgetPlan(item.income,item.expenses,item.annual,item.savings));
  return <ToolPage title={guide.title} description={guide.intro}>
    <aside className="article-note">すべて当サイトが条件を設定した計算例です。統計上の平均・推奨額・実在する人の家計ではありません。地域の相場や家族構成は反映していません。</aside>
    <nav className="section-links" aria-label="このページの内容"><a href="#examples">3つの家計例</a><a href="#adjust">自分の条件に変更</a><a href="#decision">比較のポイント</a></nav>
    <section id="examples" className="explanation"><h2>条件を変えると、残る金額はどう違う？</h2><div className="table-scroll" tabIndex={0} role="region" aria-label="3つの家計例の比較表"><table className="comparison-table"><caption>単位：万円／月。年払いの備えは年額を12で割った金額。</caption><thead><tr><th scope="col">項目</th>{guide.cases.map(item => <th key={item.name} scope="col">{item.name}</th>)}</tr></thead><tbody><tr><th scope="row">手取り</th>{guide.cases.map(item => <td key={item.name}>{fmt(item.income)}</td>)}</tr>{labels.map((label,index) => <tr key={label}><th scope="row">{label}</th>{guide.cases.map(item => <td key={item.name}>{fmt(item.expenses[index])}</td>)}</tr>)}
      {([ ["生活費合計","total"], ["年払いの備え","reserve"], ["貯金目標","savings"], ["目標を引いた残額（マイナスは不足）","flexible"] ] as const).map(([label,key]) => <tr key={key}><th scope="row">{label}</th>{results.map((item,index) => <td key={guide.cases[index].name}>{fmt(item[key])}</td>)}</tr>)}
    </tbody></table></div><div className="case-notes">{guide.cases.map(item => <div key={item.name}><h3>{item.name}</h3><p>{item.note}</p></div>)}</div></section>
    <section id="adjust" className="home-section"><h2 className="content-heading">この例を自分の条件に変更する</h2><p className="mb-5">家賃・交通費・年払いなどを変更すると、結果がその場で更新されます。</p><ScenarioCalculator cases={guide.cases} /></section>
    <section id="decision" className="explanation"><h2>比較して判断するポイント</h2>{guide.sections.map(section => <div key={section.title}><h3>{section.title}</h3><p>{section.text}</p></div>)}<h3>入力前に確認すること</h3><ul className="guide-list">{guide.checklist.map(item => <li key={item}>{item}</li>)}</ul><p>計算式は「手取り − 生活費 − 年払い予算÷12 − 貯金目標」。年払いの積立だけでは支払日に必要額がそろうとは限りません。賞与や未入力の臨時支出は含みません。</p><p><Link href="/saving-guide">目標金額までの積立期間を計算する</Link> ／ <Link href="/car-cost">車の月額費用を計算する</Link></p></section>
    <nav className="section-links" aria-label="別の手取りの家計例">{[20,25,30,35,40].filter(value => value !== income).map(value => <Link key={value} href={`/take-home-${value}`}>手取り{value}万円の比較例</Link>)}</nav><p className="field-hint mt-6">作成・編集：暮らしの計算機 ／ 更新日：2026年9月21日 ／ <Link href="/about">計算・編集方針</Link></p>
  </ToolPage>;
}
