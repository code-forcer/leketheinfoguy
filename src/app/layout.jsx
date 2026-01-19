import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Canela – Serif for headings & emotional weight */
const canela = localFont({
  src: [
    {
      path: "../../public/fonts/canela/CanelaDeck-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-canela",
  display: "swap",
});

/* Inter – Neutral, readable body font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "LekeTheInfoGuy — A Shared Human Space",
  description:
    "A calm platform for sharing thoughts, emotions, lessons, worries, and lived experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${canela.variable}
          ${inter.variable}
          antialiased
        `}
      >
        <Providers>
          {/* Page Shell */}
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header />

            {/* Main content grows, footer stays grounded */}
            <main
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
