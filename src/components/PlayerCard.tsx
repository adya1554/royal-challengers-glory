interface PlayerCardProps {
  name: string;
  role: string;
  years: string;
}

export const PlayerCard = ({ name, role, years }: PlayerCardProps) => {
  return (
    <div className="p-5 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 border border-border/40 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <h3 className="font-bold text-xl text-foreground mb-1">{name}</h3>
      <p className="text-accent text-sm font-medium mb-1">{role}</p>
      <p className="text-muted-foreground text-sm">{years}</p>
    </div>
  );
};
