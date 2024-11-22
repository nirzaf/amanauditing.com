import LinksHero from '../components/useful-links/LinksHero';
import LinksGrid from '../components/useful-links/LinksGrid';
import LinksDisclaimer from '../components/useful-links/LinksDisclaimer';

const UsefulLinks = () => {
  return (
    <div className="bg-white">
      <LinksHero />
      <LinksGrid />
      <LinksDisclaimer />
    </div>
  );
};

export default UsefulLinks;