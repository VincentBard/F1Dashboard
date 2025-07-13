import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Flag } from "lucide-react";

export function DashboardHeader() {
  const { t } = useLanguage();

  return (
    <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Flag className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {t("header.title")}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t("header.subtitle")}
              </p>
            </div>
          </div>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
