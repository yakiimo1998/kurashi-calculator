import Link from "next/link";
export default function ToolPage({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return <main id="main-content" className="tool-page"><Link href="/" className="back-link">← 計算機一覧</Link>
    <header className="tool-heading"><p className="section-kicker">暮らしの計算機</p><h1>{title}</h1><p>{description}</p></header>{children}
    <nav className="related-tools" aria-label="関連する計算機"><h2>ほかの費用も確認する</h2><div><Link href="/simulation">毎月の収支</Link><Link href="/rent">家賃の予算</Link><Link href="/living-cost">生活費の合計</Link><Link href="/electricity">家電の電気代</Link><Link href="/car-cost">車の費用</Link><Link href="/take-home">手取りの確認</Link><Link href="/fun">タバコ代計算機</Link></div><h2 className="mt-6">予算づくりの読みもの</h2><div><Link href="/living-cost-guide">生活費の内訳と予算</Link><Link href="/saving-guide">貯金計画の立て方</Link><Link href="/moving-cost">引っ越しの初期費用</Link><Link href="/electricity-guide">電気代の計算方法</Link></div></nav>
  </main>;
}
