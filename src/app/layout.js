import { DM_Sans } from 'next/font/google';
import './globals.css';
import AnalyticsScripts from './components/AnalyticsScripts';
import LeadAttribution from './components/LeadAttribution';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Jonathan Benn | Apps, Automation & Software',
  description: 'Jonathan Benn builds web apps, mobile apps, AI automation, dashboards, and custom software for growing teams.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <AnalyticsScripts />
        <LeadAttribution />
        {children}
      </body>
    </html>
  );
}
