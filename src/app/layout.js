import StoreProvider from "@/app/StoreProvider";
import { Inter } from 'next/font/google';
import './globals.css';
import FacebookMsg from './home/facebookMsg';
import FloatOptions from './home/floatOptions/floatOptions';
import Header from './home/header';
import MobileNav from './mobileNav';
import './normalize.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ai2 Technologies',
  description: 'Unleashing Innovation Anytime, Everywhere',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <main className='main_layout'>
            <Header />
            <section className={'body_section'}>
              {children}
              {/* <Footer /> */}
            </section>
            <FloatOptions />
            <MobileNav />
            <FacebookMsg />
          </main>
        </body>
      </StoreProvider>
    </html>
  )
}


export const dynamic = 'force-dynamic';
