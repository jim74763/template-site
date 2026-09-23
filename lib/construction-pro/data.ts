import type { ConstructionData } from "@/components/construction-pro/types";

const constructionData: ConstructionData = {
  home: {
    hero: {
      title: "Building Excellence, Delivering Trust",
      subtitle: "Your vision, our expertise - creating spaces that inspire and endure",
      backgroundImage: "/images/construction.png",
      primaryCtaLabel: "Get a Quote",
      secondaryCtaLabel: "View Our Work",
    },
    features: [
      {
        icon: "Building2",
        title: "Commercial Construction",
        description: "Expert solutions for businesses of all sizes",
      },
      {
        icon: "Hammer",
        title: "Residential Projects",
        description: "Turning houses into dream homes",
      },
      {
        icon: "Shield",
        title: "Licensed & Insured",
        description: "Full coverage for your peace of mind",
      },
      {
        icon: "Clock",
        title: "On-Time Delivery",
        description: "Meeting deadlines without compromising quality",
      },
    ],
    featuredProjectsTitle: "Featured Projects",
    featuredProjects: [
      {
        image: "/images/construction-1.png",
        title: "Modern Office Complex",
        category: "Commercial",
        width: 800,
        height: 600,
      },
      {
        image: "/images/construction-2.png",
        title: "Luxury Home Renovation",
        category: "Residential",
        width: 800,
        height: 600,
      },
      {
        image: "/images/construction-3.png",
        title: "Industrial Facility",
        category: "Industrial",
        width: 800,
        height: 600,
      },
    ],
  },
  contact: {
    hero: {
      title: "Let's Build Something Together",
      subtitle: "Ready to start your project? We're here to help bring your vision to life.",
    },
    formTitle: "Get in Touch",
    contactInfo: {
      phone: "(555) 123-4567",
      email: "contact@contractor.com",
      address: "123 Construction Ave, Building City, ST 12345",
    },
    businessHours: [
      { label: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
      { label: "Saturday", hours: "9:00 AM - 2:00 PM" },
      { label: "Sunday", hours: "Closed" },
    ],
    serviceAreas: {
      title: "Service Areas",
      text: "We serve the greater metropolitan area and surrounding counties. Contact us to see if we cover your location.",
    },
  },
  projects: {
    hero: {
      title: "Our Projects",
      subtitle: "Explore our portfolio of successful projects across various sectors",
    },
    projects: [
      {
        title: "Modern Office Complex",
        category: "Commercial",
        image: "/images/construction-1.png",
        width: 800,
        height: 600,
        description:
          "A state-of-the-art office complex featuring sustainable design and smart building technology.",
        details: {
          location: "Downtown Business District",
          duration: "18 months",
          size: "50,000 sq ft",
        },
      },
      {
        title: "Luxury Home Renovation",
        category: "Residential",
        image: "/images/construction-2.png",
        width: 800,
        height: 600,
        description:
          "Complete renovation of a historic mansion, preserving its character while adding modern amenities.",
        details: {
          location: "Historic District",
          duration: "12 months",
          size: "8,500 sq ft",
        },
      },
      {
        title: "Industrial Warehouse",
        category: "Industrial",
        image: "/images/construction-3.png",
        width: 800,
        height: 600,
        description:
          "Custom-built warehouse facility with advanced logistics capabilities and sustainable features.",
        details: {
          location: "Industrial Park",
          duration: "14 months",
          size: "75,000 sq ft",
        },
      },
    ],
  },
};

export default constructionData;
