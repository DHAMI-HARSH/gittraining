export function Footer() {
  return (
    <footer className="w-full py-gutter border-t-4 border-double border-on-surface-variant bg-surface-container-lowest flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-4">
      <div className="font-headline-md text-headline-md text-tertiary italic">SPIDER-VERSE</div>
      <div className="font-label-sm text-label-sm text-secondary-fixed text-center md:text-left">© 2024 MULTIVERSE INK // CREATED BY DESIGN-OP</div>
      <div className="flex gap-6">
        <a className="text-on-surface-variant hover:text-secondary hover:italic transition-all font-label-sm text-label-sm" href="#">THREADS</a>
        <a className="text-on-surface-variant hover:text-secondary hover:italic transition-all font-label-sm text-label-sm" href="#">NEXUS</a>
        <a className="text-on-surface-variant hover:text-secondary hover:italic transition-all font-label-sm text-label-sm" href="#">SIGNAL</a>
      </div>
    </footer>
  );
}
