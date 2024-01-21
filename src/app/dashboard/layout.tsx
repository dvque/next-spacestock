import Link from "next/link"
import SidenavContext from "../ui/sidenav-context"

const links = [
    {
        name: 'Product',
        href: '/dashboard/product',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-seam" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M8.2 9.8l7.6 -4.6" />
                <path d="M12 12v9" />
                <path d="M12 12l-8 -4.5" />
            </svg>
        )
    },
    {
        name: 'Commerce',
        href: '/dashboard/commerce',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paper-bag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" />
                <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
                <path d="M11 7h2" />
            </svg>
        )
    },
    {
        name: 'Cash',
        href: '/dashboard/cash',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
            </svg>
        ),
        badge: 'Pro'
    }
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="basis-1/6 border-x border-gray-600">
                <div className="flex flex-col h-full">
                    <div className="flex flex-row border-b border-gray-600 p-5 w-full max-h-16">
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                    </div>
                    <div className="flex flex-col p-5 w-full h-full">
                        <ul className="space-y-2 font-medium">
                            {links.map((link) => (
                                <SidenavContext
                                    key={link.name}
                                    name={link.name}
                                    href={link.href}
                                    icon={link.icon}
                                    badge={link.badge}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grow">
                <div className="flex flex-col h-full bg-neutral-950">
                    <div className="flex flex-row border-b border-gray-600 bg-neutral-950 p-5 w-full sticky top-0 max-h-16">
                        <h2 className="text-lg font-medium">Demo</h2>
                    </div>
                    <div className="flex flex-row border bg-neutral-950 rounded-xl m-5 h-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}