import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ike the Barber | Professional Barbering Services in Sunnyside, Pretoria",
  description:
    "Experience precision cuts, beard trims, and fades at Ike the Barber. Located at 85 Steve Biko Street, Sunnyside, Pretoria. Book your appointment today!",
  keywords: "barber, haircut, beard trim, fade, Pretoria, Sunnyside, professional barbering, men's grooming",
  authors: [{ name: "Ike the Barber" }],
  openGraph: {
    title: "Ike the Barber | Professional Barbering Services",
    description: "Precision. Style. Confidence. Professional barbering services in Sunnyside, Pretoria.",
    url: "https://ikethebarber.co.za",
    siteName: "Ike the Barber",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ike the Barber | Professional Barbering Services",
    description: "Precision. Style. Confidence. Professional barbering services in Sunnyside, Pretoria.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
