'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';


// name, href, icon, badge, [{name, href, icon, badge}]
export default function SidenavContext({
    name, href, icon, badge
}: {
    name: string;
    href: string;
    icon: JSX.Element;
    badge?: string;
}) {
    const pathname = usePathname();
    return (
        <li>
            <Link key={name} href={href} className={`flex items-center p-2 rounded-lg group text-neutral-500 hover:bg-neutral-900 hover:text-white
            ${pathname === href ? 'bg-neutral-900 text-white' : ''}`}>
                {icon}
                <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                {badge && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        {badge}
                    </span>
                )}
            </Link>
        </li>
    )
}