export const profile = {
  name: "Huong Giang",
  nickname: "Lity",
  role: "English Teacher · Interpreter",
  location: "Dinh Cong, Hanoi, Vietnam",
  phoneDisplay: "+84 356 173 056",
  phoneHref: "tel:+84356173056",
  whatsappHref: "https://wa.me/84356173056",
  email: "vulanh621@gmail.com",
  emailHref: "mailto:vulanh621@gmail.com",
};

export const summaryShort =
  "I teach English to children aged 3–15 and interpret for diplomatic delegations — including events attended by the President and Prime Minister of Timor-Leste.";

export const summaryLong =
  "English teacher and consecutive interpreter based in Hanoi, Vietnam. Three years in the classroom recognized with a Teacher of the Year award, and interpretation work for diplomatic engagements, international conferences, and government delegations. Open to ESL teaching roles, interpretation assignments, and executive assistant positions in international organizations.";

export const stats = [
  { value: "3+", label: "years in the classroom" },
  { value: "3–15", label: "ages of my students" },
  { value: "8–15", label: "students per class" },
  { value: "2026", label: "Teacher of the Year" },
];

export type Achievement = {
  year: string;
  title: string;
  detail: string;
  accent: "lacquer" | "jade";
};

export const achievements: Achievement[] = [
  {
    year: "2026",
    title: "Teacher of the Year Award",
    detail:
      "Recognized for excellence in English instruction and student outcomes.",
    accent: "lacquer",
  },
  {
    year: "2025",
    title: "Outstanding Youth Representative",
    detail:
      "Received by the Prime Minister of Timor-Leste for contributions to Vietnam–Timor-Leste youth and cultural exchange.",
    accent: "jade",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  place: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "English Teacher",
    org: "Private language classes",
    period: "Jan 2023 — Present",
    place: "Hanoi, Vietnam",
    points: [
      "Plan and deliver engaging English lessons for classes of 8–15 students aged 3–15, adapting strategies to different ages, learning needs, and proficiency levels.",
      "Diagnose pronunciation, grammar, and speaking difficulties through targeted feedback and individualized learning support.",
      "Monitor learner progress and adjust instruction to strengthen accuracy, fluency, and confidence in communication.",
    ],
  },
  {
    role: "Freelance Interpreter",
    org: "English ↔ Vietnamese, consecutive",
    period: "Jan 2026 — Present",
    place: "Hanoi, Vietnam",
    points: [
      "Interpreted at the Timor-Leste National Day diplomatic celebration (20 May) and provided interpretation support at the Future of Asia Conference (8 May).",
      "Support annual diplomatic engagements involving the President and Prime Minister of Timor-Leste — topics include bilateral relations, trade, and diplomatic protocol.",
      "Work confidently with government delegations and international audiences in high-protocol settings.",
    ],
  },
];

export const languages = [
  {
    name: "English",
    level: "B2 (CEFR) · IELTS 6.5 equivalent",
    width: 80,
  },
  { name: "Vietnamese", level: "Native", width: 100 },
];

export const skillTags = [
  "Consecutive interpretation",
  "Lesson planning",
  "Young learners",
  "Classroom management",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
];

export const education = {
  degree: "Bachelor of Languages",
  school: "Thai Nguyen University",
  period: "2021 — 2025",
  place: "Thai Nguyen, Vietnam",
};

export const marqueeItems = [
  "Interpretation",
  "Education",
  "Diplomacy",
  "Young Learners",
  "Hanoi, Vietnam",
];
