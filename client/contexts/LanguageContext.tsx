import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  formatDate: (date: Date) => string;
  formatNumber: (num: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  en: {
    // Header
    "header.title": "F1 Performance Dashboard",
    "header.subtitle": "Interactive Formula 1 statistics and analysis",

    // Driver Performance Chart
    "driver.chart.title": "Driver Performance Over Seasons (Mock Data)",
    "driver.chart.description":
      "Displays the point progression of a selected F1 driver over multiple seasons using simulated data.",
    "driver.chart.selectDriver": "Select Driver",
    "driver.chart.selectSeasons": "Select Seasons",
    "driver.chart.yAxisLabel": "Championship Points",
    "driver.chart.xAxisLabel": "Season",

    // Constructor Chart
    "constructor.chart.title": "Constructor Points Per Race (Mock Data)",
    "constructor.chart.description":
      "Compares the total constructor points per race in a selected season using simulated data.",
    "constructor.chart.selectSeason": "Select Season",
    "constructor.chart.yAxisLabel": "Points",
    "constructor.chart.xAxisLabel": "Race",
    "constructor.chart.tooltipPoints": "points",

    // Common
    "common.loading": "Loading...",
    "common.noData": "No data available",
    "common.points": "points",
    "common.season": "Season",
    "common.race": "Race",

    // Teams
    "team.red-bull": "Red Bull Racing",
    "team.ferrari": "Ferrari",
    "team.mercedes": "Mercedes",
    "team.mclaren": "McLaren",
    "team.alpine": "Alpine",
    "team.aston-martin": "Aston Martin",
    "team.alpha-tauri": "AlphaTauri",
    "team.alfa-romeo": "Alfa Romeo",
    "team.haas": "Haas",
    "team.williams": "Williams",
  },
  fr: {
    // Header
    "header.title": "Tableau de bord de performance F1",
    "header.subtitle": "Statistiques et analyses interactives de Formule 1",

    // Driver Performance Chart
    "driver.chart.title": "Performance des pilotes au fil des saisons",
    "driver.chart.description":
      "Affiche l'évolution des points d'un pilote de F1 sélectionné au fil des saisons.",
    "driver.chart.selectDriver": "Sélectionner un pilote",
    "driver.chart.selectSeasons": "Sélectionner les saisons",
    "driver.chart.yAxisLabel": "Points de championnat",
    "driver.chart.xAxisLabel": "Saison",

    // Constructor Chart
    "constructor.chart.title": "Points des écuries par course",
    "constructor.chart.description":
      "Compare les points des écuries de F1 par course pour une saison donnée.",
    "constructor.chart.selectSeason": "Sélectionner une saison",
    "constructor.chart.yAxisLabel": "Points",
    "constructor.chart.xAxisLabel": "Course",
    "constructor.chart.tooltipPoints": "points",

    // Common
    "common.loading": "Chargement...",
    "common.noData": "Aucune donnée disponible",
    "common.points": "points",
    "common.season": "Saison",
    "common.race": "Course",

    // Teams
    "team.red-bull": "Red Bull Racing",
    "team.ferrari": "Ferrari",
    "team.mercedes": "Mercedes",
    "team.mclaren": "McLaren",
    "team.alpine": "Alpine",
    "team.aston-martin": "Aston Martin",
    "team.alpha-tauri": "AlphaTauri",
    "team.alfa-romeo": "Alfa Romeo",
    "team.haas": "Haas",
    "team.williams": "Williams",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const formatDate = (date: Date): string => {
    if (language === "fr") {
      return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatNumber = (num: number): string => {
    if (language === "fr") {
      return num.toLocaleString("fr-FR", {
        minimumFractionDigits: num % 1 === 0 ? 0 : 1,
        maximumFractionDigits: 1,
      });
    }
    return num.toLocaleString("en-US", {
      minimumFractionDigits: num % 1 === 0 ? 0 : 1,
      maximumFractionDigits: 1,
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        formatDate,
        formatNumber,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
