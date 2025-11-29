import { normalizeAssets } from "../utils/utils.js";

const teamImages = import.meta.glob("../assets/team/*.webp", {
  eager: true,
  import: "default",
});
export const normalizedImages = normalizeAssets(teamImages);

export const team = [
  {
    image: normalizedImages["khaled_frayji"],
    name: "Khaled Frayji",
    role: "Founder & CEO",
    link: "https://www.linkedin.com/in/khaledfrayji",
  },
  {
    image: normalizedImages["mustafa_elmheimid"],
    name: "Mustafa Elmheimid",
    role: "Co-Founder",
    link: "https://www.linkedin.com/in/mustafa-almheimid",
  },
  {
    image: normalizedImages["kinda_halaby"],
    name: "Kinda Halaby",
    role: "Graphic Designer",
    link: "https://www.linkedin.com/in/kinda-halaby-25751a329",
  },
  {
    image: normalizedImages["hussein_mansour"],
    name: "Hussein Mansour",
    role: "IT & System Engineer",
    link: "https://www.linkedin.com/in/hussein-mansour0",
  },
  {
    image: normalizedImages["qusai_okla"],
    name: "Qusai Okla",
    role: "Cybersecurity Specialist",
    link: "https://www.linkedin.com/in/qusai-okla-02589b263",
  },
];
