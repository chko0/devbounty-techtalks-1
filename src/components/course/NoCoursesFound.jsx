import { Search } from "lucide-react";
import Button from "../common/Button";

export default function NoCoursesFound({ callback }) {
  return (
    <div className="text-center mx-auto">
      <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
        <Search />
      </div>
      <div className="font-semibold text-white text-xl mb-2">
        No courses found
      </div>
      <div className="mb-6 text-gray-400">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </div>
      <div>
        <Button
          onClick={callback}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300 px-6 py-2.5"
        >
          Show All Courses
        </Button>
      </div>
    </div>
  );
}
