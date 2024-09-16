import LandingSection from "@/components/homepage/LandingSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import AboutSection from "@/components/homepage/AboutSection";
import CTASection from "@/components/homepage/CTASection";

const HomePage = () => {
  return (
    <div>
      <LandingSection />
      <ServicesSection />
      <div className="min-h-screen bg-gray-100">
        <AboutSection />
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
