import type { OrganicMarketData } from "@/components/organic-market/types";

const organicMarketData: OrganicMarketData = {
  hero: {
    title: "Fresh & Organic Foods",
    subtitle: "Nourish your body with nature's finest selection of organic produce and whole foods",
    backgroundImage: "/images/wholefood.png",
    ctaLabel: "Shop Now",
  },
  features: [
    {
      icon: "Leaf",
      title: "100% Organic",
      description: "All our products are certified organic and sustainably sourced",
    },
    {
      icon: "Apple",
      title: "Fresh Daily",
      description: "We stock fresh produce daily from local organic farms",
    },
    {
      icon: "Heart",
      title: "Health First",
      description: "Carefully selected products for your wellbeing",
    },
    {
      icon: "Truck",
      title: "Home Delivery",
      description: "Same-day delivery for your convenience",
    },
  ],
  categoriesSection: {
    title: "Shop by Category",
    categories: [
      {
        image: "/images/wholefood-1.png",
        name: "Fresh Produce",
        description: "Organic fruits and vegetables",
        width: 800,
        height: 600,
      },
      {
        image: "/images/wholefood-2.png",
        name: "Bulk Foods",
        description: "Grains, nuts, and dried fruits",
        width: 800,
        height: 600,
      },
      {
        image: "/images/wholefood-3.png",
        name: "Organic Dairy",
        description: "Fresh milk, cheese, and eggs",
        width: 800,
        height: 600,
      },
    ],
  },
  cta: {
    title: "Ready to Shop Healthy?",
    text: "Join thousands of happy customers who trust us for their organic food needs",
    buttonLabel: "Start Shopping",
  },
};

export default organicMarketData;
