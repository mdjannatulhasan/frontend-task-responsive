import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
}) => {
    const baseClasses = 'font-bold cursor-pointer';

    const variantClasses = {
        primary:
            'bg-[#FC004E] max-w-full md:max-w-[313px] w-full rounded-[10px] text-[20px] text-white font-urbanist md:font-figtree [box-shadow:2px_2px_10px_#00E7F9]',
        secondary: '',
        outline: '',
    };

    const sizeClasses = {
        sm: '',
        md: '',
        lg: 'px-4 py-2 text-sm leading-[24px] lg:text-[20px]',
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
