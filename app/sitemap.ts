import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kurashi-calculator.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://kurashi-calculator.vercel.app/take-home",
      lastModified: new Date(),
    },
    {
      url: "https://kurashi-calculator.vercel.app/rent",
      lastModified: new Date(),
    },
    {
      url: "https://kurashi-calculator.vercel.app/living-cost",
      lastModified: new Date(),
    },
    {
      url: "https://kurashi-calculator.vercel.app/simulation",
      lastModified: new Date(),
    },
        {
      url: "https://kurashi-calculator.vercel.app/take-home-20",
      lastModified: new Date(),
    },
    {
      url: "https://kurashi-calculator.vercel.app/take-home-25",
      lastModified: new Date(),
    },
  ];
}