import Link from 'next/link';
import React from 'react';

type Props = {
    className?: string;
    name: string;
    href: string;
    active?: boolean;
    onClick?: () => void;
};

const NavItem = ({ className = '', name, href, active }: Props) => {
    const baseClasses =
        'text-lg font-figtree font-semibold text-[#A9A9A9] leading-[22px]';

    return (
        <Link
            href={href}
            className={`${baseClasses} ${
                active ? 'text-white' : ''
            } ${className}`}
        >
            {name}
        </Link>
    );
};

export default NavItem;
