export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  role: string;
  // Make techStack optional or ensure all have it
  techStack: string[];
  metrics: { label: string; value: string }[];
  content: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "finra-u4-u5",
    title: "FINRA U4/U5 Automated Filing System",
    summary:
      "Precision-engineered distributed system for automating the full lifecycle of FINRA U4 (Uniform Application) and U5 (Termination) filings. Replaced high-risk manual workflows with event-driven precision.",
    role: "Lead Engineer",
    techStack: [".NET Core", "Kafka", "AWS", "SQL Server"],
    metrics: [
      { label: "Filing Latency", value: "-84%" },
      { label: "Submission Error", value: "0%" },
      { label: "Throughput", value: "5k/day" },
    ],
    content: `
## The Challenge
Managing the registration and termination of financial advisors (U4/U5) is a critical regulatory function. The legacy process relied on manual data entry and batch processing, leading to submission delays and potential fines for non-compliance within the 30-day filing window.

## The Solution
Architected a real-time event ingestion pipeline using **Apache Kafka** to capture HR status changes immediately.
- **Microservices Architecture:** Decoupled the validation logic from the submission gateway using .NET Core workers.
- **Immutable Audit Log:** Implemented a write-only ledger for every status change, ensuring 100% traceability for auditors.
- **Resilience:** Designed for active-active multi-region failover to prevent downtime during critical filing periods.
    `,
  },
  {
    id: "adv2b-automation",
    title: "ADV2B Brochure Delivery Automation",
    summary:
      "Automated the generation and distribution of ADV2B regulatory brochures to millions of client accounts, ensuring compliance with SEC disclosure rules.",
    role: "Backend Developer",
    techStack: [".NET Core", "Python", "MongoDB", "SendGrid"],
    metrics: [
      { label: "Delivery Rate", value: "99.9%" },
      { label: "Gen Time", value: "-60%" },
      { label: "Cost Savings", value: "$45k/yr" },
    ],
    content: `
## The Challenge
SEC Rule 204-3 requires advisors to deliver messy brochure supplements (Part 2B) to clients. The previous vendor solution was costly, slow, and lacked integration with LPL's internal client document repository.

## The Solution
Built an internal high-throughput document generation engine.
- **Dynamic PDF Generation:** Utilized Python scripts orchestrated by .NET workers to dynamically assemble brochures based on advisor capabilities.
- **Smart Delivery:** Integrated with internal document centers to ensure verifiable delivery (read receipts) rather than just "best effort" email.
- **Compliance Tracking:** Real-time dashboards showing delivery penetration rates across the entire client base.
    `,
  },
  {
    id: "sre-dynatrace",
    title: "Observability Standardization & Dynatrace Dashboards",
    summary:
      "Established the 'SRE Gold Standard' for application monitoring at LPL. Standardized Dynatrace implementation across the SRC domain to reduce MTTR and improve system visibility.",
    role: "SRE Champion",
    techStack: ["Dynatrace", "Terraform", "Python", "Bash"],
    metrics: [
      { label: "MTTR", value: "-45%" },
      { label: "Alert Noise", value: "-70%" },
      { label: "Adoption", value: "100%" },
    ],
    content: `
## The Challenge
The Supervision, Risk, and Compliance (SRC) domain suffered from fragmented monitoring. Alert fatigue was high due to un-tuned thresholds, and "black box" services made root cause analysis slow during outages.

## The Solution
Led the initiative to standardize observability using **Dynatrace**.
- **Dashboard Templates:** Created reusable "Golden Signal" dashboard templates (Latency, Traffic, Errors, Saturation) for all .NET services.
- **Automated Alerting:** Used Terraform to provision alerting rules alongside infrastructure, ensuring every new service launched with SRE-approved monitoring.
- **Synthetic Monitoring:** Implemented complex synthetic transactions to simulate advisor workflows, detecting issues before they impacted users.
    `,
  },
];
