export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "ML" | "Web" | "Data" | "Mobile" | "Game" | "Tools" | "IoT";
  github?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Clinician Portal",
    description:
      "Django REST API for neuromuscular dynamics clinician annotations. Multi-database architecture with PostgreSQL and MongoDB, deployed on Azure with clinical-grade data management.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "MongoDB", "Azure"],
    category: "Web",
    github: "https://github.com/armand-hoxha25/clinician_portal",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "NMD ACL ML",
    description:
      "PyTorch ML pipeline for clinical neuromuscular data analysis. End-to-end ETL from S3/MongoDB, model training, and evaluation for ACL injury prediction research.",
    tags: ["Python", "PyTorch", "AWS S3", "MongoDB", "Jupyter"],
    category: "ML",
    github: "https://github.com/armand-hoxha25/NMD_ACL_ML",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "IMU App",
    description:
      "Flutter mobile application for real-time IMU sensor data capture and visualization. Cross-platform inertial measurement unit interface.",
    tags: ["Dart", "Flutter", "Mobile", "Sensors"],
    category: "Mobile",
    github: "https://github.com/armand-hoxha25/imu_app",
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
  {
    title: "Wobble Board",
    description:
      "Full-stack clinical web app for an 8-week balance and stability rehabilitation study. Features participant session tracking, coordinator dashboards, S3 video delivery, and randomized exercise scheduling. Deployed on Azure.",
    tags: ["Django", "React", "TypeScript", "PostgreSQL", "Azure", "AWS S3", "DRF"],
    category: "Web",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "3T Toy",
    description:
      "Raspberry Pi IoT toy that uses real-time face detection to activate and engage infants during tummy time, enhancing motor development. Auto-syncs from GitHub on boot with Wi-Fi hotspot support for wireless control.",
    tags: ["Python", "Raspberry Pi", "Computer Vision", "IoT", "OpenCV"],
    category: "IoT",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Shackle Cellar",
    description:
      "2D platformer built in Godot 4.2 with tight movement mechanics — coyote time jumps, charge-based super jumps, and a dash with ghost trail effects. Features multiple levels, spike traps, moving platforms, and a persistent save system tracking deaths and completion times.",
    tags: ["Godot", "GDScript", "2D", "Platformer", "Game Dev"],
    category: "Game",
    gradient: "from-violet-500/20 to-rose-500/20",
  },
];
