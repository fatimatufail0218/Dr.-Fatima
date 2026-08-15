export interface Testimonial {
  name: string;
  review: string;
  treatment?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    review: "Dr. Sarah completely transformed my smile. The care and attention to detail were exceptional.",
    treatment: "Smile Makeover",
    rating: 5,
  },
  {
    name: "James Carter",
    review: "The implant procedure was seamless and painless. I finally feel confident smiling again.",
    treatment: "Dental Implants",
    rating: 5,
  },
  {
    name: "Amelia Chen",
    review: "Professional, warm, and incredibly skilled. The best dental experience I've ever had.",
    treatment: "Veneers",
    rating: 5,
  },
  {
    name: "Michael Reyes",
    review: "My aligner treatment exceeded expectations. Highly recommend her expertise.",
    treatment: "Orthodontics",
    rating: 4,
  },
  {
    name: "Olivia Bennett",
    review: "A truly premium experience from consultation to final results.",
    treatment: "Full Mouth Rehabilitation",
    rating: 5,
  },
];