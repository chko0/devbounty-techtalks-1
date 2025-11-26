import { Code, Play } from "lucide-react";
import FadeUp from "../common/FadeUp";

export default function HeroCodeBlock() {
  return (
    <>
      <FadeUp
        delay={1.0}
        x={25}
        y={0}
        motionProps={{
          initial: { rotateX: 5, rotateY: -15, perspective: 1200 },
          whileInView: { rotateX: 5, rotateY: -15, perspective: 1200 },
        }}
        className="relative transform"
      >
        <div
          className="relative transform"
          // style={{
          //   transform: "perspective(1200px) rotateX(5deg) rotateY(-15deg)",
          // }}
          // initial={{
          //   perspective: "1200px",
          //   rotateX: "5deg",
          //   rotateY: "-15deg",
          // }}
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-md p-5 mb-4 border border-gray-700">
            <div className="bg-black rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-red-400 rounded-full w-3 h-3" />
                <div className="bg-yellow-400 rounded-full w-3 h-3" />
                <div className="bg-green-400 rounded-full w-3 h-3" />
              </div>
              <div className="space-y-1 text-sm">
                <div className="mb-2">
                  <span className="text-purple-400">function</span>
                  <span className="text-cyan-400">{` learnProgramming`}</span>
                  {` ( ) {`}
                </div>
                <div>
                  <span className="text-gray-400 ml-4">const</span>
                  <span className="text-cyan-400"> skills </span>
                  {" = "}
                  <span className="text-green-400">
                    {"['React', 'Node.js', 'Python']"}
                  </span>
                </div>
                <div>
                  <span className="text-purple-400 ml-4">return</span>
                  <span className="text-cyan-400"> buildYourFuture </span>
                  {" (skills)"}
                </div>
                <div>{`}`}</div>
              </div>
            </div>

            {/* Course #1 */}
            <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 w-8 h-8" />
                <div>
                  <div className="text-sm font-medium text-white">
                    React Fundamentals
                  </div>
                  <div className="text-xs text-gray-400">85% Complete</div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-full w-12 h-2">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full w-10 h-2"></div>
              </div>
            </div>

            {/* Course #2 */}
            <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gradient-to-l from-purple-400 to-blue-400 w-8 h-8" />
                <div>
                  <div className="text-sm font-medium text-white">
                    Master Node.js
                  </div>
                  <div className="text-xs text-gray-400">Next Course</div>
                </div>
              </div>
              <div className="text-cyan-500 text-sm">Start</div>
            </div>
          </div>

          {/* Button #1 */}
          <div className="absolute flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce -top-6 -right-6">
            <Code width="20" height="20" />
          </div>

          {/* Button #2 */}
          <div className="absolute flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse -bottom-6 -left-6">
            <Play width="20" height="20" />
          </div>
        </div>
      </FadeUp>
    </>
  );
}

{
  /* 
  ==OLD AND BAD==
    Tried a bunch of angles until this felt like the right depth/tilt.
    Leaving the previous version here in case I want to switch back.
    
    style={{
      perspective: "900px",
      transform: "rotateX(4deg) rotateY(-12deg)",
      transformStyle: "preserve-3d",
    }}
  */
}
