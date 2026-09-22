import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/take-home", "手取り確認計算機｜給与明細・年収から家計を整理", "給与明細の支給合計と控除から差引支給額を確認。通勤費等を除く予算や年収からの簡易試算も計算できます。税額・保険料の個別計算は行いません。");

export default function TakeHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}