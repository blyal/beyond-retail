const termsAndConditionsData = {
  eligibilityTerms: [
    "This program applies only to the first project with new clients (existing clients or subsequent projects with referred clients are not eligible for this incentive).",
    "A qualifying referral is defined as a new client that enters into a paid agreement for services with my company, Beyond Development, initiated through your introduction.",
    "It is possible to claim the reward by referring a company that you own or are employed by. However, in this case, the company will be ineligible for other discounts I offer. The reward cannot be combined with other discounts for the same company or its employees.",
    "Referrals must result in the commencement of work or a signed contract with the client within 12 months of the referral to be eligible for the incentive.",
    "The referral incentive is not applicable if I decline to accept the referred project or client for any reason.",
  ],
  referralPaymentTerms: [
    "The maximum referral payment is capped at €450, even if 10% of the project value exceeds this amount.",
    "The referral payment will be made within 21 days after full payment for the project has been received from the client, or after invoice payments have been received totaling at least €4500, in the case of rewards reaching €450. Payments will be made via bank transfer, Paypal, Bizum, or Tikkie.",
    "For reward amounts below €450, referrers will receive a declaration of the total amount billed to the client for the project, used to calculate the 10% reward. Referrers are also free to confirm this information with the client they referred.",
    "If the full reward payment amount is €450, referrers will receive the payment without any declaration or further financial information about the project.",
    "A referral process is considered completed once payment of the reward has been made, which will occur just once. No further updates are obligatory or to be expected.",
    "Referrers are free to claim their reward early when further invoice payments from the client are either expected or possible which would raise the reward amount. However, claiming early renders the referral process complete, and referrers cannot claim further payments for that referral.",
  ],
  projectStallingTerms: [
    "In cases where a project has stalled, referrers will be made aware of the situation. Project stalling is defined as a situation where work by Beyond Development on the project has ceased, and future work is possible but uncertain—therefore, further future payments for the same project, which could raise the reward amount due to the referrer, are possible but uncertain.",
    "Referrers will have the option of either claiming their reward early in cases where the project has stalled or of waiting to see if their reward might increase by claiming their reward at a future date.",
    "If a project has stalled and work ceases for more than 4 months from the last date of billable activity by Beyond Development and the reward is still unclaimed, the referrer will be notified and must choose within 7 days whether to claim the reward based on completed work or forfeit it.",
    "If a project resumes after having stalled for over four months, referrers are not eligible to claim any further reward payment.",
  ],
  communicationTerms: [
    "Referrers must provide their contact information in order to receive updates.",
    "Referrers will receive an update within 30 days about the status of their referral and whether it has resulted in a new client agreement (you are also free to receive updates from the client you have referred).",
    "Referrers will receive updates at key project milestones, including contract agreements, project commencement, client payment schedules, and the final payment that determines the reward amount. Beyond Development will prioritize security and client confidentiality and reserves the right to limit the sharing of project details.",
    "Referrers forfeit their reward if they do not respond to communication attempts from Beyond Development within 60 days.",
  ],
  modificationsAndDisputesTerms: [
    "This referral program may be modified or terminated at any time at my discretion without notice. Please check on the Beyond Development website whether the program is active and note the terms and conditions at the time at which the referral is made.",
    "In the event of a dispute related to this referral program, both parties agree to work together in good faith to resolve the matter.",
  ],
  legalAndTaxResponsibilitiesTerms: [
    "Please ensure you have the referred client’s permission before sharing their information with me.",
    "It is the responsibility of the referrer to comply with any tax obligations or reporting requirements related to receiving the referral payment.",
    "Full payment of the reward incentive is contingent upon the client meeting their payment obligations. If the client makes late or incomplete payments, the referral payment to the referrer may be equally late or proportionally incomplete. Beyond Development will strive to keep the referrer informed in such situations as they develop, but ultimately is not responsible for the lateness or incompleteness of payments caused by any client not abiding by agreed terms.",
    "By participating in this program, referrers agree to share client contact information with their permission. Beyond Development will use this information solely for contacting the referred client and will handle the information in compliance with data protection regulations.",
  ],
  acceptanceOfTheTerms: [
    "Participation in the program constitutes acceptance of these terms and conditions.",
  ],
};

const ReferralTermsAndConditions = () => {
  return (
    <div className="text-black mt-2">
      <h3 className="text-center font-bold text-2xl">Terms and Conditions</h3>
      <h5 className="text-center">Beyond Development Referral Programme</h5>
      <ol className="list-decimal list-inside leading-[1.6] text-m mt-3">
        <Subsection
          name="Eligibility"
          terms={termsAndConditionsData.eligibilityTerms}
        />
        <Subsection
          name="Referral Payment"
          terms={termsAndConditionsData.referralPaymentTerms}
        />
        <Subsection
          name="Project Stalling"
          terms={termsAndConditionsData.projectStallingTerms}
        />
        <Subsection
          name="Communication"
          terms={termsAndConditionsData.communicationTerms}
        />
        <Subsection
          name="Modifications & Disputes"
          terms={termsAndConditionsData.modificationsAndDisputesTerms}
        />
        <Subsection
          name="Legal & Tax Responsibilities"
          terms={termsAndConditionsData.legalAndTaxResponsibilitiesTerms}
        />
        <Subsection
          name="Acceptance of Terms"
          terms={termsAndConditionsData.acceptanceOfTheTerms}
        />
      </ol>
    </div>
  );
};

interface SubsectionProps {
  name: string;
  terms: string[];
}

const Subsection = ({ name, terms }: SubsectionProps) => {
  return (
    <li className="mb-4">
      <strong>{name}</strong>
      <ol className="list-decimal list-inside ml-3">
        {terms.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ol>
    </li>
  );
};

export default ReferralTermsAndConditions;
