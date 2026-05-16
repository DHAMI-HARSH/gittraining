import type { Page } from '../App';

interface MobileNavProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function MobileNav({ currentPage, setCurrentPage }: MobileNavProps) {
  const getItemClass = (page: Page) => {
    const baseClass = "flex flex-col items-center justify-center p-2 transition-colors cursor-pointer";
    if (currentPage === page) {
      return `${baseClass} bg-primary text-on-primary rounded-none skew-x-6 p-3 animate-pulse`;
    }
    return `${baseClass} text-on-surface-variant hover:bg-surface-container-high`;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe bg-surface border-t-2 border-primary h-20 z-50">
      <div className={getItemClass('hero')} onClick={() => setCurrentPage('hero')}>
        <span className="material-symbols-outlined" style={currentPage === 'hero' ? { fontVariationSettings: '"FILL" 1' } : {}}>home</span>
        <span className="font-label-sm text-[10px] uppercase">Home</span>
      </div>
      <div className={getItemClass('works')} onClick={() => setCurrentPage('works')}>
        <span className="material-symbols-outlined" style={currentPage === 'works' ? { fontVariationSettings: '"FILL" 1' } : {}}>grid_view</span>
        <span className="font-label-sm text-[10px] uppercase">Works</span>
      </div>
      <div className={getItemClass('about')} onClick={() => setCurrentPage('about')}>
        <span className="material-symbols-outlined" style={currentPage === 'about' ? { fontVariationSettings: '"FILL" 1' } : {}}>person</span>
        <span className="font-label-sm text-[10px] uppercase">About</span>
      </div>
      <div className={getItemClass('contact')} onClick={() => setCurrentPage('contact')}>
        <span className="material-symbols-outlined" style={currentPage === 'contact' ? { fontVariationSettings: '"FILL" 1' } : {}}>send</span>
        <span className="font-label-sm text-[10px] uppercase">Contact</span>
      </div>
    </nav>
  );
}
