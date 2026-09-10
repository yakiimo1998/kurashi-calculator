import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kurashi-calculator.pages.dev"),
  title: "暮らしの計算機｜一人暮らしの生活費・家賃・収支を無料計算",
  description: "毎月の手取りと生活費から、残るお金をその場で試算。家賃・電気代・車の費用など6つの無料計算機と、予算づくりの計算例を掲載しています。",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>
    <a className="skip-link" href="#main-content">本文へ移動</a>
    <header className="site-header"><div className="header-inner"><Link href="/" className="brand"><span className="brand-mark" aria-hidden="true">＝</span>暮らしの計算機</Link>
      <nav aria-label="メインメニュー"><Link href="/#tools">計算機一覧</Link><Link href="/living-cost-guide">予算ガイド</Link><Link href="/about">このサイトについて</Link></nav></div></header>
    {children}
    <footer className="site-footer"><div className="footer-inner"><div><Link href="/" className="brand">暮らしの計算機</Link><p>暮らしのお金を、自分の条件で。</p></div><nav aria-label="サイト情報"><Link href="/about">運営・編集方針</Link><Link href="/contact">お問い合わせ</Link><Link href="/privacy">プライバシーポリシー</Link><Link href="/terms">利用規約・免責事項</Link></nav></div><p className="footer-bottom">計算結果は目安です。広告を掲載する箇所には「広告」または「PR」と表示します。</p></footer>
  </body></html>;
}
