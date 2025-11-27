import { DataCard } from "@/components/DataCard";
import { TimelineItem } from "@/components/TimelineItem";
import { PlayerCard } from "@/components/PlayerCard";
import { SeasonCard } from "@/components/SeasonCard";
import { Trophy, Crown, Users, Flame, Calendar } from "lucide-react";
import heroImage from "@/assets/rcb-hero.jpg";
import { seasonsData } from "@/data/seasonsData";

const Index = () => {
  const owners = [
    { year: "2008-Present", name: "United Spirits Ltd", details: "Owned by Diageo (Vijay Mallya until 2016)" },
  ];

  const captains = [
    { year: "2008", name: "Rahul Dravid" },
    { year: "2009-2010", name: "Anil Kumble" },
    { year: "2011-2012", name: "Daniel Vettori" },
    { year: "2013-2017", name: "Virat Kohli" },
    { year: "2018", name: "Virat Kohli" },
    { year: "2019-2021", name: "Virat Kohli" },
    { year: "2022-2024", name: "Faf du Plessis" },
  ];

  const starPlayers = [
    { name: "Virat Kohli", role: "Batsman", years: "2008-Present" },
    { name: "AB de Villiers", role: "Batsman/Wicketkeeper", years: "2011-2021" },
    { name: "Chris Gayle", role: "Batsman", years: "2011-2017" },
    { name: "Rahul Dravid", role: "Batsman", years: "2008-2010" },
    { name: "Glenn Maxwell", role: "All-rounder", years: "2021-Present" },
    { name: "Faf du Plessis", role: "Batsman", years: "2022-Present" },
  ];

  const legendaryBowlers = [
    { name: "Anil Kumble", role: "Leg Spinner", years: "2008-2010" },
    { name: "Zaheer Khan", role: "Fast Bowler", years: "2008-2010" },
    { name: "Yuzvendra Chahal", role: "Leg Spinner", years: "2014-2021" },
    { name: "Dale Steyn", role: "Fast Bowler", years: "2008-2010" },
    { name: "Mitchell Starc", role: "Fast Bowler", years: "2014-2015" },
    { name: "Mohammed Siraj", role: "Fast Bowler", years: "2018-Present" },
    { name: "Harshal Patel", role: "Medium Pacer", years: "2021-2023" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            ROYAL CHALLENGERS
          </h1>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            BANGALORE
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            A Legacy of Excellence • 2008 - 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Seasons Overview */}
        <section>
          <DataCard title="IPL Seasons (2008-2024)" icon={<Calendar className="w-8 h-8 text-accent" />}>
            <p className="text-muted-foreground mb-6 text-lg">
              Select a season to explore team details such as captain, coach, star players, and season highlights.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.values(seasonsData).map((season) => (
                <SeasonCard
                  key={season.year}
                  year={season.year}
                  captain={season.captain}
                  position={season.position || "N/A"}
                />
              ))}
            </div>
          </DataCard>
        </section>
        {/* Owners Section */}
        <section>
          <DataCard title="Ownership" icon={<Crown className="w-8 h-8 text-accent" />}>
            <div className="space-y-3">
              {owners.map((owner, index) => (
                <TimelineItem
                  key={index}
                  year={owner.year}
                  name={owner.name}
                  details={owner.details}
                />
              ))}
            </div>
          </DataCard>
        </section>

        {/* Captains Section */}
        <section>
          <DataCard title="Captains Through The Years" icon={<Trophy className="w-8 h-8 text-primary" />}>
            <div className="space-y-3">
              {captains.map((captain, index) => (
                <TimelineItem
                  key={index}
                  year={captain.year}
                  name={captain.name}
                />
              ))}
            </div>
          </DataCard>
        </section>

        {/* Star Players Section */}
        <section>
          <DataCard title="Star Players" icon={<Users className="w-8 h-8 text-accent" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starPlayers.map((player, index) => (
                <PlayerCard
                  key={index}
                  name={player.name}
                  role={player.role}
                  years={player.years}
                />
              ))}
            </div>
          </DataCard>
        </section>

        {/* Legendary Bowlers Section */}
        <section className="pb-16">
          <DataCard title="Legendary Bowlers" icon={<Flame className="w-8 h-8 text-primary" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legendaryBowlers.map((bowler, index) => (
                <PlayerCard
                  key={index}
                  name={bowler.name}
                  role={bowler.role}
                  years={bowler.years}
                />
              ))}
            </div>
          </DataCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Ee Sala Cup Namde 🏆 | Play Bold | Royal Challengers Bangalore
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
