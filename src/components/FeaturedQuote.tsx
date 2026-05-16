export function FeaturedQuote() {
  return (
    <div className="mt-24 flex justify-center">
      <div className="relative bg-tertiary text-on-tertiary p-8 max-w-2xl border-4 border-black narration-box group hover:scale-105 transition-transform duration-300">
        <div className="absolute -bottom-10 right-10 w-0 h-0 border-l-[30px] border-l-transparent border-t-[40px] border-t-black border-r-[10px] border-r-transparent"></div>
        <div className="absolute -bottom-6 right-12 w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-tertiary border-r-[5px] border-r-transparent z-10"></div>
        <span className="material-symbols-outlined absolute -top-6 -left-6 bg-primary text-on-primary p-3 border-2 border-black rotate-[-15deg] text-3xl">format_quote</span>
        <p className="font-headline-md text-3xl italic text-center uppercase leading-tight">
          "With great design comes great responsibility to break the user's perception of reality."
        </p>
        <div className="mt-4 text-right font-label-sm text-on-tertiary-fixed-variant">— EARTH-616 DESIGNER</div>
      </div>
    </div>
  );
}
