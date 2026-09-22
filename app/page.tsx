import { pageMetadata } from "./lib/seo";
import Link from "next/link";
import BudgetCalculator from "./components/BudgetCalculator";

export const metadata = pageMetadata("/", "暮らしの計算機｜生活費・家賃・電気代・タバコ代を無料計算", "手取りと生活費から毎月残るお金を試算。家賃・電気代・車の費用・タバコ代などを自分の条件で計算できます。無料・登録不要。計算式と前提、家計の予算例も掲載。");

const tools = [
  { n: "01", href: "/simulation", title: "一人暮らしの収支", text: "年払い・貯金目標を加え、変更前後の家計を比較。", tag: "家計全体" },
  { n: "02", href: "/rent", title: "家賃の予算", text: "生活費と貯金目標から逆算し、候補の部屋を比較。", tag: "部屋探し" },
  { n: "03", href: "/living-cost", title: "生活費の合計", text: "7つの費目と年払いから、月額・年間の支出を計算。", tag: "支出の整理" },
  { n: "04", href: "/take-home", title: "手取りの確認", text: "給与明細から使える金額を整理。年収からの簡易試算も。", tag: "収入の整理" },
  { n: "05", href: "/electricity", title: "家電の電気代", text: "W・時間や年間kWhから計算し、条件A・Bを比較。", tag: "光熱費" },
  { n: "06", href: "/car-cost", title: "車の費用", text: "ローン・燃料・保険などを月額にまとめて確認。", tag: "車のある暮らし" },
  { n: "07", href: "/saving-guide", title: "貯金目標と期間", text: "目標金額まで、毎月いくら・何か月必要かを計算。", tag: "目的のある貯金" },
  { n: "08", href: "/moving-cost", title: "引っ越し初期費用", text: "契約・運搬・家具家電の総額と資金の不足を確認。", tag: "新生活の準備" },
];
const guides = [
  ["/living-cost-guide", "生活費", "一人暮らしの予算の立て方", "固定費と変動費を分けて、見落としを減らす。"],
  ["/saving-guide", "貯金", "毎月いくら残せるかを考える", "残ったお金と、貯金に回すお金を分ける。"],
  ["/moving-cost", "引っ越し", "入居前に用意するお金", "引っ越し代だけでなく、契約時の費用も確認。"],
  ["/electricity-guide", "電気代", "家電の電気代を見積もる", "消費電力・使う時間・単価の調べ方。"],
];
export default function Home() {
  return <main id="main-content" className="home-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "暮らしの計算機", url: "https://kurashi-calculator.pages.dev/", inLanguage: "ja" }).replace(/</g, "\\u003c") }} />
    <section className="home-intro"><div><p className="section-kicker">一人暮らしのお金を、見える形に。</p>
      <h1>一人暮らしの生活費、<br className="mobile-break" />毎月いくら残る？</h1>
      <p>手取りと生活費を入れて、あなたの予算を確かめましょう。</p></div><span className="free-label">無料・登録不要</span></section>
    <BudgetCalculator compact />
    <p className="under-calculator">計算結果は入力条件に基づく試算です。金額を変更すると、その場で更新されます。</p>
    <section id="tools" className="home-section"><div className="section-heading"><div><p className="section-kicker">CALCULATORS</p><h2>知りたいお金から選ぶ</h2></div><span>8つの無料計算機</span></div>
      <div className="tool-grid">{tools.map(tool => <Link key={tool.href} href={tool.href} className="tool-card"><div className="tool-card-top"><span className="tool-index">{tool.n}</span><span className="tool-tag">{tool.tag}</span></div><h3>{tool.title}</h3><p>{tool.text}</p><span className="tool-action">計算機を開く <span aria-hidden="true">↗</span></span></Link>)}</div>
    </section>
    <section className="home-section"><Link href="/fun" className="fun-home-link"><div><p className="section-kicker">いつもの出費を、違う見方で。</p><h2>オモシロ計算機</h2><p>タバコを1年吸わなかったら、何ができた？<br />銘柄と本数から、タバコ代と別の使い道を比較。</p></div><span className="tool-action">タバコ代を計算する →</span></Link></section>
    <section className="income-section"><div><p className="section-kicker">BUDGET EXAMPLES</p><h2>手取り別に、暮らしを考える</h2><p>年払い・通勤・車・収入変動など、手取り別に異なる条件を比較。その場で自分の金額に変更できます。</p></div><div className="income-links">{[20,25,30,35,40].map(income => <Link key={income} href={"/take-home-" + income}><span>手取り</span><strong>{income}<small>万円</small></strong><span aria-hidden="true">→</span></Link>)}</div></section>
    <section className="home-section"><div className="section-heading"><div><p className="section-kicker">GUIDES</p><h2>予算づくりの読みもの</h2></div></div><div className="guide-grid">{guides.map(([href, tag, title, text]) => <Link href={href} key={href} className="guide-card"><span className="guide-tag">{tag}</span><h3>{title}</h3><p>{text}</p><span className="tool-action">読む →</span></Link>)}</div></section>
    <section className="trust-section"><h2>計算の前提を、わかりやすく。</h2><p>税金を厳密に計算するツールや、貯金額を保証するサービスではありません。各ページで計算式・入力例・含まれない費用を説明しています。</p><Link href="/about">運営・編集方針を見る →</Link></section>
  </main>;
}
