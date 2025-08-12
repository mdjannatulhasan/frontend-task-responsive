import React from 'react';
import BenefitItem from '../molecules/BenefitItem';

interface BenefitsListProps {
    className?: string;
}

const BenefitsList: React.FC<BenefitsListProps> = ({ className = '' }) => {
    const benefits = [
        'Start growing your influence right away—no waiting required!',
        'Create viral TikToks and Reels step by step with easy-to-follow lessons',
        'Use a Personal AI Worker to boost your content',
        'Learn from expert-led courses designed for aspiring influencers',
    ];

    return (
        <div
            className={`space-y-[10px] mt-[6px] lg:mt-0 lg:space-y-[13px] ${className}`}
        >
            {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} index={index} />
            ))}
        </div>
    );
};

export default BenefitsList;
