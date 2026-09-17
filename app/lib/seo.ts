import type { Metadata } from "next";

export const SITE_URL = "https://kurashi-calculator.pages.dev";
export const SITE_NAME = "暮らしの計算機";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const brandedTitle = title.includes(SITE_NAME) ? title : `${title}｜${SITE_NAME}`;
  return {
    title: brandedTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website", locale: "ja_JP", siteName: SITE_NAME,
      url: `${SITE_URL}${path}`, title: brandedTitle, description,
      images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: SITE_NAME }],
    },
    twitter: { card: "summary", title: brandedTitle, description, images: [`${SITE_URL}/icon.png`] },
  };
}
