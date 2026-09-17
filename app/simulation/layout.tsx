import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/simulation", "一人暮らしシミュレーター｜生活費と毎月残るお金を計算", "毎月の手取りと家賃・食費などの生活費から、月間・年間の収支を無料試算。固定費を変えて比較できます。年間額は同じ条件が12か月続く仮定です。");

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}