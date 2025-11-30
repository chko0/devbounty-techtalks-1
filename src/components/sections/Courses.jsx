import { useMemo, useState } from "react";
import SelectField from "../common/SelectField";
import Button from "../common/Button";
import GradientText from "../common/GradientText";
import SearchInput from "../common/SearchInput";
import { BookOpen, SlidersHorizontal } from "lucide-react";
import { courses } from "../../data/courses";
import CourseItem from "../course/CourseItem";
import NoCoursesFound from "../course/NoCoursesFound";
import FadeUp from "../common/FadeUp";
import SectionSubtitle from "../common/SectionSubtitle";
import SectionTitle from "../common/SectionTitle";

export default function Courses() {
  const [showFilters, setShowFilters] = useState(false);
  const [level, setLevel] = useState("all");
  const [language, setLanguage] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");

  // Determine if any filters are active
  const isFiltering = useMemo(() => {
    return (
      level !== "all" ||
      language !== "all" ||
      sortBy !== "newest" ||
      search !== ""
    );
  }, [level, language, sortBy, search]);

  function clearFilters() {
    setLevel("all");
    setLanguage("all");
    setSortBy("newest");
    setSearch("");
    setShowFilters(false);
  }

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        const matchesLevel = level === "all" || course.level === level;
        const matchesLanguage =
          language === "all" || course.language === language;
        const matchesSearch =
          search === "" ||
          course.title.toLowerCase().includes(search.toLowerCase());
        return matchesLevel && matchesLanguage && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return b.id - a.id; // assuming higher ID = newer
          case "rated":
            return b.rating - a.rating;
          case "popular":
            return b.students - a.students;
          case "shortest":
            return a.durationMinutes - b.durationMinutes;
          default:
            return 0;
        }
      });
  }, [level, language, sortBy, search]);

  return (
    <section className="px-6 py-16">
      <div className="group mx-auto max-w-4xl text-center mb-12">
        <SectionTitle
          icon={BookOpen}
          className="text-3xl sm:text-4xl lg:text-5xl"
          iconClassName="text-cyan-400 w-8 h-8 mr-3"
        >
          All TechTalks <GradientText>Courses</GradientText>
        </SectionTitle>

        <SectionSubtitle className="mt-4">
          Curated courses for developers and tech enthusiasts, learn at your
          pace.
        </SectionSubtitle>
      </div>

      <SearchInput
        placeholder="Search courses, instructors, or topics..."
        value={search}
        onChange={setSearch}
        className="max-w-xl mx-auto mb-6"
      />

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-3 sm:gap-0">
          <div className="flex items-center gap-3">
            <Button
              icon={SlidersHorizontal}
              className="text-gray-300 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-gray-600 hover:text-white hover:bg-gray-800/50 transition-all duration-200 font-normal"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
              {isFiltering && (
                <div className="bg-cyan-400 w-1.5 h-1.5 rounded-full ml-2" />
              )}
            </Button>
            {isFiltering && (
              <Button className="text-cyan-400" onClick={clearFilters}>
                Clear All
              </Button>
            )}
          </div>
          <div className="text-cyan-400 font-semibold">
            {filteredCourses.length} course{filteredCourses.length !== 1 && "s"}{" "}
            found
          </div>
        </div>

        {/* Filters */}
        <div
          className={`overflow-hidden transition-all duration-300 group
            ${
              showFilters
                ? "opacity-100 scale-100 max-h-[800px] p-6"
                : "opacity-0 scale-95 max-h-0 p-0"
            }
            bg-gray-900/30 border border-gray-700/50 rounded-xl`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SelectField
              label="Level"
              value={level}
              onChange={setLevel}
              options={[
                { value: "all", label: "All Levels" },
                { value: "Intermediate", label: "Intermediate" },
                { value: "Beginner", label: "Beginner" },
              ]}
            />
            <SelectField
              label="Language"
              value={language}
              onChange={setLanguage}
              options={[{ value: "all", label: "All Languages" }]}
            />
            <SelectField
              label="Sort By"
              value={sortBy}
              onChange={setSortBy}
              options={[
                { value: "newest", label: "Newest First" },
                { value: "rated", label: "Highest Rated" },
                { value: "popular", label: "Most Popular" },
                { value: "shortest", label: "Shortest First" },
              ]}
            />
            <div className="flex items-end">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="flex flex-items justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg w-full p-3"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <FadeUp key={course.id} delay={(index + 1) * 0.2}>
              <CourseItem course={course} />
            </FadeUp>
          ))}
        </div>
      ) : (
        <NoCoursesFound callback={clearFilters} />
      )}
    </section>
  );
}
