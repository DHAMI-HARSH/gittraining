export function WorksPage() {
  const projects = [
    {
      id: 1,
      title: "Web Slinger API",
      description: "A high-performance REST API built with Node.js and Express, handling thousands of requests per second with negligible latency.",
      color: "border-primary",
      shadow: "shadow-[6px_6px_0px_0px_#00fbfb]"
    },
    {
      id: 2,
      title: "Multiverse Dashboard",
      description: "React-based analytics dashboard providing real-time insights across multiple dimensions of user data.",
      color: "border-tertiary",
      shadow: "shadow-[6px_6px_0px_0px_#ff00ff]"
    },
    {
      id: 3,
      title: "Venom Security Scanner",
      description: "Automated vulnerability assessment tool that aggressively hunts down security flaws in web applications.",
      color: "border-error",
      shadow: "shadow-[6px_6px_0px_0px_#ffabf3]"
    },
    {
      id: 4,
      title: "Parker's Photo Gallery",
      description: "A responsive, masonry-style image gallery with lazy loading and infinite scroll capabilities.",
      color: "border-secondary",
      shadow: "shadow-[6px_6px_0px_0px_#00fbfb]"
    }
  ];

  return (
    <div className="py-8">
      <div className="narration-box bg-primary text-on-primary inline-block px-6 py-2 mb-12 border-2 border-white">
        <h2 className="font-display-xl text-headline-sm uppercase italic">Featured Works</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className={`comic-panel bg-surface p-6 ${project.color} ${project.shadow} hover:-translate-y-2 hover:translate-x-2 transition-transform duration-300 group`}>
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-black border-2 border-white mb-6 relative overflow-hidden halftone-overlay">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display-lg text-primary/50 text-headline-lg -skew-x-12">THWIP!</span>
              </div>
            </div>
            
            <h3 className="font-display-lg text-title-lg text-on-surface uppercase mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="font-body-md text-on-surface/80 mb-6 border-l-2 border-tertiary pl-3">
              {project.description}
            </p>
            
            <button className="text-primary font-label-md uppercase tracking-wider hover:text-white flex items-center gap-2">
              Explore Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
