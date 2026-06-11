import { Hero } from "../components/sections/home/Hero";
import { TargetCustomers } from "../components/sections/home/TargetCustomers";
import { BusinessChallenges } from "../components/sections/home/BusinessChallenges";
import { SolutionOverview } from "../components/sections/home/SolutionOverview";
import { CoreFeatures } from "../components/sections/home/CoreFeatures";
import { AdvancedFeatures } from "../components/sections/home/AdvancedFeatures";
// Replace the old AnalyticsDashboard with this new one:
import { DashboardOverview } from "../components/sections/home/DashboardOverview"; 
import { Security } from "../components/sections/home/Security";
import { CompetitiveAdvantage } from "../components/sections/home/CompetitiveAdvantage";
import { Pricing } from "../components/sections/home/Pricing";
import { FinalCTA } from "../components/sections/home/FinalCTA";

export function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hook & Audience */}
      <Hero />
      <TargetCustomers />

      {/* 2. Problem & Solution */}
      <BusinessChallenges />
      <SolutionOverview />
      <CoreFeatures />

      {/* 3. Deep Dive & Trust */}
      <AdvancedFeatures />
      {/* Update this component here */}
      <DashboardOverview />
      <Security />

      {/* 4. Differentiation, Cost, & Action */}
      <CompetitiveAdvantage />
      <Pricing />
      <FinalCTA />
    </main>
  );
}