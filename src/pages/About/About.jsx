import HeroImg from "@/assets/images/myself.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
            <div className="relative space-y-4">
            <p className="text-white">
              I'm <span className="font-bold">Aqib Owais</span>, a full-stack
              developer with experience in building scalable mobile and web
              applications using Flutter and the MERN stack. I focus on crafting
              responsive, reliable, and performance-optimized solutions.
            </p>

            <p className="text-white">
              I design and build software systems with a focus on clarity,
              performance, and long-term scalability. My approach emphasizes
              clean architecture, modular design, and development practices that
              support growth, collaboration, and maintainability across teams
              and codebases.
            </p>

            <p className="text-white">
              I'm also an avid learner, actively exploring areas like AI, NLP,
              and agent-based systems, always looking for ways to bring emerging
              technologies into practical, real-world applications.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white">
                  I believe in building with purpose—using the right tools to
                  solve the right problems. My goal is to bring ideas to life
                  through clean code, thoughtful design, and a forward-thinking
                  mindset.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium text-white">
                    Aqib Owais
                  </cite>
                  <span className="text-white text-sm">
                    Full-Stack Developer | Flutter & MERN | AI Enthusiast
                  </span>
                </div>
              </blockquote>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
