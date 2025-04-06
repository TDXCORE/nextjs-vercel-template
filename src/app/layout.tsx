
import { Metadata } from 'next';
import './globals.css';
import { GlobalStateProvider } from '@/context/GolobalStateProvider';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
