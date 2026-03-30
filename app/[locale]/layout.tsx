import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params en Next.js 15+
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>La Escondida Turismo - Chaco, Argentina</title>
        <meta
          name="description"
          content="Descubre La Escondida, turismo en el corazón del Chaco"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
