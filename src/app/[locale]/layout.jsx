import "../../assets/style/globals.css";
import "../../assets/style/swiper.css";
import "../../assets/style/loader.css";

import { Geist, Quicksand } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/header";
import ReduxProvider from "@/components/layout/redux-provider";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

async function getSettings() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/settings`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      return getDefaultSettings();
    }
    const data = await response.json();
    return data.data || getDefaultSettings();
  } catch {
    return getDefaultSettings();
  }
}

function getDefaultSettings() {
  return {
    site_name: "Caucasync",
    meta_title: "Caucasync",
    meta_description: "Professional IT Solutions & Services",
    favicon: "/icons/logo.ico",
  };
}

export async function generateMetadata() {
  const settings = await getSettings();

  return {
    title: settings?.meta_title || settings?.site_name || "Caucasync",
    description: settings?.meta_description || "Professional IT Solutions & Services",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png" },
      ],
      apple: "/icon.png",
    },
    openGraph: {
      title: settings?.meta_title || settings?.site_name,
      description: settings?.meta_description,
      image: settings?.og_image
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${settings.og_image}`
        : undefined,
    },
    twitter: {
      card: settings?.twitter_card || "summary_large_image",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Canonical URL */}
        {/* <link rel="canonical" href={settings?.canonical_url} /> */}
      </head>
      <body className={`${geistSans.variable} ${quicksand.variable} antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider>
          <ReduxProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster className="font-semibold" />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}