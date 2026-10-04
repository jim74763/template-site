import { bakeryContentSchema } from "./schema";

const bakeryData = bakeryContentSchema.parse({
  hero: {
    title: "Artisanal Bakery & Café",
    subtitle: "Fresh, handcrafted pastries and breads baked daily with love",
    backgroundImage: "/images/bakery.png",
    ctaLabel: "Order Now",
  },
  features: [
    {
      icon: "Cake",
      title: "Fresh Pastries",
      description: "Handcrafted daily using traditional recipes and finest ingredients",
    },
    {
      icon: "Coffee",
      title: "Specialty Coffee",
      description: "Perfect brew to complement your favorite pastry",
    },
    {
      icon: "ShoppingBag",
      title: "Custom Orders",
      description: "Special occasions deserve special treats",
    },
    {
      icon: "Star",
      title: "Quality First",
      description: "Only the finest ingredients make it to our kitchen",
    },
  ],
  story: {
    eyebrow: "Made here, every morning",
    title: "A neighborhood bakery built around unhurried craft",
    paragraphs: [
      "Our day begins before sunrise, when the first loaves go into the oven and the café starts to fill with the scent of butter, coffee, and warm bread. We make each batch by hand so the counter always reflects the rhythm of the season.",
      "Whether you stop in for a weekday croissant or trust us with a celebration cake, we want every visit to feel personal. Familiar recipes, careful ingredients, and a warm welcome are the simple ideas behind everything we bake.",
    ],
  },
  productsSection: {
    title: "Our Specialties",
    products: [
      {
        image: "/images/bakery-bread.png",
        name: "Artisan Breads",
        description: "Sourdough, Baguettes, and Whole Grain varieties",
        width: 600,
        height: 400,
      },
      {
        image: "/images/bakery-french-pastries.png",
        name: "French Pastries",
        description: "Croissants, Pain au Chocolat, and Danish",
        width: 600,
        height: 400,
      },
      {
        image: "/images/bakery-cake.png",
        name: "Custom Cakes",
        description: "Celebration cakes for any special occasion",
        width: 600,
        height: 400,
      },
    ],
  },
  cta: {
    title: "Ready to Place an Order?",
    text: "Experience the taste of our freshly baked goods delivered to your doorstep",
    buttonLabel: "Order Now",
  },
  footer: {
    title: "Come by for something fresh",
    text: "The ovens start early and the door stays open for coffee, bread, and a warm welcome.",
    openingHours: {
      title: "Bakery hours",
      rows: [
        { days: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
        { days: "Saturday", hours: "7:00 AM - 4:00 PM" },
        { days: "Sunday", hours: "8:00 AM - 2:00 PM" },
      ],
    },
    location: {
      title: "Find the bakery",
      address: "24 Rue du Marché, Paris",
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 13,
    },
  },
});

export default bakeryData;
