export interface CaseStudy {
  slug: string;
  title: string;
  treatmentType: string;
  description: string;
  duration: string;
  result: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "smile-makeover-01",
    title: "Complete Smile Makeover",
    treatmentType: "Cosmetic Dentistry",
    description: "Full smile transformation combining veneers and whitening for a natural, radiant result.",
    duration: "6 Weeks",
    result: "Fully restored confidence with a natural-looking, symmetrical smile.",
    beforeImage: "/images/case-01-before.jpg",
    afterImage: "/images/case-01-after.jpg",
    featured: true,
  },
  {
    slug: "dental-implants-01",
    title: "Single Tooth Implant Restoration",
    treatmentType: "Dental Implants",
    description: "Replacement of a missing molar with a titanium implant and custom crown.",
    duration: "4 Months",
    result: "Permanent, fully functional tooth replacement matching natural dentition.",
    beforeImage: "/images/case-02-before.jpg",
    afterImage: "/images/case-02-after.jpg",
    featured: true,
  },
  {
    slug: "orthodontic-treatment-01",
    title: "Clear Aligner Orthodontics",
    treatmentType: "Orthodontic Treatment",
    description: "Correction of moderate crowding using a custom clear aligner sequence.",
    duration: "9 Months",
    result: "Achieved proper alignment and bite without traditional braces.",
    beforeImage: "/images/case-03-before.jpg",
    afterImage: "/images/case-03-after.jpg",
    featured: true,
  },
  {
    slug: "veneer-transformation-01",
    title: "Porcelain Veneer Transformation",
    treatmentType: "Cosmetic Dentistry",
    description: "Eight porcelain veneers designed to correct shape, color, and spacing.",
    duration: "3 Weeks",
    result: "Balanced, camera-ready smile with long-lasting durability.",
    beforeImage: "/images/case-04-before.jpg",
    afterImage: "/images/case-04-after.jpg",
    featured: false,
  },
  {
    slug: "full-mouth-rehab-01",
    title: "Full Mouth Rehabilitation",
    treatmentType: "Restorative Dentistry",
    description: "Comprehensive restoration addressing wear, bite alignment, and missing teeth.",
    duration: "8 Months",
    result: "Restored full oral function and long-term structural stability.",
    beforeImage: "/images/case-05-before.jpg",
    afterImage: "/images/case-05-after.jpg",
    featured: false,
  },
  {
    slug: "cosmetic-bonding-01",
    title: "Cosmetic Edge Bonding",
    treatmentType: "Cosmetic Dentistry",
    description: "Minimally invasive bonding to repair chipped front teeth.",
    duration: "1 Visit",
    result: "Seamless repair completed in a single appointment.",
    beforeImage: "/images/case-06-before.jpg",
    afterImage: "/images/case-06-after.jpg",
    featured: false,
  },
];