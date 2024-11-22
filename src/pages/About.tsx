import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';

const About = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
    </div>
  );
};

export default About;