import { organicMarketContentSchema } from './schema'

const organicMarketData = organicMarketContentSchema.parse({
  hero: {
    title: 'Fresh & Organic Foods',
    subtitle:
      "Nourish your body with nature's finest selection of organic produce and whole foods",
    backgroundImage: '/images/wholefood.png',
    ctaLabel: 'Shop Now',
  },
  features: [
    {
      icon: 'Leaf',
      title: '100% Organic',
      description:
        'All our products are certified organic and sustainably sourced',
    },
    {
      icon: 'Apple',
      title: 'Fresh Daily',
      description: 'We stock fresh produce daily from local organic farms',
    },
    {
      icon: 'Heart',
      title: 'Health First',
      description: 'Carefully selected products for your wellbeing',
    },
    {
      icon: 'Truck',
      title: 'Home Delivery',
      description: 'Same-day delivery for your convenience',
    },
  ],
  story: {
    eyebrow: 'Food with a closer connection',
    title: 'Good choices start with knowing where your food comes from',
    paragraphs: [
      'We work with growers and makers who care for the soil, their craft, and the people they feed. That means a changing selection of produce at its best, pantry staples chosen with care, and straightforward guidance when you want it.',
      'Our market is designed to make everyday shopping feel less anonymous. By bringing local relationships and thoughtful sourcing under one roof, we help families fill their baskets with food that tastes good and supports a healthier food system.',
    ],
  },
  categoriesSection: {
    title: 'Shop by Category',
    categories: [
      {
        image: '/images/wholefood-1.png',
        name: 'Fresh Produce',
        description: 'Organic fruits and vegetables',
        width: 800,
        height: 600,
      },
      {
        image: '/images/wholefood-2.png',
        name: 'Bulk Foods',
        description: 'Grains, nuts, and dried fruits',
        width: 800,
        height: 600,
      },
      {
        image: '/images/wholefood-3.png',
        name: 'Organic Dairy',
        description: 'Fresh milk, cheese, and eggs',
        width: 800,
        height: 600,
      },
    ],
  },
  cta: {
    title: 'Ready to Shop Healthy?',
    text: 'Join thousands of happy customers who trust us for their organic food needs',
    buttonLabel: 'Start Shopping',
  },
  footer: {
    title: 'Visit your neighborhood market',
    text: "Stop by for the season's best produce, pantry staples, and friendly advice.",
    openingHours: {
      title: 'Market hours',
      rows: [
        { days: 'Monday - Saturday', hours: '8:00 AM - 7:00 PM' },
        { days: 'Sunday', hours: '9:00 AM - 5:00 PM' },
      ],
    },
    location: {
      title: 'Find us',
      address: '85 Market Street, Portland, OR',
      latitude: 45.5152,
      longitude: -122.6784,
      zoom: 13,
    },
  },
})

export default organicMarketData
