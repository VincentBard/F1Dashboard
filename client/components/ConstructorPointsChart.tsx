import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getConstructorSeasonData,
  getConstructorById,
  availableSeasons,
  constructors,
} from "@/data/f1Data";

export function ConstructorPointsChart() {
  const { t, formatDate, formatNumber, language } = useLanguage();
  const [selectedSeason, setSelectedSeason] = useState(2024);

  const seasonData = getConstructorSeasonData(selectedSeason);

  // Prepare chart data - aggregate points by constructor across all races
  const chartData = seasonData.races.map((race) => {
    const raceData: any = {
      race: race.name.replace(" Grand Prix", ""),
      fullRaceName: race.name,
      date: race.date,
    };

    // Get top 5 constructors for this race
    const topConstructors = race.constructorResults
      .sort((a, b) => b.points - a.points)
      .slice(0, 5);

    topConstructors.forEach((result) => {
      const constructor = getConstructorById(result.constructorId);
      if (constructor) {
        raceData[constructor.name] = result.points;
      }
    });

    return raceData;
  });

  // Get unique constructors for legend
  const topConstructors = constructors.slice(0, 5);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const raceData = chartData.find((data) => data.race === label);
      return (
        <div className="rounded-lg border bg-background p-3 shadow-md">
          <p className="text-sm font-medium">{raceData?.fullRaceName}</p>
          <p className="text-xs text-muted-foreground mb-2">
            {raceData?.date ? formatDate(raceData.date) : ""}
          </p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm">
                {entry.dataKey}: {formatNumber(entry.value)}{" "}
                {t("constructor.chart.tooltipPoints")}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="h-full">
      <CardHeader className="space-y-4 pb-4">
        <div className="space-y-2">
          <CardTitle className="text-lg md:text-xl font-bold">
            {t("constructor.chart.title")}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {t("constructor.chart.description")}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            {t("constructor.chart.selectSeason")}
          </label>
          <Select
            value={selectedSeason.toString()}
            onValueChange={(value) => setSelectedSeason(parseInt(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {availableSeasons.map((season) => (
                <SelectItem key={season} value={season.toString()}>
                  {season}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="race"
                className="text-xs"
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                className="text-xs"
                tick={{ fontSize: 12 }}
                label={{
                  value: t("constructor.chart.yAxisLabel"),
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: "12px" },
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
              {topConstructors.map((constructor) => (
                <Bar
                  key={constructor.id}
                  dataKey={constructor.name}
                  stackId="points"
                  fill={constructor.color}
                  radius={[2, 2, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {chartData.length === 0 && (
          <div className="flex h-80 items-center justify-center text-muted-foreground">
            {t("common.noData")}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
