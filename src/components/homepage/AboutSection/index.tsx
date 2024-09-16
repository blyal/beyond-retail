import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-16 bg-gray-100 flex flex-col justify-center px-4 md:px-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center">
        {/* Photo on the Left */}
        <div className="md:w-2/5 flex justify-center mb-8 md:mb-0 md:mr-12">
          <Image
            src="/mw-filter.jpg"
            alt="Alex Blyth profile picture"
            width={600}
            height={600}
            className="rounded-full object-cover"
          />
        </div>

        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Alex Blyth</h1>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I’m Alex Blyth, a software engineer and consultant specializing in
            frontend, backend, and mobile development. With years of experience,
            I help businesses develop the applications they need to achieve
            their goals, whether it’s digitizing operations or building a
            website. My focus is on delivering practical, results-driven
            solutions that make your vision a reality, from ideation to
            deployment.
          </p>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Why Work with Me
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            I prioritize quality, reliability, and clear communication. Trust is
            essential in any consultant-client relationship, and I ensure every
            project is completed on time, within budget, and with meticulous
            attention to detail. Across various industries, my mission has been
            to consistently deliver successful results while earning client
            satisfaction. That’s what I bring to your project.
          </p>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Global Consulting Experience
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            I’ve worked with companies across multiple regions, ensuring
            seamless collaboration and delivering top-notch results. My
            flexible, remote setup allows me to adapt to your needs, no matter
            where you’re located.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all"
        >
          Discuss Your Project with Alex
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
