import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import SectionDivider from '../components/common/SectionDivider';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Services />
    </div>
  );
};

export default Home;