import { ReactNode } from "react";
import AOSPicture from "./AOSPicture";
import CTAButton from "@/components/buttons/CTAButton";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-10 pt-8 bg-gradient-to-b from-sky-700 to-sky-950 flex flex-col justify-center px-4 md:px-0"
    >
      <div className="mx-auto text-center mb-12">
        <h1
          // className="text-5xl bg-clip-text text-transparent mb-8"
          className="text-5xl bg-clip-text text-sky-100 mb-1 leading-tight"
          style={{
            // backgroundImage: "linear-gradient(90deg,#ffffff,#fef3c7)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Alex Blyth
        </h1>
        {/* <hr /> */}
        <h2 className="uppercase tracking-extra-widest font-light">
          Beyond Development
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center">
        {/* Photo on the Left */}
        <AOSPicture />

        <div className="md:w-3/5 text-center md:text-left">
          <AboutBlock title="About Me" largeTitle>
            I’m Alex Blyth, a software engineer and consultant specializing in
            frontend, backend, and mobile development. I help businesses build
            the solutions they need to achieve their goals—whether it’s
            digitizing operations or building a website. My focus is on
            delivering practical, results-driven solutions that make your vision
            a reality, from ideation to deployment.
          </AboutBlock>
          <AboutBlock title="Why Work with Me">
            I prioritize quality, reliability, and clear communication. Trust is
            essential in any consultant-client relationship, and I ensure every
            project is completed on time, within budget, and with meticulous
            attention to detail. Across various industries, my mission has been
            to consistently deliver successful results while earning client
            satisfaction. That’s what I bring to your project.
          </AboutBlock>
          <AboutBlock title="Global Consulting Experience">
            I’ve worked with companies across multiple regions, always adapting
            to ensure seamless collaboration and delivering top-notch results.
            My flexible, remote setup allows me to adapt to your needs, no
            matter where you’re located.
          </AboutBlock>
        </div>
      </div>
      <div className="mt-8 text-center">
        <CTAButton className="bg-cyan-600 text-white hover:bg-cyan-700">
          Discuss Your Project with Alex
        </CTAButton>
      </div>
    </section>
  );
};

const AboutBlock = ({
  title,
  largeTitle,
  children,
}: {
  title: string;
  largeTitle?: boolean;
  children: ReactNode;
}) => {
  return (
    <>
      {largeTitle ? (
        <h2
          className="text-3xl font-semibold text-gray-100 mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          <span className="px-2 bg-cyan-600">{title}</span>
        </h2>
      ) : (
        <h3
          className="text-2xl font-semibold text-gray-100 mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          <span className="px-2 bg-cyan-600">{title}</span>
        </h3>
      )}
      <p className="text-lg text-gray-50 mb-8">{children}</p>
    </>
  );
};

export default AboutSection;
