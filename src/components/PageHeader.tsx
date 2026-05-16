export function PageHeader() {
  return (
    <header className="mb-16 relative">
      <div className="inline-block bg-tertiary text-on-tertiary px-8 py-4 narration-box border-2 border-black z-10 relative">
        <h1 className="font-display-xl text-[64px] md:text-display-xl leading-none italic uppercase">ORIGIN STORY</h1>
      </div>
      <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary-container -z-10 skew-x-2 opacity-50"></div>
    </header>
  );
}
