import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/simulation", "一人暮らしシミュレーター｜年払い・貯金目標と家計比較", "手取り・7つの生活費・年払いの備え・貯金目標から毎月の収支を無料計算。条件を記録して変更前後を比較でき、残額と不足額を区別して確認できます。");

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}