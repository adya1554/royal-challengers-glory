interface TimelineItemProps {
  year: string;
  name: string;
  details?: string;
}

export const TimelineItem = ({ year, name, details }: TimelineItemProps) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 border border-border/30 hover:border-primary/30">
      <div className="flex-shrink-0 w-20 font-bold text-accent text-lg">{year}</div>
      <div className="flex-1">
        <div className="font-semibold text-foreground text-lg">{name}</div>
        {details && <div className="text-muted-foreground text-sm mt-1">{details}</div>}
      </div>
    </div>
  );
};
