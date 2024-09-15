import Image from "next/image";

import ServicesSection from "@/components/homepage/ServicesSection";
// import TestimonialsSection from "@/components/homepage/TestimonialsSection";

const HomePage = () => {
  return (
    <div>
      <section className="min-h-screen bg-gradient-to-b from-[#00070D] to-[#00111A] text-white flex flex-col justify-center items-center px-4 md:px-0">
        <div className="text-center mt-32">
          <h1 className="text-5xl font-bold mb-20">
            Custom software solutions to meet your unique needs.
          </h1>
          <p className="text-xl mb-20">
            Exceptional quality, delivered on time and on budget. The way it
            should be.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] hover:text-black transition-all mb-8"
          >
            Take Your Project Beyond
          </a>
        </div>
      </section>

      <section className="min-h-screen py-16 text-center relative px-4 md:px-0">
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

          <ServicesSection />

          <div className="mt-20">
            <a
              href="/contact"
              className="bg-white text-[#0d8569] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 bg-gray-100 flex flex-col justify-center px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center">
          {/* Photo on the Left */}
          <div className="md:w-2/5 flex justify-center mb-8 md:mb-0 md:mr-12">
            <Image
              src="/mw-filter.jpg"
              alt="Alex Blyth"
              width={600}
              height={600}
              className="rounded-full object-cover"
            />
          </div>

          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Alex Blyth
            </h1>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I’m Alex Blyth, a software engineer and consultant specializing in
              frontend, backend, and mobile development. With years of
              experience, I help businesses develop the applications they need
              to achieve their goals, whether it’s digitizing operations or
              building a website. My focus is on delivering practical,
              results-driven solutions that make your vision a reality, from
              ideation to deployment.
            </p>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Why Work with Me
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              I prioritize quality, reliability, and clear communication. Trust
              is essential in any consultant-client relationship, and I ensure
              every project is completed on time, within budget, and with
              meticulous attention to detail. Across various industries, my
              mission has been to consistently deliver successful results while
              earning client satisfaction. That’s what I bring to your project.
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

      {/* Short Portfolio Section */}
      {/* <section className="min-h-screen bg-gray-100 text-center flex flex-col justify-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <PortfolioItem
            title="Project 1"
            description="A custom e-commerce platform for XYZ company."
            imageSrc="/project1.jpg"
            link="/portfolio/project1"
          />
          <PortfolioItem
            title="Project 2"
            description="API integration for seamless logistics tracking."
            imageSrc="/project2.jpg"
            link="/portfolio/project2"
          />
          <PortfolioItem
            title="Project 3"
            description="Enterprise software solution for a global client."
            imageSrc="/project3.jpg"
            link="/portfolio/project3"
          />
        </div>
      </section> */}

      {/* Testimonials Section*/}
      {/* <TestimonialsSection /> */}

      {/* CTA Section */}
      <section
        className="min-h-screen py-16 bg-center bg-cover bg-no-repeat text-center relative flex flex-col justify-between items-center px-4 md:px-0"
        style={{ backgroundImage: 'url("/beyond-mountains.png")' }}
      >
        <h3 className="text-3xl font-semibold text-white">
          Ready to take your project beyond?
        </h3>

        <div>
          <a
            href="/contact"
            className="bg-white text-black px-7 py-4 rounded-full font-semibold hover:bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] transition-all shadow-lg border border-white"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
};

// interface PortfolioItemProps {
//   title: string;
//   description: string;
//   imageSrc: string;
//   link: string;
// }

// interface TestimonialProps {
//   quote: string;
//   name: string;
//   position: string;
// }

// const PortfolioItem = ({
//   title,
//   description,
//   imageSrc,
//   link,
// }: PortfolioItemProps) => (
//   <div className="bg-white shadow-lg rounded-lg p-6">
//     <Image
//       src={imageSrc}
//       alt={title}
//       width={400}
//       height={300}
//       className="rounded"
//     />
//     <h3 className="text-xl font-semibold mt-4">{title}</h3>
//     <p className="text-gray-700 mt-2">{description}</p>
//     <a href={link} className="text-blue-600 mt-4 inline-block">
//       View Project &rarr;
//     </a>
//   </div>
// );

// const Testimonial = ({ quote, name, position }: TestimonialProps) => (
//   <div className="p-6">
//     <p className="text-lg italic mb-4">&ldquo;{quote}&rdquo;</p>
//     <h4 className="font-semibold">{name}</h4>
//     <p className="text-sm text-gray-300">{position}</p>
//   </div>
// );

export default HomePage;
