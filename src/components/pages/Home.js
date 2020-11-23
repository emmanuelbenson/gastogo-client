import HeroSection from "../HeroSection";
import Features from "../Features";
import HeroSeparator from "../HeroSeparator";
import Footer from "../Footer";
import FooterBar from "../FooterBar";
import CallToAction from "../CallToAction";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroSeparator />
      <Features />
      <CallToAction />
      <FooterBar />
      <Footer />
    </>
  );
};

export default Home;
