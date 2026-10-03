import { dentalContentSchema } from "./schema";

const dentalData = dentalContentSchema.parse({
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
  story: {
    eyebrow: "Care that starts with listening",
    title: "A calmer, more personal way to look after your smile",
    paragraphs: [
      "We believe excellent dental care begins with a conversation. Before recommending a treatment, our team takes time to understand your concerns, explain the options clearly, and build a plan that feels comfortable for you.",
      "From routine visits to longer treatment journeys, you can expect the same thoughtful approach at every appointment. Our goal is to help you feel informed, at ease, and confident about the health of your smile.",
    ],
  },
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
});

export default dentalData;
