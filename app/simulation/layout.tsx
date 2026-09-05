import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "一人暮らしシミュレーター｜生活費と貯金額を計算",
  description:
    "毎月の手取りと生活費を入力して、毎月いくら残るか・年間でいくら貯められるかをかんたんにシミュレーションできます。",
};

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}