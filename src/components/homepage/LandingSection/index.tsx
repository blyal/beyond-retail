import CTAButton from "@/components/buttons/CTAButton";

const LandingSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-[#00070D] to-[#00111A] text-white flex flex-col justify-center items-center px-4"
    >
      <div className="text-center mt-32 fade-in">
        <h1 className="text-5xl font-bold mb-20">
          Custom software solutions to meet your unique needs.
        </h1>
        <p className="text-xl mb-20">
          Exceptional quality, delivered on time and on budget. The way it
          should be.
        </p>
        <CTAButton className="bg-white text-blue-600 hover:bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] hover:text-black mb-8">
          Take Your Project Beyond
        </CTAButton>
      </div>
    </section>
  );
};

export default LandingSection;
