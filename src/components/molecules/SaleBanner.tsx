import React from 'react';
interface SaleBannerProps {
    className?: string;
}

const SaleBanner: React.FC<SaleBannerProps> = ({ className = '' }) => {
    return (
        <div
            className={`bg-[linear-gradient(90deg,_#FC004E_0%,_#10CBE0_100%)] px-4 py-[20px] lg:py-[10px] ${className}`}
        >
            <p className="text-center font-figtree font-bold text-white text-sm lg:text-[22px] leading-[17px] lg:leading-[26px]">
                <span className="font-extrabold text-[#00E7F9] text-base lg:text-[22px] leading-[19px] lg:leading-[26px]">
                    🚀 FRESH BEGINNINGS SALE:
                </span>{' '}
                Extra 25% OFF, Limited Spots - start your journey today!
            </p>
        </div>
    );
};

export default SaleBanner;
