import { DashboardHeader } from "@/components/DashboardHeader";
import { DriverPerformanceChart } from "@/components/DriverPerformanceChart";
import { ConstructorPointsChart } from "@/components/ConstructorPointsChart";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:gap-8 xl:grid-cols-2">
          <div className="min-h-0">
            <DriverPerformanceChart />
          </div>

          <div className="min-h-0">
            <ConstructorPointsChart />
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Interactive F1 Statistics Dashboard •
            <span className="ml-1">Built with modern web technologies</span>
          </p>
        </div>
      </main>
    </div>
  );
}
