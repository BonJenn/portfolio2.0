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
  title: 'Jonathan Benn | Software Systems & AI Automation',
  description: 'Production software systems, AI automation, internal platforms, and web, mobile, and desktop apps.'
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
