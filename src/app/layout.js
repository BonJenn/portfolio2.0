import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header';
import Footer from './components/footer';
import AnalyticsScripts from './components/AnalyticsScripts';
import LeadAttribution from './components/LeadAttribution';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Benn | AI Automation, Dashboards & Product Systems",
  description: "Jonathan Benn builds practical AI automation systems, internal dashboards, customer portals, mobile apps, and workflow software for businesses with messy operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsScripts />
        <LeadAttribution />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
