export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  // Replace with real thumbnail (16:9 or 4:5) — see README "Placeholders" section.
  thumbnail: string;
  videoUrl?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "roofing-campaign",
    title: "Roofing Campaign",
    category: "Paid Social Creative",
    description: "A hook-driven ad set built to lower cost-per-lead for a regional roofing brand.",
    thumbnail: "/portfolio/roofing.jpg",
  },
  {
    slug: "luxury-property",
    title: "Luxury Property",
    category: "Property & Hospitality",
    description: "A cinematic walkthrough that turns a listing into a short film.",
    thumbnail: "/portfolio/luxury-property.jpg",
  },
  {
    slug: "automotive-campaign",
    title: "Automotive Campaign",
    category: "AI Commercial",
    description: "A studio-grade product commercial built without a studio shoot.",
    thumbnail: "/portfolio/automotive.jpg",
  },
  {
    slug: "ecommerce-product",
    title: "Ecommerce Product",
    category: "Product Advertising",
    description: "Ten creative variations from a single product, built for split-testing.",
    thumbnail: "/portfolio/ecommerce.jpg",
  },
  {
    slug: "restaurant-campaign",
    title: "Restaurant Campaign",
    category: "Social Creative",
    description: "Appetite-driving short-form built for a weekly content cadence.",
    thumbnail: "/portfolio/restaurant.jpg",
  },
  {
    slug: "fitness-brand",
    title: "Fitness Brand",
    category: "Performance Creative",
    description: "UGC-style ads designed to hold attention past the first second.",
    thumbnail: "/portfolio/fitness.jpg",
  },
];
