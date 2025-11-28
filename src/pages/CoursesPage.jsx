import SEO from "../components/common/SEO";
import Courses from "../components/sections/Courses";

export default function CoursesPage() {
  return (
    <>
      <SEO
        title="Courses | Techtalks"
        description="Explore curated tech courses from TechTalks to boost your career."
        keywords="TechTalks courses,Tailwind CSS course,web development,frontend bootcamp,Nextjs,techtalks,learn to code,Lebanon tech community"
        category="education"
        classification="Education, Technology, Programming"
      />
      <Courses />
    </>
  );
}
