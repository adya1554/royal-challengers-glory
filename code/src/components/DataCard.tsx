import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface DataCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const DataCard = ({ title, icon, children }: DataCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          {icon}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
