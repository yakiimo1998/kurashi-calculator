import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/car-cost", "車の費用計算機｜車にかかる費用をかんたん計算", "車の購入価格、ローン、ガソリン代、駐車場代、自動車保険、税金、車検・整備費などから、毎月・年間の車関連費用をかんたんに計算できます。");

export default function CarCostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}