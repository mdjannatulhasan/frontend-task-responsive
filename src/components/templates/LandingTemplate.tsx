import React from 'react';
import SaleBanner from '../molecules/SaleBanner';
import Header from '../organisms/Header';
import BenefitsList from '../organisms/BenefitsList';
import PhoneMockup from '../organisms/PhoneMockup';
import Button from '../atoms/Button';

interface LandingTemplateProps {
    className?: string;
}

const LandingTemplate: React.FC<LandingTemplateProps> = ({
    className = '',
}) => {
    return (
        <div className={`${className}`}>
            <SaleBanner />

            <Header className="lg:mb-[57px] relative z-10" />
            <div className="container max-w-[1018px] mx-auto px-[20px] lg:px-0 relative lg:pl-1">
                <PhoneMockup className="lg:absolute lg:right-[-115px] lg:top-[-86px]" />
                <div className="space-y-4 max-w-[516px] flex flex-col relative z-10">
                    <div className="order-1 lg:order-unset text-center lg:text-left space-y-0 text-[25px] lg:text-[35px] font-urbanist font-extrabold lg:font-bold leading-[30px] lg:leading-[42px] mt-[-13px] lg:mt-0">
                        <h1 className="text-white">
                            Want to Turn Social Media Into a Profitable Career?
                        </h1>
                        <p className="text-[#00e7f9] [text-shadow:0px_4px_4px_#FC004E]">
                            Discover your way to success with Fametonic:
                        </p>
                    </div>

                    <BenefitsList className="order-1" />

                    <div className="space-y-[10px] flex max-w-full md:max-w-[313px] flex-col pt-[14px] lg:pt-[13px] order-3 lg:order-2 pb-6 lg:pb-[14px]">
                        <Button
                            size="lg"
                            variant="primary"
                            className="flex items-center justify-center gap-[10px] "
                        >
                            GET STARTED
                            <span>
                                <svg
                                    width="8"
                                    height="14"
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z"
                                        fill="white"
                                        stroke="white"
                                    />
                                </svg>
                            </span>
                        </Button>
                        <p className="text-white text-xs text-center leading-[16px]">
                            1-minute quiz for personalized Insights
                        </p>
                    </div>
                    <div className="text-[#ABABAB] text-center lg:text-left space-y-[19px] lg:space-y-3 font-bigtree font-medium px-4 lg:px-0 order-2 lg:order-3 pb-[18px] lg:pb-0 pt-[6px] lg:pt-0">
                        <p className="text-xs leading-[14px]">
                            By clicking &quot;Get Started&quot;, you agree with
                            Terms and Conditions, Privacy Policy, Subscription
                            Terms
                        </p>
                        <p className="text-[10px] leading-[14px] font-nunito lg:font-figtree font-medium">
                            Fametonic 2025 ©All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingTemplate;
