import type { Metadata } from "next";
import Link from "next/link";
import BudgetCalculator from "./components/BudgetCalculator";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const tools = [
  { n: "01", href: "/simulation", title: "一人暮らしの収支", text: "家賃・食費などを分けて、毎月残るお金を確認。", tag: "家計全体" },
  { n: "02", href: "/rent", title: "家賃の予算", text: "手取りに占める割合を変えて、家賃を比較。", tag: "部屋探し" },
  { n: "03", href: "/living-cost", title: "生活費の合計", text: "7つの費目から、毎月と年間の支出を計算。", tag: "支出の整理" },
  { n: "04", href: "/take-home", title: "手取りの簡易試算", text: "年収と仮の手取り率から計算。税額計算は含みません。", tag: "収入の目安" },
  { n: "05", href: "/electricity", title: "家電の電気代", text: "消費電力と使用時間から、家電ごとの費用を計算。", tag: "光熱費" },
  { n: "06", href: "/car-cost", title: "車の費用", text: "ローン・燃料・保険などを月額にまとめて確認。", tag: "車のある暮らし" },
];
const guides = [
  ["/living-cost-guide", "生活費", "一人暮らしの予算の立て方", "固定費と変動費を分けて、見落としを減らす。"],
  ["/saving-guide", "貯金", "毎月いくら残せるかを考える", "残ったお金と、貯金に回すお金を分ける。"],
  ["/moving-cost", "引っ越し", "入居前に用意するお金", "引っ越し代だけでなく、契約時の費用も確認。"],
  ["/electricity-guide", "電気代", "家電の電気代を見積もる", "消費電力・使う時間・単価の調べ方。"],
];
export default function Home() {
  return <main id="main-content" className="home-page">
    <section className="home-intro"><div><p className="section-kicker">一人暮らしのお金を、見える形に。</p>
      <h1>この暮らし、<br className="mobile-break" />毎月いくら残る？</h1>
      <p>手取りと生活費を入れて、あなたの予算を確かめましょう。</p></div><span className="free-label">無料・登録不要</span></section>
    <BudgetCalculator compact />
    <p className="under-calculator">計算結果は入力条件に基づく試算です。金額を変更すると、その場で更新されます。</p>
    <section id="tools" className="home-section"><div className="section-heading"><div><p className="section-kicker">CALCULATORS</p><h2>知りたいお金から選ぶ</h2></div><span>6つの無料計算機</span></div>
      <div className="tool-grid">{tools.map(tool => <Link key={tool.href} href={tool.href} className="tool-card"><div className="tool-card-top"><span className="tool-index">{tool.n}</span><span className="tool-tag">{tool.tag}</span></div><h3>{tool.title}</h3><p>{tool.text}</p><span className="tool-action">計算機を開く <span aria-hidden="true">↗</span></span></Link>)}</div>
    </section>
    <section className="home-section"><Link href="/fun" className="fun-home-link"><div><p className="section-kicker">いつもの出費を、違う見方で。</p><h2>オモシロ計算機</h2><p>タバコを1年吸わなかったら、何ができた？<br />銘柄と本数から、タバコ代と別の使い道を比較。</p></div><span className="tool-action">タバコ代を計算する →</span></Link></section>
    <section className="income-section"><div><p className="section-kicker">BUDGET EXAMPLES</p><h2>手取り別に、暮らしを考える</h2><p>統計上の平均ではなく、費目を組み合わせた家計の計算例です。</p></div><div className="income-links">{[20,25,30,35,40].map(income => <Link key={income} href={"/take-home-" + income}><span>手取り</span><strong>{income}<small>万円</small></strong><span aria-hidden="true">→</span></Link>)}</div></section>
    <section className="home-section"><div className="section-heading"><div><p className="section-kicker">GUIDES</p><h2>予算づくりの読みもの</h2></div></div><div className="guide-grid">{guides.map(([href, tag, title, text]) => <Link href={href} key={href} className="guide-card"><span className="guide-tag">{tag}</span><h3>{title}</h3><p>{text}</p><span className="tool-action">読む →</span></Link>)}</div></section>
    <section className="trust-section"><h2>計算の前提を、わかりやすく。</h2><p>税金を厳密に計算するツールや、貯金額を保証するサービスではありません。各ページで計算式・入力例・含まれない費用を説明しています。</p><Link href="/about">運営・編集方針を見る →</Link></section>
  </main>;
}
