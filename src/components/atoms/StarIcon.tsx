import React from 'react';

interface StarIconProps {
    className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ className = '' }) => {
    return <span className={`font-nunito ${className}`}>✨</span>;
};

export default StarIcon;
