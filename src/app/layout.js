import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import AnalyticsScripts from './components/AnalyticsScripts';
import LeadAttribution from './components/LeadAttribution';

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans'
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono'
});

export const metadata = {
  title: 'JB Systems | AI Automation & Custom Software',
  description: 'JB Systems builds production AI automation, internal platforms, and web, mobile, and desktop software around real business workflows.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <AnalyticsScripts />
        <LeadAttribution />
        {children}
      </body>
    </html>
  );
}
