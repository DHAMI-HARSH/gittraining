import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const getLinkClass = (page: Page) => {
    const baseClass = "transition-all font-label-sm text-label-sm hover:-skew-x-6 hover:scale-110 cursor-pointer uppercase";
    if (currentPage === page) {
      return `${baseClass} text-tertiary font-bold border-b-2 border-tertiary`;
    }
    return `${baseClass} text-on-surface hover:text-primary`;
  };

  return (
    <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 border-b-2 border-primary bg-surface/90 backdrop-blur-sm shadow-[4px_4px_0px_0px_#ff00ff] fixed top-0 z-50">
      <div 
        className="font-display-xl text-headline-md text-primary italic -skew-x-12 drop-shadow-[2px_2px_0px_#00fbfb] cursor-pointer"
        onClick={() => setCurrentPage('hero')}
      >
        SPIDER-VERSE
      </div>
      <div className="hidden md:flex gap-8">
        <a className={getLinkClass('hero')} onClick={(e) => { e.preventDefault(); setCurrentPage('hero'); }}>HERO</a>
        <a className={getLinkClass('works')} onClick={(e) => { e.preventDefault(); setCurrentPage('works'); }}>WORKS</a>
        <a className={getLinkClass('about')} onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>ABOUT</a>
        <a className={getLinkClass('contact')} onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>CONTACT</a>
      </div>
      <button className="material-symbols-outlined text-primary hover:scale-110 transition-transform">menu</button>
    </nav>
  );
}
