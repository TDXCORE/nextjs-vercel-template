
import { DM_Sans } from 'next/font/google'
import { GlobalStateProvider } from '@/context/GolobalStateProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@/styles/scss/style.scss';

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: '--font-jampack'
})

export const metadata = {
  title: 'Jampack | A Robust SaaS App Template Built on Next.js',
  description: 'NextJs based admin dashboard template by hencework',
  keywords: ['NextJs', 'React NextJs', 'Next.js', 'React template', 'react admin', 'react node', 'react bootstrap', 'responsive web application', 'react webapp', 'multi app demos'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dm_sans.variable}`}>
      <body>
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  )
}
