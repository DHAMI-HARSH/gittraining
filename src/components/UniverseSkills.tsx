export function UniverseSkills() {
  return (
    <section className="space-y-12">
      <div className="bg-surface-container border-2 border-primary p-gutter relative overflow-hidden rotate-[1.2deg] shadow-[8px_8px_0px_0px_rgba(255,0,255,0.2)]">
        <div className="halftone-overlay absolute inset-0 pointer-events-none opacity-10"></div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-primary flex items-center justify-center -rotate-6 border-2 border-black">
            <span className="material-symbols-outlined text-on-primary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-secondary-container skew-x-[-10deg]">ONW TO BE SDE</h2>
        </div>
        <div className="space-y-6">
          <div className="group">
            <div className="flex justify-between items-end mb-2">
              <span className="font-label-sm text-label-sm text-primary uppercase">JS, PYTHON</span>
              <span className="font-label-sm text-label-sm text-secondary">95%</span>
            </div>
            <div className="h-4 bg-surface-container-highest border-2 border-on-surface-variant relative">
              <div className="h-full bg-primary-container w-[95%] relative">
                <div className="absolute inset-0 halftone-overlay opacity-30"></div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex justify-between items-end mb-2">
              <span className="font-label-sm text-label-sm text-secondary">REACT, POSTGRESQL (LEARNING)</span>
            </div>
            <div className="h-4 bg-surface-container-highest border-2 border-on-surface-variant relative">
              <div className="h-full bg-secondary-container w-[88%] relative">
                <div className="absolute inset-0 halftone-overlay opacity-30"></div>
              </div>
            </div>
          </div>
          <div className="comic-panel h-64 mt-8 border-primary rotate-[-0.5deg]">
            <img 
              className="w-full h-full object-cover grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-500" 
              alt="A futuristic high-tech computer terminal" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_0JSysict98HFc8N0gbOanJzRnPF4pUtVGPuhMeq2sY9jWBQGE14FDoOgTgrB-n71_3a6HA6FMaoi6_zDy1Q9pDhJtYRHTRxGtpGZhOZTK5M2PaH-Usbm32s2G6feTAYTjbQmatpb2f_IHLoWhTKBXYMzcjnLvQVlwUibfVDM2NVyxIkK4MnZyiyJWg6Eqxc1gG_3kXfKO5SVHelwYP8X1He2GnWNBHMAnLtOf__X558JkERhZqUZ3QtoQFqjEM2rMDpuUFCc0HP" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
