import type { LucideIcon } from "lucide-react";
import { Sparkles, Gem, Wrench, AlignCenter, ShieldCheck, Smile } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Cosmetic Dentistry",
    description: "Transformative treatments designed to enhance the natural beauty of your smile.",
    icon: Sparkles,
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-feeling replacements for missing teeth.",
    icon: Gem,
  },
  {
    title: "Restorative Dentistry",
    description: "Repairing and rebuilding damaged teeth to restore full function.",
    icon: Wrench,
  },
  {
    title: "Orthodontics",
    description: "Modern alignment solutions including clear aligner therapy.",
    icon: AlignCenter,
  },
  {
    title: "Preventive Dentistry",
    description: "Proactive care focused on long-term oral health and wellness.",
    icon: ShieldCheck,
  },
  {
    title: "Smile Design",
    description: "Custom smile planning combining artistry and dental science.",
    icon: Smile,
  },
];