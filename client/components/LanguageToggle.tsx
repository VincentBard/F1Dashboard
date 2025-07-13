import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 font-medium"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-bold">{language.toUpperCase()}</span>
      <span className="text-xs text-muted-foreground">
        / {language === "en" ? "FR" : "EN"}
      </span>
    </Button>
  );
}
