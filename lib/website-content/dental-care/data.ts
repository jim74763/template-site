import type { DentalData } from "./types";

const dentalData: DentalData = {
  hero: {
    title: "Your Smile, Our Priority",
    subtitle: "Experience compassionate and comprehensive dental care in a state-of-the-art facility.",
    ctaLabel: "Book Appointment",
  },
  services: [
    {
      icon: "CheckCircle",
      title: "General Dentistry",
      description: "Routine check-ups, cleanings, fillings, and preventive care to maintain your oral health.",
    },
    {
      icon: "Smile",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with teeth whitening, veneers, bonding, and smile makeovers.",
    },
    {
      icon: "Users",
      title: "Orthodontics",
      description: "Straighten your teeth and improve your bite with modern orthodontic solutions.",
    },
    {
      icon: "Phone",
      title: "Emergency Care",
      description: "Prompt and effective treatment for dental emergencies. Call us anytime.",
    },
  ],
  about: {
    title: "Meet Your Trusted Dental Team",
    text: "At BrightSmile Dental Clinic, we are dedicated to providing personalized care for every patient. Our experienced team uses the latest technology to ensure comfortable and effective treatments. We believe in building lasting relationships based on trust and exceptional dental care.",
    image: "/images/dentist.png",
    ctaLabel: "Meet Our Team",
  },
  testimonial: {
    quote:
      "The best dental experience I've ever had! The staff is friendly, and Dr. Bright made me feel completely at ease. My smile has never looked better!",
    author: "Jamie L.",
  },
  cta: {
    title: "Ready for a Healthier, Brighter Smile?",
    text: "Schedule your appointment today and take the first step towards optimal oral health.",
    buttonLabel: "Book Your Visit Now",
  },
};

export default dentalData;
