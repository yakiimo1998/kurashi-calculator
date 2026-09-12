export const PRICE_CHECKED_AT = "2026-09-12";
export const sources = {
  mevius: { name: "JT：メビウスの価格・本数", url: "https://www.jti.co.jp/tobacco/products/mevius/index.html" },
  seven: { name: "JT：セブンスターの価格・本数", url: "https://www.jti.co.jp/tobacco/products/sevenstars/index.html" },
  ploom: { name: "JT：プルーム用の現行価格・2026年10月1日の改定", url: "https://www.jti.co.jp/investors/library/press_releases/20260805_J01.html" },
};
export type TobaccoBrand = { id: string; name: string; group: string; packSize: number; price: number; source: keyof typeof sources; nextPrice?: number; nextDate?: string };
function family(prefix: string, group: string, names: string[], price: number, source: TobaccoBrand["source"], nextPrice?: number): TobaccoBrand[] {
  return names.map((name, i) => ({ id: `${prefix}-${i}`, name, group, packSize: 20, price, source, ...(nextPrice ? { nextPrice, nextDate: "2026-10-01" } : {}) }));
}
export const tobaccoBrands: TobaccoBrand[] = [
  ...family("mevius", "紙巻｜メビウス", ["メビウス", "メビウス・ボックス", "メビウス・100’s・ボックス", "メビウス・ライト", "メビウス・ライト・ボックス", "メビウス・ライト・100’s・ボックス", "メビウス・スーパーライト", "メビウス・スーパーライト・ボックス", "メビウス・スーパーライト・100’s・ボックス", "メビウス・エクストラライト", "メビウス・エクストラライト・ボックス", "メビウス・エクストラライト・100’s・ボックス", "メビウス・ワン", "メビウス・ワン・ボックス", "メビウス・ワン・100’s・ボックス", "メビウス・ストロング・ワン・100’s", "メビウス・プレミアムメンソール・オプション・パープル・8", "メビウス・プレミアムメンソール・オプション・パープル・5", "メビウス・プレミアムメンソール・オプション・パープル・ワン・100’s", "メビウス・プレミアムメンソール・オプション・イエロー・5", "メビウス・プレミアムメンソール・オプション・イエロー・ワン・100’s"], 580, "mevius"),
  ...family("mevius-e", "紙巻｜メビウス・イーシリーズ", ["12", "10", "10・100’s・スリム", "6", "6・100’s・スリム", "3・100’s", "3・100’s・スリム", "ワン・100’s", "ワン・100’s・スリム", "メンソール・オプション・パープル・8", "メンソール・オプション・パープル・5", "メンソール・オプション・パープル・5・100’s・スリム", "メンソール・オプション・パープル・ワン・100’s", "メンソール・オプション・パープル・ワン・100’s・スリム", "アイスストーム・8", "アイスストーム・5", "アイスストーム・ワン・100’s", "アイスストーム・ワン・100’s・スリム"].map(n => `メビウス・イーシリーズ・${n}`), 500, "mevius"),
  ...family("seven", "紙巻｜セブンスター", ["セブンスター", "セブンスター・ボックス", "セブンスター・10・ボックス", "セブンスター・7・ボックス", "セブンスター・メンソール・12", "セブンスター・メンソール・8", "セブンスター・ボールド・ブラック", "セブンスター・メンソール・ソリッドホワイト"], 600, "seven"),
  ...family("evo", "加熱式｜エボ・プルーム用", ["ディープ・レギュラー", "サクラ・レギュラー", "ブラック・メンソール", "コールド・メンソール", "フレッシュ・ミント", "グリーン・ミント", "ベリー・クリスタル", "トロピカル・ベリー・クリスタル", "トロピカル・バナナ・クリスタル", "ハチミツ・レモン・クリスタル", "トロピカル・ライム・クリスタル"].map(n => `エボ・${n}・プルーム用`), 580, "ploom", 620),
  ...family("ploom-mevius", "加熱式｜メビウス・プルーム用", ["ディープ・レギュラー", "スムース・レギュラー", "アロマリッチ・レギュラー", "ブラック・コールド・メンソール", "シャープ・コールド・メンソール", "コールド・メンソール", "ミックス・ミント・メンソール", "ベリー・オプション", "シトラス・オプション", "マスカット・オプション", "アップル・オプション", "ペアー・オプション"].map(n => `メビウス・${n}・プルーム用`), 550, "ploom", 590),
  ...family("ploom-camel", "加熱式｜キャメル・プルーム用", ["リッチ", "スムース", "メンソール・コールド", "メンソール・フレッシュ", "メンソール・ベリー", "メンソール・マスカット", "ベリー・オプション"].map(n => `キャメル・${n}・プルーム用`), 530, "ploom", 570),
];
export const periods = [{ label: "1週間", days: 7 }, { label: "1か月", days: 30 }, { label: "1年", days: 365 }, { label: "3年", days: 1095 }];
export function priceAt(brand: TobaccoBrand, date: string): number {
  return brand.nextDate && brand.nextPrice !== undefined && date >= brand.nextDate ? brand.nextPrice : brand.price;
}
export function validNumber(value: string, min: number, max: number): number | null {
  const n = Number(value);
  return value.trim() && Number.isFinite(n) && n >= min && n <= max ? n : null;
}
export function smokingCost(price: number, packSize: number, daily: number, days: number): number {
  return price * daily * days / packSize;
}
export function japanDate(now = new Date()): string {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}
