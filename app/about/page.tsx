import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "運営・編集方針｜暮らしの計算機", description: "暮らしの計算機の運営窓口、計算の前提、広告と編集の方針、訂正のご連絡先です。", alternates:{canonical:"/about"} };
export default function AboutPage() {
 return <main id="main-content" className="tool-page"><header className="tool-heading"><p className="section-kicker">ABOUT</p><h1>運営・編集方針</h1><p>暮らしのお金を、自分の条件で考えるための計算ツールです。</p></header>
 <section className="explanation"><h2>運営窓口</h2><p>サービス名：暮らしの計算機<br />運営・お問い合わせ窓口：暮らしの計算機（X：@kura_culator）</p><p><Link href="/contact">不具合・掲載内容の訂正・お問い合わせはこちら</Link></p></section>
 <section className="explanation"><h2>計算と記事の方針</h2><p>家賃・生活費・電気代など、入力条件に基づく試算を提供しています。入力例や家計の計算例を、統計上の平均や推奨額と区別して掲載します。</p><p>手取りの簡易試算は、年収に仮の手取り率を掛けるものです。税制・社会保険制度に基づく個別計算や、税務上の助言は行いません。</p><p>計算結果は将来の支出や貯金額を保証するものではありません。条件や料金は契約書、給与明細、各サービスの公式情報と照らしてご確認ください。</p></section>
 <section className="explanation"><h2>広告について</h2><p>一部の記事にA8.netのアフィリエイト広告を掲載しています。リンクを経由した申込み等により、運営者が報酬を受け取る場合があります。対象記事の冒頭と広告付近に「広告」または「PR」を表示します。</p><p>広告と計算結果は分けて掲載します。広告主のサービスを利用しなくても、計算機は無料で使えます。料金・対象地域・解約条件などはリンク先の最新情報を確認してください。</p></section>
 <section className="explanation"><h2>著作物と訂正について</h2><p>本文は当サイト向けに作成し、第三者の文章や画像を無断で転載しない方針です。広告素材の権利は各権利者に帰属します。</p><p>計算や説明に誤りがありましたら、対象ページと内容をお問い合わせ窓口へお知らせください。確認して必要な修正を行います。</p></section>
 <section className="explanation"><h2>表示方針の参考資料</h2><p><a href="https://www.caa.go.jp/policies/policy/representation/fair_labeling/stealth_marketing/">消費者庁：ステルスマーケティングに関する案内</a><br /><a href="https://www.a8.net/compliance/prNotation-urlSubmission.php">A8.net：PR等の表記について</a><br /><a href="https://www.bunka.go.jp/seisaku/chosakuken/taisetsu/point/index.html">文化庁：ここが知りたい著作権</a></p></section>
 <p className="field-hint mt-6">更新日：2026年9月10日</p></main>;
}
