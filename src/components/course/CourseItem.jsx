import Badge from "../common/Badge";
import IconText from "../common/IconText";
import Button from "../common/Button";

import { Clock, Users, Star, Play } from "lucide-react";

export default function CourseItem({ course }) {
  return (
    <div
      className="course-card group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 
        transition-all duration-300 cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={"src/assets/courses/" + course.image}
          alt={course.title}
          className="w-full sm:h-64 object-cover"
          loading="lazy"
        />

        {/* DIFFICULTY BADGE */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1">
            {course.level}
          </Badge>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-6">
        {/* TITLE */}
        <h3 className=" text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {course.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
          {course.description}
        </p>

        {/* INFO ROW */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
          <IconText icon={Clock} gap="1">
            {course.duration}
          </IconText>
          <IconText icon={Users} gap="1">
            {course.students}
            {course.students ? "+" : ""}
          </IconText>
          <IconText
            icon={course.rating ? Star : null}
            gap="1"
            iconClassName="text-yellow-400"
          >
            {course.rating}
          </IconText>
        </div>

        {/* BUTTON */}
        <Button
          to={`/courses/${course.id}`}
          trailingIcon={true}
          icon={Play}
          className="flex items-center justify-center w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-3 px-4 rounded-lg font-medium
             transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
