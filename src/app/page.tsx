import LandingSection from "@/components/homepage/LandingSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import AboutSection from "@/components/homepage/AboutSection";
import CTASection from "@/components/homepage/CTASection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";

const HomePage = () => {
  return (
    <div>
      <LandingSection />
      <ServicesSection />
      <div className="min-h-screen bg-gray-100">
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
