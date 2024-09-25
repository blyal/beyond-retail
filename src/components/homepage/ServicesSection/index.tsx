import AOSServices from "./AOSServices";
import CTAButton from "@/components/buttons/CTAButton";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="min-h-screen py-16 text-center relative px-4 md:px-0"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/laptop-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-4 drop-shadow-xl">
          Broad Expertise
        </h2>
        <p className="text-xl text-white mb-12 drop-shadow-xl">
          End-to-end development services, from ideation to deployment.
        </p>

        <AOSServices />
        <div className="mt-20">
          <CTAButton className="bg-white text-[#0d8569] hover:bg-gray-100">
            Book a Free Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
