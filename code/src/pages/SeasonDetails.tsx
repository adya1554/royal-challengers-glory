import { useParams, Link } from "react-router-dom";
import { seasonsData } from "@/data/seasonsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, Trophy, User, Sparkles, Target, MapPin, 
  TrendingUp, TrendingDown, Award, Users, Percent 
} from "lucide-react";

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

  const winPercentage = seasonData.matchesPlayed && seasonData.matchesWon
    ? ((seasonData.matchesWon / seasonData.matchesPlayed) * 100).toFixed(1)
    : null;

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
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            IPL {seasonData.year}
          </h1>
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-accent/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 text-base md:text-lg px-6 py-2 bg-accent text-accent-foreground">
            {seasonData.position}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground">
            Season {seasonData.year}
          </h2>
          
          {/* Leadership & Stadium Info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
            <div className="flex items-center justify-center gap-2 bg-card/50 rounded-lg p-4 border border-border/50">
              <User className="text-accent h-5 w-5" />
              <div className="text-left">
                <span className="text-xs text-muted-foreground block">Captain</span>
                <span className="font-bold text-foreground">{seasonData.captain}</span>
              </div>
            </div>
            
            {seasonData.viceCaptain && (
              <div className="flex items-center justify-center gap-2 bg-card/50 rounded-lg p-4 border border-border/50">
                <Users className="text-primary h-5 w-5" />
                <div className="text-left">
                  <span className="text-xs text-muted-foreground block">Vice-Captain</span>
                  <span className="font-bold text-foreground">{seasonData.viceCaptain}</span>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-center gap-2 bg-card/50 rounded-lg p-4 border border-border/50">
              <Sparkles className="text-accent h-5 w-5" />
              <div className="text-left">
                <span className="text-xs text-muted-foreground block">Coach</span>
                <span className="font-bold text-foreground">{seasonData.coach}</span>
              </div>
            </div>
          </div>

          {/* Stadium */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{seasonData.homeStadium}</span>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      {seasonData.matchesPlayed && (
        <section className="container mx-auto px-4 -mt-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-black text-primary mb-1">{seasonData.matchesPlayed}</div>
                <div className="text-sm text-muted-foreground">Matches Played</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card to-card/50 border-accent/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-black text-accent mb-1">{seasonData.matchesWon}</div>
                <div className="text-sm text-muted-foreground">Matches Won</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card to-card/50 border-destructive/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-black text-destructive mb-1">{seasonData.matchesLost}</div>
                <div className="text-sm text-muted-foreground">Matches Lost</div>
              </CardContent>
            </Card>
            
            {winPercentage && (
              <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-black text-foreground mb-1 flex items-center justify-center gap-1">
                    {winPercentage}
                    <Percent className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-muted-foreground">Win Rate</div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Content */}
      <main className="container mx-auto px-4 pb-12 space-y-12">
        {/* Top Performers */}
        {(seasonData.topRunScorer || seasonData.topWicketTaker || seasonData.bestPerformer) && (
          <div className="grid md:grid-cols-3 gap-6">
            {seasonData.topRunScorer && (
              <Card className="bg-gradient-to-br from-accent/20 to-card border-accent/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingUp className="text-accent h-6 w-6" />
                    Top Run Scorer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-foreground mb-1">
                    {seasonData.topRunScorer.name}
                  </div>
                  <div className="text-4xl font-black text-accent mb-2">
                    {seasonData.topRunScorer.runs}
                  </div>
                  {seasonData.topRunScorer.average && (
                    <div className="text-sm text-muted-foreground">
                      Average: {seasonData.topRunScorer.average}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {seasonData.topWicketTaker && (
              <Card className="bg-gradient-to-br from-primary/20 to-card border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingDown className="text-primary h-6 w-6" />
                    Top Wicket Taker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-foreground mb-1">
                    {seasonData.topWicketTaker.name}
                  </div>
                  <div className="text-4xl font-black text-primary mb-2">
                    {seasonData.topWicketTaker.wickets}
                  </div>
                  {seasonData.topWicketTaker.economy && (
                    <div className="text-sm text-muted-foreground">
                      Economy: {seasonData.topWicketTaker.economy}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {seasonData.bestPerformer && (
              <Card className="bg-gradient-to-br from-accent/20 to-card border-accent/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Award className="text-accent h-6 w-6" />
                    Best Performer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-foreground pt-6">
                    {seasonData.bestPerformer}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

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
                  className="flex items-start gap-3 text-foreground/90 text-base md:text-lg"
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
              <div className="space-y-3">
                {seasonData.keyBatsmen.map((player, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border border-border/30"
                  >
                    <span className="font-bold text-foreground">{player.name}</span>
                    <Badge variant="secondary" className="text-xs">{player.role}</Badge>
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
              <div className="space-y-3">
                {seasonData.keyBowlers.map((player, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border border-border/30"
                  >
                    <span className="font-bold text-foreground">{player.name}</span>
                    <Badge variant="secondary" className="text-xs">{player.role}</Badge>
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
                <div className="space-y-3">
                  {seasonData.allRounders.map((player, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border border-border/30"
                    >
                      <span className="font-bold text-foreground">{player.name}</span>
                      <Badge variant="secondary" className="text-xs">{player.role}</Badge>
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
                <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                  <span className="font-bold text-foreground">
                    {seasonData.wicketkeeper}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
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
