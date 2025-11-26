import { useParams, Link } from "react-router-dom";
import { seasonsData } from "@/data/seasonsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, User, Sparkles, Target } from "lucide-react";

const SeasonDetails = () => {
  const { year } = useParams<{ year: string }>();
  const seasonData = year ? seasonsData[year] : null;

  if (!seasonData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Season Not Found</h1>
          <Link to="/">
            <Button variant="default">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-5 w-5" />
              Back
            </Button>
          </Link>
          <h1 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            IPL {seasonData.year}
          </h1>
          <div className="w-24" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-accent/10 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 text-lg px-6 py-2 bg-accent text-accent-foreground">
            {seasonData.position}
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Season {seasonData.year}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <User className="text-accent" />
              <span className="text-muted-foreground">Captain:</span>
              <span className="font-bold text-foreground">{seasonData.captain}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary" />
              <span className="text-muted-foreground">Coach:</span>
              <span className="font-bold text-foreground">{seasonData.coach}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Highlights */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Trophy className="text-accent h-7 w-7" />
              Season Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {seasonData.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/90 text-lg"
                >
                  <Target className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Team Composition Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Batsmen */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/50 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Key Batsmen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {seasonData.keyBatsmen.map((player, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border border-border/30"
                  >
                    <span className="font-bold text-foreground text-lg">{player.name}</span>
                    <Badge variant="secondary" className="text-sm">{player.role}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bowlers */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Key Bowlers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {seasonData.keyBowlers.map((player, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border border-border/30"
                  >
                    <span className="font-bold text-foreground text-lg">{player.name}</span>
                    <Badge variant="secondary" className="text-sm">{player.role}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All-Rounders (if any) */}
          {seasonData.allRounders && seasonData.allRounders.length > 0 && (
            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">All-Rounders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {seasonData.allRounders.map((player, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border border-border/30"
                    >
                      <span className="font-bold text-foreground text-lg">{player.name}</span>
                      <Badge variant="secondary" className="text-sm">{player.role}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Wicketkeeper */}
          {seasonData.wicketkeeper && (
            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Wicketkeeper</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                  <span className="font-bold text-foreground text-lg">
                    {seasonData.wicketkeeper}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Royal Challengers Bangalore • IPL {seasonData.year}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SeasonDetails;
