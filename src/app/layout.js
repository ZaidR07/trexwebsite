import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "T-Rex Infotech | Innovative Tech Solutions",
  description:
    "T-Rex Infotech offers cutting-edge technology solutions, web development, AI, and cloud computing services to elevate your business.",
  keywords:
    "Tech Solutions, Web Development, AI, Cloud Computing, T-Rex Infotech, Software Services",
  author: "T-Rex Infotech Team",
  robots: "index, follow",
  openGraph: {
    title: "T-Rex Infotech | Innovative Tech Solutions",
    description:
      "Empowering businesses with AI-driven software, web development, and cloud solutions.",
    type: "website",
    url: "https://www.trexinfotech.com",
    image: "https://www.trexinfotech.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Rex Infotech",
    description:
      "Cutting-edge software, AI, and cloud solutions for modern businesses.",
    image: "https://www.trexinfotech.com/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={metadata.robots} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="canonical" href="https://www.trexinfotech.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
