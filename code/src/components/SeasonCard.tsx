import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface SeasonCardProps {
  year: string;
  captain: string;
  position: string;
}

export const SeasonCard = ({ year, captain, position }: SeasonCardProps) => {
  return (
    <Link to={`/season/${year}`}>
      <Card className="group h-full bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] cursor-pointer">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {year}
            </h3>
            <ArrowRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Captain</p>
              <p className="font-bold text-foreground">{captain}</p>
            </div>
            
            <Badge 
              variant={position.includes("Runners-Up") || position.includes("Playoffs") ? "default" : "secondary"}
              className="w-full justify-center py-1"
            >
              {position}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
