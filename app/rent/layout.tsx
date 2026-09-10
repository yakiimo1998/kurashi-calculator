import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/rent" },
  title: "適正家賃計算機｜手取りから家賃の目安を計算",
  description:
    "月の手取り額を入力するだけで、設定した割合での適正家賃の目安をかんたんに計算できます。",
};

export default function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}