export interface Driver {
  id: string;
  name: string;
  team: string;
  nationality: string;
}

export interface Constructor {
  id: string;
  name: string;
  color: string;
}

export interface Season {
  year: number;
  races: Race[];
}

export interface Race {
  id: string;
  name: string;
  date: Date;
  constructorResults: ConstructorRaceResult[];
}

export interface ConstructorRaceResult {
  constructorId: string;
  points: number;
}

export interface DriverSeasonData {
  driverId: string;
  season: number;
  totalPoints: number;
  races: DriverRaceResult[];
}

export interface DriverRaceResult {
  raceId: string;
  points: number;
  position: number;
}

export const drivers: Driver[] = [
  {
    id: "verstappen",
    name: "Max Verstappen",
    team: "red-bull",
    nationality: "Netherlands",
  },
  {
    id: "perez",
    name: "Sergio Pérez",
    team: "red-bull",
    nationality: "Mexico",
  },
  {
    id: "leclerc",
    name: "Charles Leclerc",
    team: "ferrari",
    nationality: "Monaco",
  },
  {
    id: "sainz",
    name: "Carlos Sainz",
    team: "ferrari",
    nationality: "Spain",
  },
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    team: "mercedes",
    nationality: "United Kingdom",
  },
  {
    id: "russell",
    name: "George Russell",
    team: "mercedes",
    nationality: "United Kingdom",
  },
  {
    id: "norris",
    name: "Lando Norris",
    team: "mclaren",
    nationality: "United Kingdom",
  },
  {
    id: "piastri",
    name: "Oscar Piastri",
    team: "mclaren",
    nationality: "Australia",
  },
  {
    id: "alonso",
    name: "Fernando Alonso",
    team: "aston-martin",
    nationality: "Spain",
  },
  {
    id: "stroll",
    name: "Lance Stroll",
    team: "aston-martin",
    nationality: "Canada",
  },
  {
    id: "ocon",
    name: "Esteban Ocon",
    team: "alpine",
    nationality: "France",
  },
  {
    id: "gasly",
    name: "Pierre Gasly",
    team: "alpine",
    nationality: "France",
  },
  {
    id: "bottas",
    name: "Valtteri Bottas",
    team: "stake-sauber",
    nationality: "Finland",
  },
  {
    id: "zhou",
    name: "Guanyu Zhou",
    team: "stake-sauber",
    nationality: "China",
  },
  {
    id: "albon",
    name: "Alex Albon",
    team: "williams",
    nationality: "Thailand",
  },
  {
    id: "sargeant",
    name: "Logan Sargeant",
    team: "williams",
    nationality: "United States",
  },
  {
    id: "tsunoda",
    name: "Yuki Tsunoda",
    team: "rb",
    nationality: "Japan",
  },
  {
    id: "ricciardo",
    name: "Daniel Ricciardo",
    team: "rb",
    nationality: "Australia",
  },
  {
    id: "magnussen",
    name: "Kevin Magnussen",
    team: "haas",
    nationality: "Denmark",
  },
  {
    id: "bearman",
    name: "Oliver Bearman",
    team: "haas",
    nationality: "United Kingdom",
  },
];


export const constructors: Constructor[] = [
  { id: "red-bull", name: "Red Bull Racing", color: "#1E40AF" },
  { id: "ferrari", name: "Ferrari", color: "#DC2626" },
  { id: "mercedes", name: "Mercedes", color: "#047857" },
  { id: "mclaren", name: "McLaren", color: "#EA580C" },
  { id: "alpine", name: "Alpine", color: "#2563EB" },
  { id: "aston-martin", name: "Aston Martin", color: "#059669" },
  { id: "alpha-tauri", name: "AlphaTauri", color: "#1E1B4B" },
  { id: "alfa-romeo", name: "Alfa Romeo", color: "#E11D48" },
  { id: "haas", name: "Haas", color: "#6B7280" },
  { id: "williams", name: "Williams", color: "#2563EB" },
];

// Mock driver performance data over seasons
export const driverSeasonData: DriverSeasonData[] = [
  // Max Verstappen
  {
    driverId: "verstappen",
    season: 2020,
    totalPoints: 214,
    races: [
      { raceId: "australia-2020", points: 0, position: 4 },
      { raceId: "bahrain-2020", points: 18, position: 2 },
      { raceId: "abu-dhabi-2020", points: 25, position: 1 },
    ],
  },
  {
    driverId: "verstappen",
    season: 2021,
    totalPoints: 395.5,
    races: [
      { raceId: "bahrain-2021", points: 18, position: 2 },
      { raceId: "imola-2021", points: 25, position: 1 },
      { raceId: "abu-dhabi-2021", points: 25, position: 1 },
    ],
  },
  {
    driverId: "verstappen",
    season: 2022,
    totalPoints: 454,
    races: [
      { raceId: "bahrain-2022", points: 25, position: 1 },
      { raceId: "saudi-arabia-2022", points: 25, position: 1 },
      { raceId: "abu-dhabi-2022", points: 25, position: 1 },
    ],
  },
  {
    driverId: "verstappen",
    season: 2023,
    totalPoints: 575,
    races: [
      { raceId: "bahrain-2023", points: 25, position: 1 },
      { raceId: "saudi-arabia-2023", points: 25, position: 1 },
      { raceId: "abu-dhabi-2023", points: 25, position: 1 },
    ],
  },
  {
    driverId: "verstappen",
    season: 2024,
    totalPoints: 429,
    races: [
      { raceId: "bahrain-2024", points: 25, position: 1 },
      { raceId: "saudi-arabia-2024", points: 25, position: 1 },
      { raceId: "abu-dhabi-2024", points: 25, position: 1 },
    ],
  },

  // Lewis Hamilton
  {
    driverId: "hamilton",
    season: 2020,
    totalPoints: 347,
    races: [
      { raceId: "australia-2020", points: 25, position: 1 },
      { raceId: "bahrain-2020", points: 25, position: 1 },
      { raceId: "abu-dhabi-2020", points: 15, position: 3 },
    ],
  },
  {
    driverId: "hamilton",
    season: 2021,
    totalPoints: 387.5,
    races: [
      { raceId: "bahrain-2021", points: 25, position: 1 },
      { raceId: "imola-2021", points: 18, position: 2 },
      { raceId: "abu-dhabi-2021", points: 18, position: 2 },
    ],
  },
  {
    driverId: "hamilton",
    season: 2022,
    totalPoints: 240,
    races: [
      { raceId: "bahrain-2022", points: 15, position: 3 },
      { raceId: "saudi-arabia-2022", points: 12, position: 4 },
      { raceId: "abu-dhabi-2022", points: 18, position: 2 },
    ],
  },
  {
    driverId: "hamilton",
    season: 2023,
    totalPoints: 234,
    races: [
      { raceId: "bahrain-2023", points: 12, position: 4 },
      { raceId: "saudi-arabia-2023", points: 15, position: 3 },
      { raceId: "abu-dhabi-2023", points: 18, position: 2 },
    ],
  },
  {
    driverId: "hamilton",
    season: 2024,
    totalPoints: 190,
    races: [
      { raceId: "bahrain-2024", points: 12, position: 4 },
      { raceId: "saudi-arabia-2024", points: 15, position: 3 },
      { raceId: "abu-dhabi-2024", points: 18, position: 2 },
    ],
  },

  // Charles Leclerc
  {
    driverId: "leclerc",
    season: 2020,
    totalPoints: 98,
    races: [
      { raceId: "australia-2020", points: 15, position: 3 },
      { raceId: "bahrain-2020", points: 12, position: 4 },
      { raceId: "abu-dhabi-2020", points: 18, position: 2 },
    ],
  },
  {
    driverId: "leclerc",
    season: 2021,
    totalPoints: 159,
    races: [
      { raceId: "bahrain-2021", points: 12, position: 4 },
      { raceId: "imola-2021", points: 15, position: 3 },
      { raceId: "abu-dhabi-2021", points: 15, position: 3 },
    ],
  },
  {
    driverId: "leclerc",
    season: 2022,
    totalPoints: 308,
    races: [
      { raceId: "bahrain-2022", points: 18, position: 2 },
      { raceId: "saudi-arabia-2022", points: 18, position: 2 },
      { raceId: "abu-dhabi-2022", points: 15, position: 3 },
    ],
  },
  {
    driverId: "leclerc",
    season: 2023,
    totalPoints: 206,
    races: [
      { raceId: "bahrain-2023", points: 18, position: 2 },
      { raceId: "saudi-arabia-2023", points: 18, position: 2 },
      { raceId: "abu-dhabi-2023", points: 15, position: 3 },
    ],
  },
  {
    driverId: "leclerc",
    season: 2024,
    totalPoints: 356,
    races: [
      { raceId: "bahrain-2024", points: 18, position: 2 },
      { raceId: "saudi-arabia-2024", points: 18, position: 2 },
      { raceId: "abu-dhabi-2024", points: 15, position: 3 },
    ],
  },
  // Sergio Pérez
  {
    driverId: "perez",
    season: 2022,
    totalPoints: 305,
    races: [
      { raceId: "bahrain-2022", points: 6, position: 5 },
      { raceId: "saudi-arabia-2022", points: 18, position: 2 },
      { raceId: "abu-dhabi-2022", points: 15, position: 3 },
    ],
  },
  {
    driverId: "perez",
    season: 2023,
    totalPoints: 260,
    races: [
      { raceId: "bahrain-2023", points: 15, position: 3 },
      { raceId: "saudi-arabia-2023", points: 12, position: 4 },
      { raceId: "abu-dhabi-2023", points: 18, position: 2 },
    ],
  },
  {
    driverId: "perez",
    season: 2024,
    totalPoints: 310,
    races: [
      { raceId: "bahrain-2024", points: 18, position: 2 },
      { raceId: "saudi-arabia-2024", points: 25, position: 1 },
      { raceId: "abu-dhabi-2024", points: 15, position: 3 },
    ],
  },

  // Carlos Sainz
  {
    driverId: "sainz",
    season: 2022,
    totalPoints: 246,
    races: [
      { raceId: "bahrain-2022", points: 10, position: 5 },
      { raceId: "saudi-arabia-2022", points: 15, position: 3 },
      { raceId: "abu-dhabi-2022", points: 12, position: 4 },
    ],
  },
  {
    driverId: "sainz",
    season: 2023,
    totalPoints: 195,
    races: [
      { raceId: "bahrain-2023", points: 12, position: 4 },
      { raceId: "saudi-arabia-2023", points: 10, position: 5 },
      { raceId: "abu-dhabi-2023", points: 15, position: 3 },
    ],
  },
  {
    driverId: "sainz",
    season: 2024,
    totalPoints: 255,
    races: [
      { raceId: "bahrain-2024", points: 10, position: 5 },
      { raceId: "saudi-arabia-2024", points: 18, position: 2 },
      { raceId: "abu-dhabi-2024", points: 12, position: 4 },
    ],
  },

  // George Russell
  {
    driverId: "russell",
    season: 2022,
    totalPoints: 275,
    races: [
      { raceId: "bahrain-2022", points: 12, position: 4 },
      { raceId: "saudi-arabia-2022", points: 15, position: 3 },
      { raceId: "abu-dhabi-2022", points: 10, position: 5 },
    ],
  },
  {
    driverId: "russell",
    season: 2023,
    totalPoints: 280,
    races: [
      { raceId: "bahrain-2023", points: 18, position: 2 },
      { raceId: "saudi-arabia-2023", points: 15, position: 3 },
      { raceId: "abu-dhabi-2023", points: 12, position: 4 },
    ],
  },
  {
    driverId: "russell",
    season: 2024,
    totalPoints: 310,
    races: [
      { raceId: "bahrain-2024", points: 15, position: 3 },
      { raceId: "saudi-arabia-2024", points: 18, position: 2 },
      { raceId: "abu-dhabi-2024", points: 15, position: 3 },
    ],
  },

  // Lando Norris
  {
    driverId: "norris",
    season: 2022,
    totalPoints: 215,
    races: [
      { raceId: "bahrain-2022", points: 10, position: 5 },
      { raceId: "saudi-arabia-2022", points: 12, position: 4 },
      { raceId: "abu-dhabi-2022", points: 8, position: 6 },
    ],
  },
  {
    driverId: "norris",
    season: 2023,
    totalPoints: 245,
    races: [
      { raceId: "bahrain-2023", points: 12, position: 4 },
      { raceId: "saudi-arabia-2023", points: 15, position: 3 },
      { raceId: "abu-dhabi-2023", points: 10, position: 5 },
    ],
  },
  {
    driverId: "norris",
    season: 2024,
    totalPoints: 295,
    races: [
      { raceId: "bahrain-2024", points: 15, position: 3 },
      { raceId: "saudi-arabia-2024", points: 18, position: 2 },
      { raceId: "abu-dhabi-2024", points: 12, position: 4 },
    ],
  },

  // Oscar Piastri
  {
    driverId: "piastri",
    season: 2023,
    totalPoints: 120,
    races: [
      { raceId: "bahrain-2023", points: 8, position: 6 },
      { raceId: "saudi-arabia-2023", points: 10, position: 5 },
      { raceId: "abu-dhabi-2023", points: 12, position: 4 },
    ],
  },
  {
    driverId: "piastri",
    season: 2024,
    totalPoints: 160,
    races: [
      { raceId: "bahrain-2024", points: 10, position: 5 },
      { raceId: "saudi-arabia-2024", points: 12, position: 4 },
      { raceId: "abu-dhabi-2024", points: 15, position: 3 },
    ],
  },

  // Fernando Alonso
  {
    driverId: "alonso",
    season: 2022,
    totalPoints: 81,
    races: [
      { raceId: "bahrain-2022", points: 8, position: 6 },
      { raceId: "saudi-arabia-2022", points: 10, position: 5 },
      { raceId: "abu-dhabi-2022", points: 8, position: 6 },
    ],
  },
  {
    driverId: "alonso",
    season: 2023,
    totalPoints: 120,
    races: [
      { raceId: "bahrain-2023", points: 10, position: 5 },
      { raceId: "saudi-arabia-2023", points: 12, position: 4 },
      { raceId: "abu-dhabi-2023", points: 10, position: 5 },
    ],
  },
  {
    driverId: "alonso",
    season: 2024,
    totalPoints: 140,
    races: [
      { raceId: "bahrain-2024", points: 12, position: 4 },
      { raceId: "saudi-arabia-2024", points: 15, position: 3 },
      { raceId: "abu-dhabi-2024", points: 12, position: 4 },
    ],
  },

  // Lance Stroll
  {
    driverId: "stroll",
    season: 2022,
    totalPoints: 75,
    races: [
      { raceId: "bahrain-2022", points: 6, position: 7 },
      { raceId: "saudi-arabia-2022", points: 8, position: 6 },
      { raceId: "abu-dhabi-2022", points: 6, position: 7 },
    ],
  },
  {
    driverId: "stroll",
    season: 2023,
    totalPoints: 85,
    races: [
      { raceId: "bahrain-2023", points: 8, position: 6 },
      { raceId: "saudi-arabia-2023", points: 10, position: 5 },
      { raceId: "abu-dhabi-2023", points: 8, position: 6 },
    ],
  },
  {
    driverId: "stroll",
    season: 2024,
    totalPoints: 95,
    races: [
      { raceId: "bahrain-2024", points: 10, position: 5 },
      { raceId: "saudi-arabia-2024", points: 12, position: 4 },
      { raceId: "abu-dhabi-2024", points: 10, position: 5 },
    ],
  },

  // Esteban Ocon
  {
    driverId: "ocon",
    season: 2022,
    totalPoints: 92,
    races: [
      { raceId: "bahrain-2022", points: 8, position: 6 },
      { raceId: "saudi-arabia-2022", points: 10, position: 5 },
      { raceId: "abu-dhabi-2022", points: 8, position: 6 },
    ],
  },
  {
    driverId: "ocon",
    season: 2023,
    totalPoints: 110,
    races: [
      { raceId: "bahrain-2023", points: 10, position: 5 },
      { raceId: "saudi-arabia-2023", points: 12, position: 4 },
      { raceId: "abu-dhabi-2023", points: 10, position: 5 },
    ],
  },
  {
    driverId: "ocon",
    season: 2024,
    totalPoints: 130,
    races: [
      { raceId: "bahrain-2024", points: 12, position: 4 },
      { raceId: "saudi-arabia-2024", points: 15, position: 3 },
      { raceId: "abu-dhabi-2024", points: 12, position: 4 },
    ],
  },

  // Pierre Gasly
  {
    driverId: "gasly",
    season: 2022,
    totalPoints: 93,
    races: [
      { raceId: "bahrain-2022", points: 10, position: 5 },
      { raceId: "saudi-arabia-2022", points: 12, position: 4 },
      { raceId: "abu-dhabi-2022", points: 8, position: 6 },
    ],
  },
  {
    driverId: "gasly",
    season: 2023,
    totalPoints: 105,
    races: [
      { raceId: "bahrain-2023", points: 8, position: 6 },
      { raceId: "saudi-arabia-2023", points: 10, position: 5 },
      { raceId: "abu-dhabi-2023", points: 12, position: 4 },
    ],
  },
  {
    driverId: "gasly",
    season: 2024,
    totalPoints: 115,
    races: [
      { raceId: "bahrain-2024", points: 10, position: 5 },
      { raceId: "saudi-arabia-2024", points: 12, position: 4 },
      { raceId: "abu-dhabi-2024", points: 15, position: 3 },
    ],
  },

  // Valtteri Bottas
  {
    driverId: "bottas",
    season: 2022,
    totalPoints: 49,
    races: [
      { raceId: "bahrain-2022", points: 6, position: 7 },
      { raceId: "saudi-arabia-2022", points: 8, position: 6 },
      { raceId: "abu-dhabi-2022", points: 6, position: 7 },
    ],
  },
  {
    driverId: "bottas",
    season: 2023,
    totalPoints: 55,
    races: [
      { raceId: "bahrain-2023", points: 8, position: 6 },
      { raceId: "saudi-arabia-2023", points: 10, position: 5 },
      { raceId: "abu-dhabi-2023", points: 8, position: 6 },
    ],
  },
  {
    driverId: "bottas",
    season: 2024,
    totalPoints: 60,
    races: [
      { raceId: "bahrain-2024", points: 10, position: 5 },
      { raceId: "saudi-arabia-2024", points: 12, position: 4 },
      { raceId: "abu-dhabi-2024", points: 10, position: 5 },
    ],
  },

  // Guanyu Zhou
  {
    driverId: "zhou",
    season: 2022,
    totalPoints: 20,
    races: [
      { raceId: "bahrain-2022", points: 2, position: 9 },
      { raceId: "saudi-arabia-2022", points: 0, position: 15 },
      { raceId: "abu-dhabi-2022", points: 2, position: 9 },
    ],
  },
  {
    driverId: "zhou",
    season: 2023,
    totalPoints: 30,
    races: [
      { raceId: "bahrain-2023", points: 2, position: 9 },
      { raceId: "saudi-arabia-2023", points: 4, position: 8 },
      { raceId: "abu-dhabi-2023", points: 4, position: 8 },
    ],
  },
  {
    driverId: "zhou",
    season: 2024,
    totalPoints: 40,
    races: [
      { raceId: "bahrain-2024", points: 4, position: 8 },
      { raceId: "saudi-arabia-2024", points: 6, position: 7 },
      { raceId: "abu-dhabi-2024", points: 4, position: 8 },
    ],
  },

  // Alex Albon
  {
    driverId: "albon",
    season: 2022,
    totalPoints: 15,
    races: [
      { raceId: "bahrain-2022", points: 4, position: 8 },
      { raceId: "saudi-arabia-2022", points: 6, position: 7 },
      { raceId: "abu-dhabi-2022", points: 4, position: 8 },
    ],
  },
  {
    driverId: "albon",
    season: 2023,
    totalPoints: 17,
    races: [
      { raceId: "bahrain-2023", points: 6, position: 7 },
      { raceId: "saudi-arabia-2023", points: 4, position: 8 },
      { raceId: "abu-dhabi-2023", points: 6, position: 7 },
    ],
  },
  {
    driverId: "albon",
    season: 2024,
    totalPoints: 22,
    races: [
      { raceId: "bahrain-2024", points: 6, position: 7 },
      { raceId: "saudi-arabia-2024", points: 8, position: 6 },
      { raceId: "abu-dhabi-2024", points: 8, position: 6 },
    ],
  },

  // Logan Sargeant
  {
    driverId: "sargeant",
    season: 2023,
    totalPoints: 0,
    races: [
      { raceId: "bahrain-2023", points: 0, position: 16 },
      { raceId: "saudi-arabia-2023", points: 0, position: 17 },
      { raceId: "abu-dhabi-2023", points: 0, position: 16 },
    ],
  },
  {
    driverId: "sargeant",
    season: 2024,
    totalPoints: 4,
    races: [
      { raceId: "bahrain-2024", points: 1, position: 10 },
      { raceId: "saudi-arabia-2024", points: 2, position: 9 },
      { raceId: "abu-dhabi-2024", points: 1, position: 10 },
    ],
  },

  // Yuki Tsunoda
  {
    driverId: "tsunoda",
    season: 2022,
    totalPoints: 92,
    races: [
      { raceId: "bahrain-2022", points: 8, position: 6 },
      { raceId: "saudi-arabia-2022", points: 10, position: 5 },
      { raceId: "abu-dhabi-2022", points: 8, position: 6 },
    ],
  },
  {
    driverId: "tsunoda",
    season: 2023,
    totalPoints: 111,
    races: [
      { raceId: "bahrain-2023", points: 10, position: 5 },
      { raceId: "saudi-arabia-2023", points: 12, position: 4 },
      { raceId: "abu-dhabi-2023", points: 10, position: 5 },
    ],
  },
  {
    driverId: "tsunoda",
    season: 2024,
    totalPoints: 127,
    races: [
      { raceId: "bahrain-2024", points: 10, position: 5 },
      { raceId: "saudi-arabia-2024", points: 15, position: 3 },
      { raceId: "abu-dhabi-2024", points: 12, position: 4 },
    ],
  },

  // Daniel Ricciardo
  {
    driverId: "ricciardo",
    season: 2023,
    totalPoints: 15,
    races: [
      { raceId: "bahrain-2023", points: 4, position: 8 },
      { raceId: "saudi-arabia-2023", points: 6, position: 7 },
      { raceId: "abu-dhabi-2023", points: 5, position: 8 },
    ],
  },
  {
    driverId: "ricciardo",
    season: 2024,
    totalPoints: 22,
    races: [
      { raceId: "bahrain-2024", points: 6, position: 7 },
      { raceId: "saudi-arabia-2024", points: 8, position: 6 },
      { raceId: "abu-dhabi-2024", points: 8, position: 6 },
    ],
  },

  // Kevin Magnussen
  {
    driverId: "magnussen",
    season: 2022,
    totalPoints: 20,
    races: [
      { raceId: "bahrain-2022", points: 2, position: 9 },
      { raceId: "saudi-arabia-2022", points: 4, position: 8 },
      { raceId: "abu-dhabi-2022", points: 2, position: 9 },
    ],
  },
  {
    driverId: "magnussen",
    season: 2023,
    totalPoints: 18,
    races: [
      { raceId: "bahrain-2023", points: 4, position: 8 },
      { raceId: "saudi-arabia-2023", points: 6, position: 7 },
      { raceId: "abu-dhabi-2023", points: 4, position: 8 },
    ],
  },
  {
    driverId: "magnussen",
    season: 2024,
    totalPoints: 15,
    races: [
      { raceId: "bahrain-2024", points: 4, position: 8 },
      { raceId: "saudi-arabia-2024", points: 6, position: 7 },
      { raceId: "abu-dhabi-2024", points: 5, position: 8 },
    ],
  },

  // Oliver Bearman
  {
    driverId: "bearman",
    season: 2024,
    totalPoints: 5,
    races: [
      { raceId: "bahrain-2024", points: 2, position: 9 },
      { raceId: "saudi-arabia-2024", points: 3, position: 8 },
      { raceId: "abu-dhabi-2024", points: 0, position: 16 },
    ],
  },
];
export const season2023: Season = {
  year: 2023,
  races: [
    { id: "bahrain-2023", name: "Bahrain Grand Prix", date: new Date("2023-03-05"), constructorResults: [
        { constructorId: "red-bull", points: 43 },
        { constructorId: "ferrari", points: 26 },
        { constructorId: "aston-martin", points: 23 },
        { constructorId: "mercedes", points: 16 },
        { constructorId: "alpine", points: 8 },
      ] },
    { id: "saudi-arabia-2023", name: "Saudi Arabian Grand Prix", date: new Date("2023-03-19"), constructorResults: [
        { constructorId: "red-bull", points: 44 },
        { constructorId: "aston-martin", points: 15 },
        { constructorId: "mercedes", points: 18 },
        { constructorId: "ferrari", points: 12 },
        { constructorId: "alpine", points: 6 },
      ] },
    { id: "australia-2023", name: "Australian Grand Prix", date: new Date("2023-04-02"), constructorResults: [
        { constructorId: "mercedes", points: 31 },
        { constructorId: "aston-martin", points: 27 },
        { constructorId: "red-bull", points: 25 },
        { constructorId: "mclaren", points: 12 },
        { constructorId: "ferrari", points: 10 },
      ] },
    { id: "azerbaijan-2023", name: "Azerbaijan Grand Prix", date: new Date("2023-04-30"), constructorResults: [
        { constructorId: "red-bull", points: 57 },
        { constructorId: "ferrari", points: 33 },
        { constructorId: "mercedes", points: 12 },
        { constructorId: "mclaren", points: 8 },
        { constructorId: "aston-martin", points: 4 },
      ] },
    { id: "miami-2023", name: "Miami Grand Prix", date: new Date("2023-05-07"), constructorResults: [
        { constructorId: "red-bull", points: 43 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "mercedes", points: 22 },
        { constructorId: "ferrari", points: 15 },
        { constructorId: "mclaren", points: 2 },
      ] },
    { id: "monaco-2023", name: "Monaco Grand Prix", date: new Date("2023-05-28"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "alpine", points: 12 },
        { constructorId: "ferrari", points: 10 },
      ] },
    { id: "spain-2023", name: "Spanish Grand Prix", date: new Date("2023-06-04"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "mercedes", points: 18 },
        { constructorId: "ferrari", points: 15 },
        { constructorId: "mclaren", points: 12 },
        { constructorId: "alpine", points: 10 },
      ] },
    { id: "canada-2023", name: "Canadian Grand Prix", date: new Date("2023-06-18"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "alpine", points: 12 },
        { constructorId: "ferrari", points: 10 },
      ] },
    { id: "austria-2023", name: "Austrian Grand Prix", date: new Date("2023-07-02"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "ferrari", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "mclaren", points: 12 },
        { constructorId: "aston-martin", points: 10 },
      ] },
    { id: "great-britain-2023", name: "British Grand Prix", date: new Date("2023-07-09"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "mclaren", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "aston-martin", points: 12 },
        { constructorId: "alpine", points: 10 },
      ] },
    { id: "hungary-2023", name: "Hungarian Grand Prix", date: new Date("2023-07-23"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "ferrari", points: 12 },
        { constructorId: "mclaren", points: 10 },
      ] },
    { id: "belgium-2023", name: "Belgian Grand Prix", date: new Date("2023-07-30"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "ferrari", points: 15 },
        { constructorId: "mercedes", points: 12 },
        { constructorId: "mclaren", points: 10 },
      ] },
    { id: "netherlands-2023", name: "Dutch Grand Prix", date: new Date("2023-08-27"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "ferrari", points: 15 },
        { constructorId: "mercedes", points: 12 },
        { constructorId: "mclaren", points: 10 },
      ] },
    { id: "italy-2023", name: "Italian Grand Prix", date: new Date("2023-09-03"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "ferrari", points: 18 },
        { constructorId: "aston-martin", points: 15 },
        { constructorId: "mercedes", points: 12 },
        { constructorId: "mclaren", points: 10 },
      ] },
    { id: "singapore-2023", name: "Singapore Grand Prix", date: new Date("2023-09-17"), constructorResults: [
        { constructorId: "ferrari", points: 25 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "mclaren", points: 18 },
        { constructorId: "aston-martin", points: 12 },
        { constructorId: "red-bull", points: 10 },
      ] },
    { id: "japan-2023", name: "Japanese Grand Prix", date: new Date("2023-09-24"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "mclaren", points: 12 },
        { constructorId: "aston-martin", points: 10 },
        { constructorId: "alpine", points: 8 },
      ] },
    { id: "qatar-2023", name: "Qatar Grand Prix", date: new Date("2023-10-08"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "mclaren", points: 15 },
        { constructorId: "mercedes", points: 12 },
        { constructorId: "ferrari", points: 10 },
      ] },
    { id: "usa-2023", name: "United States Grand Prix", date: new Date("2023-10-22"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "mclaren", points: 18 },
        { constructorId: "ferrari", points: 15 },
        { constructorId: "mercedes", points: 12 },
        { constructorId: "aston-martin", points: 10 },
      ] },
    { id: "mexico-2023", name: "Mexico City Grand Prix", date: new Date("2023-10-29"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "mercedes", points: 18 },
        { constructorId: "ferrari", points: 15 },
        { constructorId: "aston-martin", points: 12 },
        { constructorId: "mclaren", points: 10 },
      ] },
    { id: "brazil-2023", name: "Brazilian Grand Prix", date: new Date("2023-11-05"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "aston-martin", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "mclaren", points: 12 },
        { constructorId: "ferrari", points: 10 },
      ] },
    { id: "las-vegas-2023", name: "Las Vegas Grand Prix", date: new Date("2023-11-18"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "ferrari", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "aston-martin", points: 12 },
        { constructorId: "mclaren", points: 10 },
      ] },
    { id: "abu-dhabi-2023", name: "Abu Dhabi Grand Prix", date: new Date("2023-11-26"), constructorResults: [
        { constructorId: "red-bull", points: 25 },
        { constructorId: "ferrari", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "mclaren", points: 12 },
        { constructorId: "aston-martin", points: 10 },
      ] },
  ],
};


// Mock constructor race results for 2024 season
export const season2024: Season = {
  year: 2024,
  races: [
    {
      id: "bahrain-2024",
      name: "Bahrain Grand Prix",
      date: new Date("2024-03-02"),
      constructorResults: [
        { constructorId: "red-bull", points: 44 },
        { constructorId: "ferrari", points: 27 },
        { constructorId: "mercedes", points: 16 },
        { constructorId: "mclaren", points: 10 },
        { constructorId: "alpine", points: 2 },
      ],
    },
    {
      id: "saudi-arabia-2024",
      name: "Saudi Arabian Grand Prix",
      date: new Date("2024-03-09"),
      constructorResults: [
        { constructorId: "red-bull", points: 43 },
        { constructorId: "ferrari", points: 33 },
        { constructorId: "mercedes", points: 18 },
        { constructorId: "mclaren", points: 4 },
        { constructorId: "alpine", points: 1 },
      ],
    },
    {
      id: "australia-2024",
      name: "Australian Grand Prix",
      date: new Date("2024-03-24"),
      constructorResults: [
        { constructorId: "ferrari", points: 43 },
        { constructorId: "red-bull", points: 26 },
        { constructorId: "mercedes", points: 27 },
        { constructorId: "mclaren", points: 10 },
        { constructorId: "alpine", points: 0 },
      ],
    },
    {
      id: "japan-2024",
      name: "Japanese Grand Prix",
      date: new Date("2024-04-07"),
      constructorResults: [
        { constructorId: "red-bull", points: 37 },
        { constructorId: "ferrari", points: 31 },
        { constructorId: "mclaren", points: 16 },
        { constructorId: "mercedes", points: 12 },
        { constructorId: "aston-martin", points: 2 },
      ],
    },
    {
      id: "china-2024",
      name: "Chinese Grand Prix",
      date: new Date("2024-04-21"),
      constructorResults: [
        { constructorId: "mclaren", points: 33 },
        { constructorId: "red-bull", points: 32 },
        { constructorId: "ferrari", points: 18 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "aston-martin", points: 1 },
      ],
    },
    {
      id: "miami-2024",
      name: "Miami Grand Prix",
      date: new Date("2024-05-05"),
      constructorResults: [
        { constructorId: "mclaren", points: 39 },
        { constructorId: "red-bull", points: 31 },
        { constructorId: "ferrari", points: 24 },
        { constructorId: "mercedes", points: 4 },
        { constructorId: "aston-martin", points: 0 },
      ],
    },
    {
      id: "emilia-romagna-2024",
      name: "Emilia‑Romagna Grand Prix",
      date: new Date("2024-05-19"),
      constructorResults: [
        { constructorId: "mclaren", points: 30 },
        { constructorId: "ferrari", points: 25 },
        { constructorId: "mercedes", points: 28 },
        { constructorId: "red-bull", points: 29 },
        { constructorId: "aston-martin", points: 1 },
      ],
    },
    {
      id: "monaco-2024",
      name: "Monaco Grand Prix",
      date: new Date("2024-05-26"),
      constructorResults: [
        { constructorId: "ferrari", points: 40 },
        { constructorId: "mclaren", points: 30 },
        { constructorId: "mercedes", points: 28 },
        { constructorId: "red-bull", points: 8 },
        { constructorId: "aston-martin", points: 2 },
      ],
    },
    {
      id: "canada-2024",
      name: "Canadian Grand Prix",
      date: new Date("2024-06-09"),
      constructorResults: [
        { constructorId: "red-bull", points: 31 },
        { constructorId: "mercedes", points: 45 },
        { constructorId: "ferrari", points: 21 },
        { constructorId: "mclaren", points: 27 },
        { constructorId: "alpine", points: 1 },
      ],
    },
    {
      id: "spain-2024",
      name: "Spanish Grand Prix",
      date: new Date("2024-06-23"),
      constructorResults: [
        { constructorId: "red-bull", points: 26 },
        { constructorId: "ferrari", points: 25 },
        { constructorId: "mclaren", points: 31 },
        { constructorId: "mercedes", points: 27 },
        { constructorId: "alpine", points: 2 },
      ],
    },
    {
      id: "austria-2024",
      name: "Austrian Grand Prix",
      date: new Date("2024-06-30"),
      constructorResults: [
        { constructorId: "mercedes", points: 17 },
        { constructorId: "ferrari", points: 38 },
        { constructorId: "mclaren", points: 28 },
        { constructorId: "red-bull", points: 12 },
        { constructorId: "aston-martin", points: 1 },
      ],
    },
    {
      id: "great-britain-2024",
      name: "British Grand Prix",
      date: new Date("2024-07-07"),
      constructorResults: [
        { constructorId: "mercedes", points: 27 },
        { constructorId: "mclaren", points: 40 },
        { constructorId: "ferrari", points: 20 },
        { constructorId: "red-bull", points: 18 },
        { constructorId: "aston-martin", points: 4 },
      ],
    },
    {
      id: "hungary-2024",
      name: "Hungarian Grand Prix",
      date: new Date("2024-07-21"),
      constructorResults: [
        { constructorId: "mercedes", points: 25 },
        { constructorId: "ferrari", points: 28 },
        { constructorId: "mclaren", points: 43 },
        { constructorId: "red-bull", points: 10 },
        { constructorId: "aston-martin", points: 1 },
      ],
    },
    {
      id: "belgium-2024",
      name: "Belgian Grand Prix",
      date: new Date("2024-07-28"),
      constructorResults: [
        { constructorId: "ferrari", points: 55 },
        { constructorId: "mercedes", points: 10 },
        { constructorId: "mclaren", points: 28 },
        { constructorId: "red-bull", points: 19 },
        { constructorId: "aston-martin", points: 4 },
      ],
    },
    {
      id: "netherlands-2024",
      name: "Dutch Grand Prix",
      date: new Date("2024-08-25"),
      constructorResults: [
        { constructorId: "mclaren", points: 38 },
        { constructorId: "ferrari", points: 37 },
        { constructorId: "red-bull", points: 26 },
        { constructorId: "mercedes", points: 16 },
        { constructorId: "aston-martin", points: 2 },
      ],
    },
    {
      id: "italy-2024",
      name: "Italian Grand Prix",
      date: new Date("2024-09-01"),
      constructorResults: [
        { constructorId: "ferrari", points: 33 },
        { constructorId: "mclaren", points: 34 },
        { constructorId: "red-bull", points: 12 },
        { constructorId: "mercedes", points: 17 },
        { constructorId: "aston-martin", points: 0 },
      ],
    },
    {
      id: "azerbaijan-2024",
      name: "Azerbaijan Grand Prix",
      date: new Date("2024-09-15"),
      constructorResults: [
        { constructorId: "mclaren", points: 38 },
        { constructorId: "ferrari", points: 18 },
        { constructorId: "red-bull", points: 10 },
        { constructorId: "mercedes", points: 20 },
        { constructorId: "aston-martin", points: 1 },
      ],
    },
    {
      id: "singapore-2024",
      name: "Singapore Grand Prix",
      date: new Date("2024-09-22"),
      constructorResults: [
        { constructorId: "mclaren", points: 40 },
        { constructorId: "ferrari", points: 55 },
        { constructorId: "red-bull", points: 19 },
        { constructorId: "mercedes", points: 22 },
        { constructorId: "aston-martin", points: 6 },
      ],
    },
    {
      id: "usa-2024",
      name: "United States Grand Prix",
      date: new Date("2024-10-20"),
      constructorResults: [
        { constructorId: "mercedes", points: 22 },
        { constructorId: "red-bull", points: 29 },
        { constructorId: "mclaren", points: 28 },
        { constructorId: "ferrari", points: 20 },
        { constructorId: "aston-martin", points: 1 },
      ],
    },
    {
      id: "mexico-2024",
      name: "Mexico City Grand Prix",
      date: new Date("2024-10-27"),
      constructorResults: [
        { constructorId: "ferrari", points: 27 },
        { constructorId: "red-bull", points: 32 },
        { constructorId: "mercedes", points: 15 },
        { constructorId: "mclaren", points: 25 },
        { constructorId: "aston-martin", points: 0 },
      ],
    },
    {
      id: "brazil-2024",
      name: "Brazilian Grand Prix",
      date: new Date("2024-11-03"),
      constructorResults: [
        { constructorId: "red-bull", points: 27 },
        { constructorId: "ferrari", points: 22 },
        { constructorId: "mercedes", points: 43 },
        { constructorId: "mclaren", points: 15 },
        { constructorId: "aston-martin", points: 1 },
      ],
    },
    {
      id: "las-vegas-2024",
      name: "Las Vegas Grand Prix",
      date: new Date("2024-11-23"),
      constructorResults: [
        { constructorId: "mercedes", points: 16 },
        { constructorId: "red-bull", points: 31 },
        { constructorId: "ferrari", points: 22 },
        { constructorId: "mclaren", points: 27 },
        { constructorId: "aston-martin", points: 0 },
      ],
    },
    {
      id: "qatar-2024",
      name: "Qatar Grand Prix",
      date: new Date("2024-12-01"),
      constructorResults: [
        { constructorId: "red-bull", points: 26 },
        { constructorId: "mclaren", points: 32 },
        { constructorId: "ferrari", points: 35 },
        { constructorId: "mercedes", points: 22 },
        { constructorId: "aston-martin", points: 0 },
      ],
    },
    {
      id: "abu-dhabi-2024",
      name: "Abu Dhabi Grand Prix",
      date: new Date("2024-12-08"),
      constructorResults: [
        { constructorId: "mclaren", points: 43 },
        { constructorId: "ferrari", points: 27 },
        { constructorId: "red-bull", points: 26 },
        { constructorId: "mercedes", points: 22 },
        { constructorId: "aston-martin", points: 2 },
      ],
    },
  ],
};

// Mock seasons for dropdown
export const availableSeasons = [2020, 2021, 2022, 2023, 2024];

// Utility functions
export function getDriversByTeam(teamId: string): Driver[] {
  return drivers.filter((driver) => driver.team === teamId);
}

export function getConstructorById(id: string): Constructor | undefined {
  return constructors.find((constructor) => constructor.id === id);
}

export function getDriverById(id: string): Driver | undefined {
  return drivers.find((driver) => driver.id === id);
}

export function getDriverSeasonData(
  driverId: string,
  seasons: number[],
): DriverSeasonData[] {
  return driverSeasonData.filter(
    (data) => data.driverId === driverId && seasons.includes(data.season),
  );
}

export function getConstructorSeasonData(season: number) {
  if (season === 2024) {
    return season2024;
  }
  if (season === 2023) {
    return season2023;
  }
  // For other seasons, return simplified mock data
  return {
    year: season,
    races: season2024.races.map((race, index) => ({
      ...race,
      id: `${race.name.toLowerCase().replace(/\s+/g, "-")}-${season}`,
      name: race.name,
      date: new Date(season, 2 + index, 1),
    })),
  };
}
