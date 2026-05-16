export function HeroPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center relative mt-16">
      <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto comic-panel p-8 md:p-16 bg-surface/80 backdrop-blur-sm border-4 border-primary shadow-[8px_8px_0px_0px_#ff00ff]">
        <h1 className="font-display-2xl text-display-lg md:text-display-xl text-primary uppercase italic -skew-x-12 mb-6 glitch-shadow-cyan">
          INTO THE <br/> PORTFOLIO-VERSE
        </h1>
        
        <p className="font-body-lg text-body-lg md:text-title-md text-on-surface mb-8 max-w-2xl mx-auto bg-black/40 p-4 border-l-4 border-tertiary">
          I weave webs of code and craft digital experiences that stick. 
          Ready to swing into the next big adventure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          <button className="px-8 py-4 bg-primary text-on-primary font-label-lg uppercase italic font-bold -skew-x-12 hover:scale-105 hover:bg-white hover:text-black transition-all border-2 border-primary shadow-[4px_4px_0px_0px_#00fbfb]">
            <span className="inline-block skew-x-12">View My Work</span>
          </button>
          
          <button className="px-8 py-4 bg-transparent text-primary font-label-lg uppercase italic font-bold -skew-x-12 hover:scale-105 hover:bg-tertiary hover:text-black hover:border-tertiary transition-all border-2 border-primary shadow-[4px_4px_0px_0px_#ff00ff]">
            <span className="inline-block skew-x-12">Contact Me</span>
          </button>
        </div>
      </div>
      
      {/* Decorative comic elements */}
      <div className="absolute top-10 left-10 md:left-20 narration-box bg-yellow-400 text-black p-4 font-bold max-w-[200px] border-4 border-black z-20 hidden md:block">
        MEANWHILE, ON THE WORLD WIDE WEB...
      </div>
    </div>
  );
}
