import { Metadata } from "next";

export const title = "StreamIt";
export const description = "A radio player application that showcases the use of DashJS with Next.js app router and server components, streaming audio in MPEG-DASH format.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: title,
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@AboutSaiMon",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title,
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  }
};
