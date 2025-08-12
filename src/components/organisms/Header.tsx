import React from 'react';
import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    return (
        <header
            className={`relative flex justify-center lg:justify-between container max-w-[1018px] mx-auto mt-4 lg:mt-[35px] ${className}`}
        >
            <div className="h-[46px] lg:h-[74px]">
                <Logo />
            </div>
            <div>
                <Navigation className="hidden lg:flex" />
                <button className="lg:hidden block absolute top-1/2 transform -translate-y-1/2 right-[29px]">
                    <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="1"
                            y1="1.03597"
                            x2="19"
                            y2="1.03597"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="1"
                            y1="7.03597"
                            x2="19"
                            y2="7.03597"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="1"
                            y1="13.036"
                            x2="19"
                            y2="13.036"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
