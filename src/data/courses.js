import { normalizeAssets } from "../utils/utils.js";

const courseImages = import.meta.glob("../assets/courses/*.webp", {
  eager: true,
  import: "default",
});
export const normalizedImages = normalizeAssets(courseImages);

export const courses = [
  {
    id: 1,
    title: "Master Tailwind CSS",
    description:
      "Master responsive design, utility-first workflows, and custom components with the latest version of Tailwind CSS.",
    image: normalizedImages["tailwindCSS_course"],
    duration: "1h",
    rating: 4.9,
    students: 40,
    level: "Intermediate",
  },
  {
    id: 2,
    title: "Master Next.js 16",
    description:
      "Build powerful, modern web applications with Next.js. Learn server-side rendering, API routes, and deployment strategies.",
    image: normalizedImages["NEXTjs_course"],
    duration: "Coming Soon",
    rating: null,
    students: 0,
    level: "Beginner",
  },
];
