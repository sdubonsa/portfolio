"use client";

import { Activity, CheckCircle, AlertTriangle, Server } from "lucide-react";

interface StatusRowProps {
  service: string;
  status: "healthy" | "degraded" | "down";
  latency: string;
  uptime: string;
}

function StatusRow({ service, status, latency, uptime }: StatusRowProps) {
  const isHealthy = status === "healthy";
  return (
    <div className="grid grid-cols-4 gap-4 py-3 border-b border-white/5 items-center font-mono text-xs md:text-sm hover:bg-white/5 transition-colors px-4">
      <div className="flex items-center gap-2 text-white/90">
        <Server className="w-4 h-4 text-white/40" />
        {service}
      </div>
      <div className="flex items-center gap-2">
        {isHealthy ? (
          <CheckCircle className="w-4 h-4 text-fintech-accent" />
        ) : (
          <AlertTriangle className="w-4 h-4 text-fintech-warning" />
        )}
        <span
          className={isHealthy ? "text-fintech-accent" : "text-fintech-warning"}
        >
          {status.toUpperCase()}
        </span>
      </div>
      <div className="text-white/60 text-right">{latency}</div>
      <div className="text-white/60 text-right">{uptime}</div>
    </div>
  );
}

export function SREStatusBoard() {
  const services: StatusRowProps[] = [
    { service: "Regulatory API Gateway", status: "healthy", latency: "24ms", uptime: "99.99%" },
    { service: "Kafka Ingestion Cluster", status: "healthy", latency: "12ms", uptime: "99.99%" },
    { service: "Validation Engine (Worker)", status: "healthy", latency: "450ms", uptime: "99.95%" },
    { service: "Filing Submission Svc", status: "degraded", latency: "1200ms", uptime: "99.90%" },
    { service: "Audit Log Archiver", status: "healthy", latency: "85ms", uptime: "99.99%" },
  ];

  return (
    <div className="w-full border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-md">
      <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-fintech-accent" />
          <h3 className="text-sm font-semibold tracking-wider uppercase text-white/80">
            System Health (Live)
          </h3>
        </div>
        <div className="flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-fintech-accent animate-pulse"></span>
           <span className="text-xs font-mono text-white/40">REAL-TIME</span>
        </div>
      </div>
      
      {/* Header */}
      <div className="grid grid-cols-4 gap-4 py-2 px-4 bg-white/5 text-xs font-mono text-white/40 border-b border-white/10 uppercase tracking-wider">
        <div>Service ID</div>
        <div>Status</div>
        <div className="text-right">Avg Latency</div>
        <div className="text-right">Availability</div>
      </div>

      {/* Rows */}
      <div className="bg-black/20">
        {services.map((svc) => (
          <StatusRow key={svc.service} {...svc} />
        ))}
      </div>
    </div>
  );
}
