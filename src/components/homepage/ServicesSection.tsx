import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaAws,
  FaTrello,
  FaGithub,
  FaDocker,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiDotnet,
  SiMicrosoftazure,
  SiCss3,
  SiFigma,
  SiSitecore,
  SiNextdotjs,
  SiVuedotjs,
} from "react-icons/si";

const ServicesSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-white shadow-xl rounded-lg p-6 flex-[1_1_400px] max-w-[400px] hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-[#6e3d06]">
          Frontend Development
        </h3>
        <p className="text-black mb-4">
          Building fast, responsive web interfaces using modern frameworks.
        </p>
        <div className="flex justify-center space-x-4 text-[#6e3d06]">
          <FaReact size={32} />
          <SiNextdotjs size={32} />
          <SiVuedotjs size={32} />
          <FaAngular size={32} />
          <SiJavascript size={32} />
          <SiTypescript size={32} />
          <SiCss3 size={32} />
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg p-6 flex-[1_1_400px] max-w-[400px] hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          {" "}
          Backend Development
        </h3>
        <p className="text-black mb-4">
          Scalable, secure backend systems to power your applications.
        </p>
        <div className="flex justify-center space-x-4 text-gray-900">
          <FaNodeJs size={32} />
          <SiDotnet size={32} />
          <SiMicrosoftazure size={32} />
          <FaAws size={32} />
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg p-6 flex-[1_1_400px] max-w-[400px] hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-[#5a2c2c]">
          Mobile Development
        </h3>
        <p className="text-black mb-4">
          Cross-platform mobile apps for iOS and Android.
        </p>
        <div className="flex justify-center space-x-4 text-[#5a2c2c]">
          <SiFlutter size={32} />
          <FaReact size={32} />
          <SiJavascript size={32} />
          <SiTypescript size={32} />
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg p-6 flex-[1_1_400px] max-w-[400px] hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-[#006d77]">
          Consulting
        </h3>
        <p className="text-black mb-4">
          Guiding you through UX, product strategy, and development.
        </p>
        <div className="flex justify-center space-x-4 text-[#006d77]">
          <SiFigma size={32} />
          <FaTrello size={32} />
          <FaLightbulb size={32} />
          <SiSitecore size={32} />
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg p-6 flex-[1_1_400px] max-w-[400px] hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-[#1b4d3e]">
          Deployment & Monitoring
        </h3>
        <p className="text-black mb-4">
          Seamless deployment, continuous improvement, and monitoring.
        </p>
        <div className="flex justify-center space-x-4 text-[#1b4d3e]">
          <FaGithub size={32} />
          <SiMicrosoftazure size={32} />
          <FaAws size={32} />
          <FaDocker size={32} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
