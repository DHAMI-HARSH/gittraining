import { PageHeader } from '../components/PageHeader';
import { UniverseSkills } from '../components/UniverseSkills';
import { UniverseExperience } from '../components/UniverseExperience';
import { FeaturedQuote } from '../components/FeaturedQuote';

export function AboutPage() {
  return (
    <>
      <PageHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-panel-gap items-start mt-8">
        <UniverseSkills />
        <UniverseExperience />
      </div>
      <FeaturedQuote />
    </>
  );
}
