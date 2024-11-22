import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Features from '../components/home/Features';
import Services from '../components/home/Services';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyChooseUs />
      <Features />
      <Services />
    </div>
  );
};

export default Home;