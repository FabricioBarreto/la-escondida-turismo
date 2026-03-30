"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "es", name: "Español", flag: "🇦🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (["es", "en", "pt"].includes(segments[0])) {
      segments.shift();
    }
    const rest = segments.join("/");
    const newPath = "/" + newLocale + (rest ? "/" + rest : "");
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-2">
        <Globe className="w-5 h-5 text-emerald-600" />
        {languages.map((lang) => (
          <Button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            variant={locale === lang.code ? "default" : "ghost"}
            size="sm"
            className={
              locale === lang.code
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "hover:bg-emerald-50"
            }
          >
            <span className="mr-1">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
            <span className="sm:hidden">{lang.code.toUpperCase()}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
