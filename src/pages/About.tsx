import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import LeadershipTeam from '../components/about/LeadershipTeam';

const About = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
      <LeadershipTeam />
    </div>
  );
};

export default About;