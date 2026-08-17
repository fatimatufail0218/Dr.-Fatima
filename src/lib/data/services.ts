import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Wrench,
  Activity,
  Crown,
  Gem,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "General Dentistry",
    description:
      "Comprehensive patient-centered dental care with a focus on diagnosis, prevention, and treatment.",
    icon: Stethoscope,
  },
  {
    title: "Restorative Dentistry",
    description:
      "Restoring damaged teeth while preserving function, structure, and oral health.",
    icon: Wrench,
  },
  {
    title: "Endodontics",
    description:
      "Clinical training and hands-on experience in root canal procedures and endodontic care.",
    icon: Activity,
  },
  {
    title: "Prosthodontics",
    description:
      "Clinical training in restoring oral function and aesthetics through prosthodontic treatment.",
    icon: Crown,
  },
  {
    title: "Implant Dentistry",
    description:
      "Hands-on implant training with experience in implant planning and placement under clinical supervision.",
    icon: Gem,
  },
];