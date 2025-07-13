import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Flag } from "lucide-react";

export function DashboardHeader() {
  const { t } = useLanguage();

  return (
    <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
              <Flag className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight truncate">
                {t("header.title")}
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                {t("header.subtitle")}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
