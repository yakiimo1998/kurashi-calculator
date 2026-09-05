import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "手取り計算機｜年収から手取り額をかんたん計算",
  description:
    "年収を入力するだけで、手取り年収と月あたりの手取り額の目安をかんたんに計算できます。",
};

export default function TakeHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}