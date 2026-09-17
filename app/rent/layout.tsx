import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/rent", "家賃計算機｜手取りと家賃割合から予算を試算", "毎月の手取りと家賃に充てる割合から、家賃の予算を無料計算。生活費や貯金の希望額に合わせて比較できます。統計上の適正額を判定するものではありません。");

export default function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}