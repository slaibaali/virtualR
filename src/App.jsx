// import '../src/style/Responsive.css';
// import './App.css';
// import FeatureSection from './components/FeatureSection';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import WorkFlow from './components/WorkFlow';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl  pt-20 px-6 mx-auto">
        <HeroSection />
        <FeatureSection />
        <WorkFlow/>
        <PricingSection/>
        <Testimonials/>
        <Footer/>
      </div>
      
    </>
  );
};

export default App;
