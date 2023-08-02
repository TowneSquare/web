import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative flex pt-40 bg-black md:pt-40">
        <div className="items-center justify-center px-[10%] lg:px-[20%]">
          <div>
            <Link
              className="text-[#B882FF] flex md:text-[22px] font-Outfit font-medium md:leading-[34px]"
              to="/"
            >
              <img src="/images/ArrowLeft.svg" className="mr-2" />
              Back to website
            </Link>
          </div>
          <h1 className="md:text-[48px] font-bold font-Outfit py-4">
            Terms of Service
          </h1>
          <div>
            <p className="md:text-[22px] mb-8 md:eading-[34px] font-normal font-Outfit">
              Terms of Service eTown PTE. LTD. <br /> Last Updated: Aug 1st,
              2023
            </p>
            <div className="mb-8">
              <p className="md:text-[22px] nd:leading-[34px] font-normal font-Outfit">
                These terms of service, together with any documents and
                additional terms they incorporate by reference (collectively,
                these “Terms”), are entered into between eTown PTD LTD.. (the
                “Company,” “we,” “us,” and “our”) and you or the company or
                other legal entity that you represent (“Customer,” “you” or
                “your”). Please read these Terms carefully as they govern your
                use of our site located at https://www.townesquare.xyz and all
                associated sites (the “Website”) and our Services (defined
                below). By accessing or using any part of the Website or the
                Services, you accept and agree to be bound by these Terms and
                our Privacy Policy, incorporated herein by reference. If you do
                not agree to these Terms, you must not access the Website or use
                our Services. We reserve the right to make changes or
                modifications to these Terms from time to time with or without
                notice. Your continued use of the Website and/or Services
                following the posting of revised Terms means that you accept and
                agree to the changes.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                1. Services{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                ​Access and Use The Company enables users to access and use a
                variety of social networking features, including user profiles,
                messaging, content sharing, and other interactive features.
                Company hereby grants Customer a non-exclusive,
                non-transferable, non-sublicensable right to access and use the
                Services during the Term, solely for personal and non-commercial
                purposes. Customer shall be responsible for each user's
                compliance with these Terms. Customer acknowledges that
                TowneSquare is a Web 3 social network platform, emphasizing
                decentralized interactions and user privacy. Some Services may
                involve the use of blockchain technology or other decentralized
                infrastructures.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                2. Representation and Warranties
              </h5>{" "}
              <p className="md:text-[22px] md:leading-[34px] font-normal mb-8 font-Outfit">
                Conditions You represent and warrant that you are at least 18
                years of age, have the legal authority to agree to these Terms,
                and that your use of the Website and Services does not violate
                any applicable laws or regulations.
              </p>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Ownership Rights Except for any open source software or
                third-party software, the Company owns the Website and the
                Services, including all intellectual property rights therein.
                Any feedback or suggestions provided by you to the Company
                regarding the Website or Services may be used by the Company
                without restriction or obligation to you.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                3. Third party content{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                ​The Services may contain links to third-party websites or
                services. The Company has no control over, and assumes no
                responsibility for, the content or practices of any third-party
                websites or services
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                4. User contribution​{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                The Website may contain features that allow users to post,
                submit, or share content. All user-contributed content must
                comply with these Terms. By providing any content on the
                Website, you grant the Company and its affiliates the right to
                use, reproduce, modify, and distribute such content for any
                purpose.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                5. Modifications terms and termination{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                The Company reserves the right to make changes or modifications
                to these Terms and the Services at any time. These Terms will
                remain in effect while you access and use the Website or the
                Services. The Company may terminate your access to the Website
                and/or Services for any reason, including breach of these Terms.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                6. Communication{" "}
              </h5>
              <p className="md:text-[22px] lg:leading-[34px] font-normal font-Outfit">
                Electronic Notices, Transactions, and Signatures Electronic
                communications, including emails and online forms, constitute
                agreements and notices. All electronic communications from the
                Company are considered to be in writing and legally binding.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[22px] md:leading-[34px] font-Outfit font-bold">
                {" "}
                7. Indemnification{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You will defend, indemnify, and hold harmless the Company, its
                affiliates, directors, officers, employees, and agents from any
                claims, damages, liabilities, or expenses arising out of or
                related to your use of the Website or Services or your breach of
                these Terms.
              </p>
            </div>
            <div className="mb-8">
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                By accessing or using the Website or Services, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <Link
              className="text-[#B882FF] flex text-[22px] font-Outfit font-medium leading-[34px]"
              to="/"
            >
              <img src="/images/ArrowLeft.svg" className="mr-2" />
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
