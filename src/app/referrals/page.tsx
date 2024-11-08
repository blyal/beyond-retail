"use client";

import { doesBrowserSupportWebP } from "@/utils";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import Modal from "../../components/modals/Modal";
import ReferralTermsAndConditions from "./ReferralTermsAndConditions";
import CTAButton from "@/components/buttons/CTAButton";

const ReferralProgram = () => {
  const [browserUsesWebP, setBrowserUsesWebP] = useState(true);
  const [isTermsAndConditionsModalOpen, toggleIsTermsAndConditionsModalOpen] =
    useState(false);

  useEffect(() => {
    doesBrowserSupportWebP().then((result) => {
      setBrowserUsesWebP(result);
    });
  }, []);

  return (
    <>
      {/* Section 1: Cover */}
      <section
        id="cover-section"
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-2"
        style={{
          backgroundImage: browserUsesWebP
            ? 'url("/tech-photo.webp")'
            : 'url("/tech-photo.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950 opacity-80 z-0"></div>
        {/* Centered h1 and p */}
        <div className="relative flex z-10 flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-6 mobilePortrait:text-3xl">
            Referral Incentive Program – Earn €450!
          </h1>
          <p className="text-xl mb-12 mobilePortrait:text-lg">
            Refer a company that needs software development or consultancy
            services and earn rewards!
          </p>
        </div>

        {/* Arrow Down Icon at 3/4 height */}
        <a
          href="#details-section"
          className="absolute z-10 bottom-[15%] cursor-pointer"
        >
          <FaArrowDown size={40} />
        </a>
      </section>

      {/* Section 2: Details */}
      <section
        id="details-section"
        className="min-h-screen pt-24 pb-2 px-6 md:px-12 bg-gray-100 text-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">
            Referral Incentive Program – Earn €450!
          </h1>

          {/* Introduction */}
          <p className="text-xl mb-8">
            Hi there! I’m excited to announce my Referral Incentive Program,
            designed to reward those who help me grow my freelance business. I
            design and build high-quality software, such as websites and mobile
            applications. I’m currently looking to expand my client base—and
            that’s where you come in!
          </p>

          <div className="flex justify-center my-12">
            <Image
              src={browserUsesWebP ? "/tech-photo-2.webp" : "/tech-photo-2.jpg"}
              alt="Workdesk"
              width={800}
              height={800}
            />
          </div>

          {/* Details */}

          <h2 className="text-2xl font-semibold mb-4">👉 How it works:</h2>
          <ul className="list-disc list-inside mb-8 text-xl">
            <li>
              Refer anyone who needs software development or consultancy
              services. If they become a client, you’ll earn 10% of the total
              project value, up to a maximum of €450.
            </li>
            <li>
              Once the client pays for the project, I’ll send your incentive
              directly to you.
            </li>
          </ul>

          {/* How to Refer */}
          <h2 className="text-2xl font-semibold mb-4">🔗 How to refer:</h2>
          <ul className="list-disc list-inside mb-8 text-xl">
            <li>
              It’s simple! Just send them my way by emailing me at{" "}
              <a
                href="mailto:alex@beyonddevelopment.co"
                className="text-blue-500"
              >
                alex@beyonddevelopment.co
              </a>
            </li>
            <li>
              Alternatively, call or DM me directly via any of the contact
              information listed in{" "}
              <a href="#footer" className="text-cyan-600 hover:text-cyan-500">
                the footer of this page
              </a>
              . If they become a client, you’ll get your reward.
            </li>
          </ul>

          {/* Incentive Details */}
          <h2 className="text-2xl font-semibold mb-4">
            💰 Incentive Breakdown:
          </h2>
          <ul className="list-disc list-inside mb-8 text-xl">
            <li>
              <strong>10% of total project value:</strong> Earn 10% of the total
              project value for any referred lead, up to a maximum of €450.
            </li>
            <li>
              The incentive is payable once per client referral (not once per
              project).
            </li>
            <li>
              The maximum incentive possible is €450, even if 10% of the total
              project value exceeds this amount.
            </li>
          </ul>

          {/* Terms and Conditions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              📜 Terms and Conditions:
            </h2>
            <ul className="list-disc list-inside mb-8 text-xl">
              <li>
                <button
                  className="text-blue-600 text-xl"
                  onClick={() => toggleIsTermsAndConditionsModalOpen(true)}
                >
                  <span className="hover:underline">View</span> 🧐
                </button>
              </li>
              <li>
                <a
                  className="text-blue-600 text-xl"
                  href="/documents/terms-and-conditions_1.0.pdf"
                  download
                >
                  <span className="hover:underline">Download ⬇️</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-start gap-12">
            <Image
              src={
                browserUsesWebP
                  ? "/alcobendas-1-small.webp"
                  : "/alcobendas-1-small.jpg"
              }
              alt="Alex Blyth"
              height={200}
              width={200}
              className="mobilePortrait:hidden"
            />
            <div>
              <p className="text-xl mb-8">
                Thank you for helping me grow my business!
              </p>
              <div className="mobilePortrait:hidden">
                <p className="text-5xl font-calloveya font-semibold">
                  Alex BLyth
                </p>
                <p className="text-xl font-semibold mt-4">Alex Blyth</p>
              </div>
            </div>
          </div>

          {/* Mobile Portrait Image / Signature */}
          <div className="hidden mobilePortrait:flex items-center justify-start gap-8">
            <Image
              src={
                browserUsesWebP
                  ? "/alcobendas-1-small.webp"
                  : "/alcobendas-1-small.jpg"
              }
              alt="Alex Blyth"
              height={200}
              width={200}
            />
            <div>
              <p className="text-4xl font-calloveya font-semibold">
                Alex BLyth
              </p>
              <p className="text-xl font-semibold mt-4">Alex Blyth</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-lg font-bold mb-6">
              Know someone who could use my services? Refer them now and start
              earning!
            </p>
            <CTAButton className="bg-blue-600 text-white hover:bg-blue-700">
              Refer Someone
            </CTAButton>
          </div>
        </div>

        <div className="py-6">
          {/* Contact Information */}
          <p className="mt-6 text-sm text-center">
            Have questions? Reach me at{" "}
            <a
              href="mailto:alex@beyonddevelopment.co"
              className="font-semibold text-blue-500"
            >
              alex@beyonddevelopment.co
            </a>{" "}
            or{" "}
            <a className="font-semibold text-blue-500" href="tel:+31626554794">
              +31 626 554 794
            </a>
          </p>

          {/* Postal Address */}
          <p className="mt-2 text-sm text-gray-500 text-center">
            Beyond Development | Keurenplein 41, Unit A9918, 1069CD Amsterdam,
            Netherlands
          </p>
        </div>
      </section>
      <Modal
        isOpen={isTermsAndConditionsModalOpen}
        onClose={() => toggleIsTermsAndConditionsModalOpen(false)}
        heightInPx={700}
        isWiderModal
        backgroundImgClassname="bg-[#f9fafb]"
        hasInteriorOverlay={false}
        hasDarkXArrow
      >
        <ReferralTermsAndConditions />
      </Modal>
    </>
  );
};

export default ReferralProgram;
