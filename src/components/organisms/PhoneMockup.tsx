import React from 'react';

interface PhoneMockupProps {
    className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '' }) => {
    return (
        <div className={`${className}`}>
            <img
                src="assets/images/mockup.png"
                className="max-w-[302px] mx-auto h-[300px] lg:!max-w-[100%] lg:h-[660px]"
                alt="mobile-mockup"
            />
        </div>
    );
};

export default PhoneMockup;
