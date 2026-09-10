import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/take-home" },
  title: "手取りの簡易試算｜年収と仮の手取り率で計算",
  description:
    "年収に指定した手取り率を掛ける簡易試算です。税金・社会保険料は個別計算しません。",
};

export default function TakeHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}