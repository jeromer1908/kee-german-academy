const Founder = () => {
  return (
    <section
      id="founder"
      className="relative bg-black py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* subtle background glow to match hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-950" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 items-center">
        {/* Founder image placeholder */}
        <div className="flex justify-center md:justify-start">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-yellow-600/40 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <img
              src="/src/assets/founder.png"
              alt="Keerthy Ravichandran, Founder of Kee German Academy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-yellow-500 mb-4">
            Meet the Founder
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">
            Hi, I'm Keerthy
          </h2>
          <p className="italic text-yellow-500 text-lg mb-6">
            Keerthiga Ravichandran, Founder of Kee German Academy
          </p>

          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>
              As an Indian physiotherapist pursuing an international career,
              I experienced firsthand how learning German can create
              opportunities beyond studying or working abroad. I realized
              that German is not just a language for relocation — it is a
              valuable professional skill that can strengthen employability,
              open new career opportunities, and help individuals
              communicate confidently in an increasingly global world.
            </p>
            <p>
              That realization inspired me to establish Kee German Academy
              with a clear purpose: to help students and working
              professionals learn German in a practical, structured, and
              career-focused way. Our mission is to make high-quality German
              education accessible through interactive live classes,
              personalized guidance, and a supportive learning environment
              that builds real-world communication skills.
            </p>
            <p>
              At Kee German Academy, we believe learning a language is not
              just about passing an exam — it's about creating
              opportunities, building confidence, and preparing for a global
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;