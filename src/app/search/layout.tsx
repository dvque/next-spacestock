import Link from "next/link"
import SidenavContext from "../ui/sidenav-context"

const links = [
    {
        name: 'Inbox',
        href: '/search/inbox',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mailbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                <path d="M12 11v-8h4l2 2l-2 2h-4" />
                <path d="M6 15h1" />
            </svg>
        )
    }
];

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="basis-1/6 border-x border-gray-600">
                <div className="flex flex-col h-full">
                    <div className="flex flex-row border-b border-gray-600 p-5 w-full max-h-16">
                        <h1 className='text-xl font-semibold'>Search</h1>
                    </div>
                    <div className="flex flex-col p-5 w-full h-full">
                        <ul className="space-y-2 font-medium">
                            {links.map((link) => {
                                return (
                                    <SidenavContext
                                        key={link.name}
                                        name={link.name}
                                        href={link.href}
                                        icon={link.icon}
                                        badge={link.badge}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grow">
                <div className="flex flex-col  h-full bg-neutral-950">
                    <div className="flex flex-row border-b border-gray-600 bg-neutral-950 p-5 w-full sticky top-0 max-h-16">
                        <h2 className='text-lg font-medium'>Demo</h2>
                    </div>
                    <div className="flex flex-row border bg-neutral-950 rounded-xl  m-5 p-5  h-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}