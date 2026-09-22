import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/living-cost", "一人暮らし費用計算機｜月払いと年払いの支出を合計", "家賃・食費・水道光熱費など7項目と年払い予算を合算。月々に確保する金額と年間総額、変更前後の差を無料で確認できます。");

export default function LivingCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}