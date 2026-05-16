import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';

// Pages
import { HeroPage } from './pages/HeroPage';
import { WorksPage } from './pages/WorksPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export type Page = 'hero' | 'works' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('hero');

  const renderPage = () => {
    switch (currentPage) {
      case 'hero':
        return <HeroPage />;
      case 'works':
        return <WorksPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HeroPage />;
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen spider-sense-bg selection:bg-primary-container selection:text-on-primary-container">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto min-h-[80vh]">
        {renderPage()}
      </main>
      <Footer />
      <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
