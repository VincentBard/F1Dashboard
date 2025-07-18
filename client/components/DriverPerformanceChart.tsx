import { useState } from "react";
import {
  LineChart,
  Line,
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
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  drivers,
  getDriverSeasonData,
  getConstructorById,
  getDriverById,
} from "@/data/f1Data";

export function DriverPerformanceChart() {
  const { t, language } = useLanguage();
  const [selectedDriverId, setSelectedDriverId] = useState("verstappen");
  const [selectedSeasons, setSelectedSeasons] = useState([
    2020, 2021, 2022, 2023, 2024,
  ]);

  const driverData = getDriverSeasonData(selectedDriverId, selectedSeasons);
  const selectedDriver = getDriverById(selectedDriverId);
  const constructor = selectedDriver
    ? getConstructorById(selectedDriver.team)
    : null;

  const chartData = driverData.map((data) => ({
    season: data.season.toString(),
    points: data.totalPoints,
    year: data.season,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-3 shadow-md">
          <p className="text-sm font-medium">{`${t("common.season")} ${label}`}</p>
          <p className="text-sm text-primary">
            {`${payload[0].value} ${t("common.points")}`}
          </p>
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
            {t("driver.chart.title")}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {t("driver.chart.description")}
          </p>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              {t("driver.chart.selectDriver")}
            </label>
            <Select
              value={selectedDriverId}
              onValueChange={setSelectedDriverId}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {drivers.map((driver) => {
                  const driverConstructor = getConstructorById(driver.team);
                  return (
                    <SelectItem key={driver.id} value={driver.id}>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full shrink-0"
                          style={{
                            backgroundColor: driverConstructor?.color,
                          }}
                        />
                        <span className="truncate">{driver.name}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {selectedDriver && constructor && (
            <div className="flex items-center gap-2 flex-wrap">
              <Badge
                variant="secondary"
                className="flex items-center gap-1 text-xs"
                style={{
                  backgroundColor: `${constructor.color}20`,
                  borderColor: constructor.color,
                  color: constructor.color,
                }}
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: constructor.color }}
                />
                {constructor.name}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {selectedDriver.nationality}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="season"
                className="text-xs"
                tick={{ fontSize: 11 }}
              />
              <YAxis
                className="text-xs"
                tick={{ fontSize: 11 }}
                label={{
                  value: t("driver.chart.yAxisLabel"),
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: "11px" },
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="points"
                stroke={constructor?.color || "#DC2626"}
                strokeWidth={3}
                dot={{
                  fill: constructor?.color || "#DC2626",
                  strokeWidth: 2,
                  r: 5,
                }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {chartData.length === 0 && (
          <div className="flex h-64 md:h-80 items-center justify-center text-muted-foreground">
            {t("common.noData")}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
