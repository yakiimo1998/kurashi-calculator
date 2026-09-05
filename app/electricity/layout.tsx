import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電気代計算機｜家電の電気料金をかんたん計算",
  description:
    "消費電力・1日の使用時間・使用日数・電気料金単価から、家電の1か月・年間の電気代をかんたんに計算できます。",
};

export default function ElectricityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}