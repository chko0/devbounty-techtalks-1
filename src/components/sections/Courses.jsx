import { useState } from "react";
import SelectField from "../common/SelectField";
import Button from "../common/Button";
import GradientText from "../common/GradientText";
import SearchInput from "../common/SearchInput";
import { SlidersHorizontal } from "lucide-react";
import { courses } from "../../data/courses";
import CourseItem from "../course/courseItem";

export default function Courses() {
  const [showFilters, setShowFilters] = useState(true);
  const [level, setLevel] = useState("all");
  const [language, setLanguage] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-6xl text-white font-bold mb-4">
          All Techtalks <GradientText>Courses</GradientText>
        </h1>
        <p className="text-2xl text-gray-300 leading-relaxed">
          Curated courses for developers and tech enthusiasts, learn at your
          pace.
        </p>
      </div>
      <SearchInput
        placeholder="Search courses, instructors, or topics..."
        value={search}
        onChange={setSearch}
        className="max-w-xl mx-auto"
      />
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <Button
          icon={SlidersHorizontal}
          className="text-gray-300 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </Button>
        <div className="text-cyan-400 font-semibold">2 courses found</div>
      </div>
      {/* Filters */}
      {showFilters && (
        <div className="bg-gray-900/30 border border-gray-900 rounded-lg p-6 mb-10">
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="flex items-end text-center">
              <Button className="flex flex-items justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg w-full p-3">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
