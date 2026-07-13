import { Inter } from 'next/font/google';
import './globals.css';
import AnalyticsScripts from './components/AnalyticsScripts';
import LeadAttribution from './components/LeadAttribution';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jonathan Benn | AI Automation & Custom Software',
  description: 'AI automation, web apps, mobile apps, dashboards, and custom software built around real business workflows.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsScripts />
        <LeadAttribution />
        {children}
      </body>
    </html>
  );
}
