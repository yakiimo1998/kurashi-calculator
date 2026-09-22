import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/electricity", "電気代計算機｜消費電力・年間kWhから条件を比較", "Wと使用時間、または年間消費電力量kWhから家電の電気代を無料計算。条件A・Bの月額換算・年間差額を比較できます。");

export default function ElectricityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}