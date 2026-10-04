import { wholeFoodsContentSchema } from "./schema";

const wholeFoodsData = wholeFoodsContentSchema.parse({
  home: {
    hero: {
      title: "Nature's Best Selection",
      subtitle: "Your one-stop shop for organic, wholesome foods and sustainable living",
      backgroundImage: "/images/nature.png",
      primaryCtaLabel: "Shop Now",
      secondaryCtaLabel: "Learn More",
    },
    features: [
      {
        icon: "Leaf",
        title: "Organic Certified",
        description: "All products are certified organic and ethically sourced",
      },
      {
        icon: "Apple",
        title: "Local Produce",
        description: "Supporting local farmers and sustainable agriculture",
      },
      {
        icon: "Sprout",
        title: "Eco-Friendly",
        description: "Committed to sustainable packaging and practices",
      },
      {
        icon: "Store",
        title: "Bulk Options",
        description: "Reduce waste with our bulk food section",
      },
    ],
    story: {
      eyebrow: "A better everyday choice",
      title: "Wholesome food should be easier to understand and enjoy",
      paragraphs: [
        "We created our store for people who want to eat well without turning every shopping trip into research. Our shelves bring together honest ingredients, seasonal produce, and practical choices for a more sustainable home.",
        "Behind each product is a simple question: does it support people and the planet as well as it supports your wellbeing? That question guides our partnerships, our packaging choices, and the advice we share with our community.",
      ],
    },
    footer: {
      title: "Make us part of your weekly routine",
      text: "Visit the store for thoughtful ingredients, practical guidance, and plenty of fresh inspiration.",
      openingHours: {
        title: "Store hours",
        rows: [
          { days: "Monday - Friday", hours: "8:00 - 19:00" },
          { days: "Saturday", hours: "8:00 - 18:00" },
          { days: "Sunday", hours: "10:00 - 17:00" },
        ],
      },
      location: {
        title: "Visit the store",
        address: "12 Green Lane, Amsterdam",
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13,
      },
    },
  },
  about: {
    story: {
      title: "Our Story",
      intro:
        "Founded with a passion for healthy living and sustainable practices, we've been serving our community with the finest organic and whole foods since 2010.",
    },
    pillars: [
      {
        icon: "Heart",
        title: "Our Mission",
        text: "To provide access to the highest quality organic foods while promoting sustainable living.",
      },
      {
        icon: "Users",
        title: "Our Community",
        text: "Building strong relationships with local farmers and our customers is at the heart of what we do.",
      },
      {
        icon: "Globe",
        title: "Our Impact",
        text: "Committed to reducing our environmental footprint through sustainable practices.",
      },
    ],
    join: {
      image: "/images/nature-people.png",
      title: "Join Our Journey",
      text: "We're more than just a store - we're a community of health-conscious individuals committed to sustainable living and ethical consumption.",
      ctaLabel: "Join Our Newsletter",
    },
  },
  products: {
    pageTitle: "Our Products",
    categories: [
      {
        category: "Fresh Produce",
        items: [
          {
            name: "Organic Vegetables",
            image: "/images/nature-1.png",
            width: 400,
            height: 300,
            price: "$4.99/lb",
            description: "Fresh, locally sourced organic vegetables",
          },
          {
            name: "Seasonal Fruits",
            image: "/images/nature-2.png",
            width: 400,
            height: 300,
            price: "$5.99/lb",
            description: "Sweet and juicy seasonal fruits",
          },
        ],
      },
      {
        category: "Bulk Foods",
        items: [
          {
            name: "Organic Grains",
            image: "/images/nature-3.png",
            width: 400,
            height: 300,
            price: "$3.99/lb",
            description: "Wholesome organic grains and cereals",
          },
          {
            name: "Mixed Nuts",
            image: "/images/nature-4.png",
            width: 400,
            height: 300,
            price: "$12.99/lb",
            description: "Premium selection of organic nuts",
          },
        ],
      },
    ],
  },
});

export default wholeFoodsData;
