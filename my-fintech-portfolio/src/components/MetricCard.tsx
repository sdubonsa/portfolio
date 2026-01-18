import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  status?: "success" | "warning" | "neutral";
}

export function MetricCard({
  label,
  value,
  trend,
  status = "success",
}: MetricCardProps) {
  const statusStyles =
    status === "success"
      ? "border-fintech-accent/20 bg-fintech-accent/5"
      : status === "warning"
      ? "border-fintech-warning/20 bg-fintech-warning/5"
      : "border-white/10 bg-white/5";

  const textStatusColor = 
    status === "success" ? "text-fintech-accent" 
    : status === "warning" ? "text-fintech-warning" 
    : "text-slate-400";

  return (
    <div
      className={`border p-4 rounded-lg backdrop-blur-sm ${statusStyles}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xs font-mono text-white/50 uppercase tracking-wider">
          {label}
        </h3>
        {trend && (
          <div className={textStatusColor}>
            {trend === "down" ? (
              <ArrowDown className="w-4 h-4" />
            ) : trend === "up" ? (
              <ArrowUp className="w-4 h-4" />
            ) : (
              <Minus className="w-4 h-4" />
            )}
          </div>
        )}
      </div>
      <div className={`text-2xl font-mono font-bold ${textStatusColor}`}>
        {value}
      </div>
    </div>
  );
}
