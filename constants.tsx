
import { 
  Cpu, Zap, Truck, Settings, ShieldCheck, Globe, 
  Lightbulb, Activity, Layers, Rocket, Factory
} from 'lucide-react';
import { Service, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: { ar: "التصنيع الذكي 4.0", en: "Smart Manufacturing 4.0" },
    description: { ar: "حلول مؤتمتة بالكامل تستخدم الذكاء الاصطناعي لرفع كفاءة الإنتاج.", en: "Fully automated solutions leveraging AI to maximize production throughput." },
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: { ar: "أنظمة الطاقة المتكاملة", en: "Integrated Power Systems" },
    description: { ar: "توفير حلول طاقة مستدامة للمنشآت الصناعية الضخمة.", en: "Sustainable power grid solutions for heavy industrial complexes." },
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: { ar: "الخدمات اللوجستية الذكية", en: "Intelligent Logistics" },
    description: { ar: "إدارة سلاسل الإمداد العالمية باستخدام تقنيات التتبع اللحظي.", en: "Global supply chain management with real-time tracking technologies." },
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: { ar: "الهندسة الدقيقة", en: "Precision Engineering" },
    description: { ar: "تصميم المكونات الصناعية المعقدة بأعلى معايير الدقة.", en: "Engineering complex components with micron-level precision standards." },
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200"
  }
];

export const VALUES = [
  {
    title: { ar: "النزاهة والشفافية", en: "Absolute Integrity" },
    icon: ShieldCheck,
    desc: { ar: "نلتزم بأعلى المعايير الأخلاقية في كل مشروع نقوم به.", en: "Commitment to the highest ethical standards in every endeavor." }
  },
  {
    title: { ar: "الابتكار المستمر", en: "Continuous Innovation" },
    icon: Lightbulb,
    desc: { ar: "دفع حدود الممكن في التكنولوجيا الصناعية.", en: "Pushing the boundaries of industrial technology daily." }
  },
  {
    title: { ar: "التأثير العالمي", en: "Global Impact" },
    icon: Globe,
    desc: { ar: "نصنع حلولاً تخدم البشرية وتدعم التطور المستدام.", en: "Creating solutions that serve humanity and sustainable growth." }
  }
];

export const PROJECTS = [
  { 
    title: { ar: "مجمع الطاقة النظيفة", en: "Clean Energy Complex" }, 
    category: "Energy", 
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: { ar: "المنشأة المؤتمتة بالكامل", en: "Fully Automated Facility" }, 
    category: "Industry 4.0", 
    img: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: { ar: "مركز الخدمات اللوجستية", en: "Logistics Mega Hub" }, 
    category: "Logistics", 
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800" 
  }
];

export const STATS: Stat[] = [
  { label: { ar: "أصول بالمليارات", en: "Billion Assets" }, value: "15", suffix: "B+" },
  { label: { ar: "منشأة نشطة", en: "Active Facilities" }, value: "62", suffix: "" },
  { label: { ar: "خبير عالمي", en: "Global Experts" }, value: "2400", suffix: "+" },
  { label: { ar: "براءة اختراع", en: "Patents Registered" }, value: "920", suffix: "+" }
];

// Added HISTORY constant to resolve import error in components/History.tsx
export const HISTORY = [
  {
    year: "1988",
    event: { ar: "تأسيس فوزي للصناعات المتكاملة ككيان هندسي متخصص.", en: "Foundation of Fawzy Integrated Industries as a specialized engineering entity." }
  },
  {
    year: "2002",
    event: { ar: "التوسع في الأسواق الإقليمية وافتتاح مراكز تصنيع متقدمة.", en: "Expansion into regional markets and opening of advanced manufacturing centers." }
  },
  {
    year: "2015",
    event: { ar: "بدء التحول الرقمي الشامل وتبني تقنيات الصناعة 4.0.", en: "Initiating comprehensive digital transformation and adopting Industry 4.0 technologies." }
  },
  {
    year: "2024",
    event: { ar: "الريادة العالمية في تقديم حلول الطاقة المتكاملة والمستدامة.", en: "Global leadership in providing integrated and sustainable energy solutions." }
  }
];
