import { ReactNode } from "react";

export default function HomeCard({ title, value, children}: { title: string, value: string, children: ReactNode}) {
  return (
    <div className="stat shadow">
      <div className="stat-figure text-primary">
        {children}
      </div>
      <div className="stat-title text-lg">{title}</div>
      <div className="stat-value text-primary">{value}</div>
      
    </div>
  );
}
