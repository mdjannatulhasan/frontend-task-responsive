import React from 'react';
import StarIcon from '../atoms/StarIcon';

interface BenefitItemProps {
    text: string;
    className?: string;
    index?: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
    text,
    className = '',
    index,
}) => {
    return (
        <div
            className={`flex items-center gap-[11px] lg:gap-3  text-base ${
                index == 0 ? 'font-medium' : 'font-regular'
            } lg:font-semibold leading-[22px] ${className}`}
        >
            <StarIcon className="text-[22px]" />
            <p className={`text-white`}>{text}</p>
        </div>
    );
};

export default BenefitItem;
