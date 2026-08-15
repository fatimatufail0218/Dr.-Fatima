export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
}

export const achievements: Achievement[] = [
  {
    id: "cert-01",
    title: "Advanced Cosmetic Dentistry Certification",
    organization: "International Academy of Cosmetic Dentistry",
    year: "2023",
    description: "Certified in advanced smile design, veneer planning, and aesthetic restorations.",
    image: "/images/certificate-01.jpg",
  },
  {
    id: "cert-02",
    title: "Implantology Specialization",
    organization: "Global Implant Institute",
    year: "2022",
    description: "Specialized training in surgical and prosthetic implant procedures.",
    image: "/images/certificate-02.jpg",
  },
  {
    id: "cert-03",
    title: "International Dental Conference Speaker",
    organization: "World Dental Congress",
    year: "2024",
    description: "Invited speaker presenting research on minimally invasive restorative techniques.",
    image: "/images/certificate-03.jpg",
  },
  {
    id: "cert-04",
    title: "Excellence in Patient Care Award",
    organization: "National Dental Association",
    year: "2023",
    description: "Recognized for outstanding patient satisfaction and clinical outcomes.",
    image: "/images/certificate-04.jpg",
  },
  {
    id: "cert-05",
    title: "Orthodontic Aligner Certification",
    organization: "Clear Aligner Academy",
    year: "2021",
    description: "Certified provider for advanced clear aligner treatment planning.",
    image: "/images/certificate-05.jpg",
  },
  {
    id: "cert-06",
    title: "Member, Academy of General Dentistry",
    organization: "Academy of General Dentistry",
    year: "2020",
    description: "Active professional membership supporting continued dental education.",
    image: "/images/certificate-06.jpg",
  },
];