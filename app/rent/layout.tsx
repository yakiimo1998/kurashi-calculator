import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/rent", "家賃計算機｜生活費と貯金目標から家賃予算を逆算", "手取り・生活費・年払い・貯金目標から住居費の予算を無料計算。割合での試算と候補の家賃・管理費を比較し、毎月の残額や不足を確認できます。");

export default function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}