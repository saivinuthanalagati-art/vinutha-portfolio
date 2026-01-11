export type Project = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
  };
  details: {
    problem: string;
    approach: string[];
    architecture: string[];
    challenges: string[];
    results: string[];
  };
  media?: {
    cover?: string;     
    screens?: string[]; 
  };
};

export const projects: Project[] = [
  {
    id: "pulsestream",
    title: "PulseStream",
    subtitle: "Real-time signal processing engine + dashboard for observability.",
    tags: ["C++", "Concurrency", "React", "Node", "Metrics", "WebSockets"],
    highlights: [
      "Built a low-latency event processing engine with structured pipeline stages.",
      "Live dashboard to visualize throughput + health metrics.",
      "Designed for clarity: clean UI, fast interactions, and readable telemetry.",
    ],
    links: {
      github: "https://github.com/saivinuthanalagati-art/pulsestream",
      demo: "",
    },
    media: {
      cover: "/pulsestream.png",

    },
    details: {
      problem: "Need a fast, observable real-time processing system that feels like an internal tool.",
      approach: [
        "Defined event schemas + pipeline stages for predictable processing.",
        "Exposed metrics for throughput, latency, and error rates.",
        "Built a dashboard that feels responsive and recruiter-readable.",
      ],
      architecture: [
        "C++ engine processes events and shows metrics",
        "Node service layer for APIs or real-time transport",
        "React dashboard for visualization and drill-down",
      ],
      challenges: [
        "Keeping performance stable under load (backpressure + batching)",
        "Designing UI states that stay readable in live mode",
      ],
      results: [
        "Low-latency streaming pipeline with clear observability story",
        "Demo-ready dashboard that looks like a real internal platform",
      ],
    },
  },

  {
    id: "fraudstream",
    title: "FraudStream",
    subtitle: "Streaming fraud detection pipeline (ingest → score → persist → dashboard).",
    tags: ["Kafka/Redpanda", "Node", "Python", "Postgres", "Docker", "Real-time"],
    highlights: [
      "End-to-end streaming pipeline with event ingestion and scoring workers.",
      "Persisted outcomes to Postgres for investigation and analytics.",
      "Containerized stack for reproducible demos and clean setup.",
    ],
    links: {
      github: "https://github.com/saivinuthanalagati-art/fraudstream",
      demo: "",
    },
    media: {
      cover: "/fraudstream.jpg",

    },
    details: {
      problem: "Need a realistic fraud pipeline that demonstrates real-time architecture and debugging skill.",
      approach: [
        "Modeled transaction events and added a scoring step (service/worker).",
        "Stored decisions and metadata for traceability.",
        "Used Docker Compose to spin up infra locally.",
      ],
      architecture: [
        "Redpanda/Kafka topic for transactions",
        "Node/Python workers consume → score → write to Postgres",
        "Dashboard queries + displays live data",
      ],
      challenges: [
        "Local infra reliability (ports, startup order, retries)",
        "Balancing realism with demo simplicity",
      ],
      results: [
        "Clear recruiter story: streaming architecture + data persistence + UI tool",
        "Multiple opens to fliter and understand the data",
      ],
    },
  },

  {
    id: "ledgerly",
    title: "Ledgerly",
    subtitle: "Personal finance app with clean UX and exportable data.",
    tags: ["Flutter", "Firebase", "Auth", "Firestore", "Mobile", "UX"],
    highlights: [
      "Built a polished finance workflow with readable UI states.",
      "Firebase Auth + Firestore integration for real usage patterns.",
      "Export-ready data flow (great for ‘product thinking’ signal).",
    ],
    links: {
      github: "https://github.com/saivinuthanalagati-art/ledgerly",
      demo: "",
    },
    media: {
      cover: "/Ledgerly.png",

    },
    details: {
      problem: "Budgeting apps often feel cluttered : needed a clean, fast experience.",
      approach: [
        "Designed simple flows (add, track, remind, export).",
        "Kept UI consistent and easy to scan (categories, states).",
        "Used Firebase for auth + persistence.",
      ],
      architecture: [
        "Flutter UI + state management",
        "Firebase Auth + Firestore backend",
      ],
      challenges: [
        "Avoiding UI complexity as features grow",
        "Keeping data model flexible for future categories/export",
      ],
      results: [
        "A app that looks and feels production-grade",
        "Strong signal for product + UX + full-stack capability",
      ],
    },
  },

  {
    id: "betterbite",
    title: "BetterBite",
    subtitle: "Nutrition-focused web app built for clarity and usability.",
    tags: ["JavaScript", "HTML", "CSS", "Web", "Nutrition UI"],
    highlights: [
      "Built simple, readable nutrition UI that’s easy to demo.",
      "Focused on usability and information clarity.",
      "Clean front-end structure for fast iteration.",
    ],
    links: {
      github: "https://github.com/saivinuthanalagati-art/betterbite",
      demo: "",
    },
    media: {
      cover: "BetterBite.jpg"
    },
    details: {
      problem: "Nutrition apps can overwhelm users — needed clean presentation and smooth navigation.",
      approach: [
        "Structured UI around scan-friendly sections.",
        "Kept layout consistent and lightweight.",
      ],
      architecture: [
        "Static web UI (HTML/CSS/JS)",
        "Expandable design for APIs later (recipes/macros/etc.)",
      ],
      challenges: [
        "Keeping UI minimal but informative",
      ],
      results: [
        "Demo-ready front-end project with strong UI clarity",
      ],
    },
  },
];
