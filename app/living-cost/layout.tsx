import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/living-cost", "一人暮らし費用計算機｜毎月の生活費をかんたん計算", "家賃・食費・水道光熱費・通信費などを入力して、一人暮らしに毎月必要な生活費の目安をかんたんに計算できます。");

export default function LivingCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}