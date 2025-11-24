import Button from "../common/Button";

export default function JoinUs() {
  return (
    <section className="bg-black px-6 py-12 mx-auto">
      <div className="relative max-w-4xl mx-auto border border-purple-500/25 rounded-xl p-12 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="text-center">
          <p className="text-3xl text-white font-bold leading-relaxed mb-4">
            Want to Join Our Team?
          </p>

          <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals who want to make a
            difference in tech education.
          </p>

          <Button
            className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 text-lg hover:from-purple-600 hover:to-cyan-600 transition-all transform hover:scale-105 duration-300"
            to="mailto:techtalks.lb@gmail.com"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
