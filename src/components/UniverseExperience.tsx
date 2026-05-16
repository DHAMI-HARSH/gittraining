export function UniverseExperience() {
  return (
    <section className="space-y-12 md:mt-24">
      <div className="bg-surface-container border-2 border-secondary-container p-gutter relative overflow-hidden rotate-[-1.5deg] shadow-[-8px_8px_0px_0px_rgba(0,251,251,0.2)]">
        <div className="halftone-overlay absolute inset-0 pointer-events-none opacity-10"></div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rotate-12 border-2 border-black">
            <span className="material-symbols-outlined text-on-secondary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>history</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary skew-x-[10deg]">PARALLEL: TIMELINE</h2>
        </div>
        <div className="space-y-8">
          <div className="relative pl-8 border-l-4 border-dashed border-secondary-container">
            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-background border-4 border-secondary-container rounded-full"></div>
            <div className="mb-1 text-secondary-fixed font-label-sm text-label-sm">2021 — PRESENT</div>
            <h3 className="font-headline-md text-2xl text-on-surface mb-2 italic">VIDEO EDITOR</h3>
            <p className="font-body-md text-on-surface-variant">editiing video for the clients&nbsp;</p>
          </div>
          <div className="relative pl-8 border-l-4 border-dashed border-primary">
            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-background border-4 border-primary rounded-full"></div>
            <div className="mb-1 text-primary-fixed font-label-sm text-label-sm">2018 — 2021</div>
            <h3 className="font-headline-md text-2xl text-on-surface mb-2 italic">STARK-LEVEL DEV</h3>
            <p className="font-body-md text-on-surface-variant">this one is a lie</p>
          </div>
          <div className="bg-tertiary text-on-tertiary p-4 narration-box border-2 border-black mt-8 translate-x-4">
            <p className="font-label-sm text-body-md font-bold leading-tight">
              "EVERY ANOMALY IS A LESSON. EVERY SYSTEM CRASH IS AN OPPORTUNITY TO REBUILD THE MULTIVERSE STRONGER. I'VE SEEN THE FUTURE OF UI, AND IT'S GLORIOUSLY CHAOTIC."
            </p>
          </div>
          <div className="comic-panel h-64 mt-8 border-secondary-container rotate-[0.8deg]">
            <img 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
              alt="A cinematic low-angle shot of a sprawling futuristic city at night" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2HkodCocDqvJ9_uNnkaF2k-DAcMbjYD7tm5qxgTCkAp1Stdmyv7nlPevXvRsWXOjcaVgZ0WEixCzd5HWEW_xsdwASc0Ohsx2lPU9FKwp6aKqgAsUNolxngwthFa9RCfbAbRYvazCK_uVHD49tx9J4VHyzkwA3UvTRe608NEopw2w6XoQQx0aqwyP36eAcs2JUKnsG0Atz4-uFF6_87AfMxk4cv-4T1-lvpz6mJg7i55dTrhC_iBEVZUVyC5pMHh8oqGF6hibak5_n" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
