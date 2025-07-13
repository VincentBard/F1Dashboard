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
  { id: "sainz", name: "Carlos Sainz", team: "ferrari", nationality: "Spain" },
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
];

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
