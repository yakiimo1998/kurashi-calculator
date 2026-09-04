import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/take-home",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/rent",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/living-cost",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/simulation",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/take-home-25",
      lastModified: new Date(),
    },
  ];
}