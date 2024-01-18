import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <div className="basis-20 max-w-20 h-screen">
            <div className="flex flex-col h-full bg-neutral-950">
              <div className="flex flex-row p-5 w-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
              </div>
              <div className="flex flex-col py-5 gap-4 items-center w-full">
                <a className='p-4 text-neutral-500 rounded-2xl hover:bg-neutral-900 hover:text-white hover:cursor-pointer '><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg></a>
                <a className='p-4 text-neutral-500 rounded-2xl hover:bg-neutral-900 hover:text-white hover:cursor-pointer '>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </a>
                <a className='p-4 text-neutral-500 rounded-2xl hover:bg-neutral-900 hover:text-white hover:cursor-pointer '>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-histogram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3v18h18" /><path d="M20 18v3" /><path d="M16 16v5" /><path d="M12 13v8" /><path d="M8 16v5" /><path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" /></svg>
                </a>
                <a className='p-4 text-neutral-500 rounded-2xl hover:bg-neutral-900 hover:text-white hover:cursor-pointer '>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" /></svg>
                </a>
              </div>

            </div>
          </div>
          <div className="basis-1/6 border-x border-gray-600">
            <div className="flex flex-col  h-full">
              <div className="flex flex-row border-b border-gray-600 p-5 w-full">
                <div>Dashboard</div>
              </div>
              <div className="flex flex-col p-5 w-full h-full">
                <div>01</div>
                <div>02</div>
              </div>
            </div>
          </div>
          <div className="grow ">
            <div className="flex flex-col  h-full">
              <div className="flex flex-row border-b border-gray-600  p-5 w-full sticky top-0">
                <div>Demo</div>
              </div>
              <div className="flex flex-row  p-5 w-full h-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
