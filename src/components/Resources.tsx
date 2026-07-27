import { Download, FileText } from "lucide-react";

const resources = [
  {
    title: "50 Everyday German Sentences",
    description:
      "Common phrases and greetings to help you start speaking confidently from day one.",
    file: "/resources/Kee_German_Academy_50_Everyday_German_Sentences.pdf",
  },
  {
    title: "100 Essential A1 Vocabulary Words",
    description:
      "The core beginner vocabulary every A1 learner should know — family, numbers, daily life, and more.",
    file: "/resources/Kee_German_Academy_100_Essential_A1_Vocabulary.pdf",
  },
  {
    title: "German Alphabet & Pronunciation Guide",
    description:
      "Learn the German alphabet with pronunciation tips, including Ä, Ö, Ü, and ß.",
    file: "/resources/Kee_German_Academy_German_Alphabet_Guide.pdf",
  },
];

const Resources = () => {
  return (
    <section
      id="resources"
      className="relative bg-black py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center mb-14">
        <p className="uppercase tracking-[0.2em] text-xs text-yellow-500 mb-4">
          Free Resources
        </p>
       <h2 className="text-4xl md:text-5xl font-serif mb-4">
  <span className="text-white">Start </span>
  <span className="text-yellow-500">Learning German</span>
  <span className="text-white"> Today</span>
</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Download these free guides, no strings attached, and get a head
          start before your first class.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div
            key={resource.file}
            className="group flex flex-col justify-between bg-neutral-950 border border-yellow-600/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-colors duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-yellow-600/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">
                {resource.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                {resource.description}
              </p>
            </div>

            
            <a  href={resource.file}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 text-black font-semibold py-3 px-6 hover:bg-yellow-400 transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;