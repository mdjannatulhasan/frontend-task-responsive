import React from 'react';
import NavItem from '../atoms/NavItem';

interface NavigationProps {
    className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
    const navItems = [
        { name: 'About us', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`flex gap-10 mr-[5px] ${className}`}>
            {navItems.map((item, index) => (
                <NavItem key={index} name={item.name} href={item.href} />
            ))}
        </nav>
    );
};

export default Navigation;
