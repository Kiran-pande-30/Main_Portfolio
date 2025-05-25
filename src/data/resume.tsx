import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, MapPin } from "lucide-react";

export const DATA = {
  name: "Kiran Pande",
  initials: "KP",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer | Problem Solver | Open Source Contributor",
  summary:
    "I'm Kiran Pande, a passionate technology enthusiast and a problem solver, currently pursuing a Bachelor's in Technology at VNIT Nagpur. I specialize in full-stack web development with a strong focus on C++, JavaScript, and the MERN stack. As an open-source contributor, I enjoy collaborating with others and learning from diverse projects. .I am constantly exploring innovative ways to leverage technology for impactful solutions.",
  avatarUrl: "/20241216_134956.jpg",
  skills: {
    Frontend: ["React", "Javascript"],
    Backend: ["Node.js", "Express", "Mongo DB"],
    VersionControl: ["Git", "Github"],
    Programming: ["C++", "Python", "Data Structures & Algorithms"],
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "kpande026@gmail.com",
    tel: "9146479130",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kiran-pande-30",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kiran-pande-896134226/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Kiranpande_30",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "kpande026@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Google Summer Of Code 2024",
      href: "https://summerofcode.withgoogle.com/",
      badges: [],
      location: "Remote",
      title: "Participant - Open Source Contributor",
      logoUrl: "/google.png",
      start: "Dec 23",
      end: "Apr 24",
      description: [
        "Proposed and designed a UI/UX overhaul for CircuitVerse’s homepage, Search page, and About Us page to improve accessibility, reduce clutter, and enhance user engagement.",
        "Integrated Crowdin to enable language translation via GUI, encouraging community contributions from non-coders and enhancing global accessibility.",
        "Designed a PR merge log system for the About Us page to increase transparency around open-source contributions and community involvement.",
        "Suggested and designed a modular ViewComponent system in Ruby on Rails for UI elements like cards, buttons, and modals to ensure reusable, maintainable code.",
      ],
    },
    {
      company: "Smart India Hackathon 2024",
      href: "https://www.sih.gov.in/",
      badges: [],
      location: "REC Chennai",
      title: "Finalist - Full Stack Developer",
      logoUrl: "/sih.jpg",
      start: "Sept 24",
      end: "Dec 24",
      description:[
        "Led end-to-end development of a smart logistics management system (PostMitra) selected for national finale among 150+ teams.",
        "Drove ideation and prototyping using MERN stack with real-time parcel tracking and dynamic route optimization via graph algorithms.",
        "Collaborated with India Post and railway authorities to conduct field research and validate key logistics challenges.",
        "Engineered backend with WebSockets for live data streaming; integrated ML models to predict delivery delays in train logistics.",
      ]
    },
    {
      company: "GirlScript Summer Of Code 2024",
      href: "https://gssoc.girlscript.tech/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/atomic.png",
      start: "May 24",
      end: "Aug 24",
      description:[
        "Contributed 30+ pull requests across multiple open-source repositories, addressing UI/UX bugs, component design issues, and codebase optimizations in React.js.",
        "Collaborated with maintainers and contributors via GitHub, following standard Git workflows including issue triaging and code reviews.", 
        "Recognized among the top 4% of contributors based on activity, code quality, and community involvement."],
    },
  ],
  codingProfiles: [
    {
      title: "LeetCode",
      href: "https://leetcode.com/u/kiran_117",
      logoUrl: "/leetcode.png",
      stats: [
        { label: "Problems Solved", value: 310 },
        { label: "Contest Rating", value: "1425" },
        { label: "Badges", value: "4" },
      ],
    },
    {
      title: "GitHub",
      href: "https://github.com/kiran-pande-30",
      logoUrl: "/github.png",
      stats: [
        { label: "Commits", value: "123" },
        { label: "Pull Requests", value: "67" },
        {
          label: "",
          value: "🏆 Pull Shark 🧠 Developer Program",
        },
      ],
    },
  ],

  education: [
    {
      school: "Visvesvaraya National Institute of Technology, Nagpur",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Electrical & Electronics Engineering",
      logoUrl: "/vnit.jpeg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Shopper",
      href: "",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Created a user-friendly interface with categorized product listings, secure user authentication, an admin panel for product management, and integrated Multer for efficient image uploads.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      links: [
        {
          type: "Website",
          href: "https://github.com/Kiran-pande-30/E-commerce",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shopper.png",
      video: "",
    },
    {
      title: "Pokedex",
      href: "",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "A dynamic Pokedex app that displays Pokémon details like abilities, stats, and types. Users can search by name or ID and explore listings with real-time data from PokéAPI, offering a fun experience for Pokémon fans.",
      technologies: ["React"],
      links: [
        {
          type: "Website",
          href: "https://github.com/Kiran-pande-30/Pokedox",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pokedex.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Runner-up l Smart India Hackathon 2024",
      dates: "Sept 24 - Dec 24",
      location: "Rajalaxmi Engineering College, Chennai",
      description:[
        "Finalist – Smart India Hackathon 2024: Led development of a smart logistics solution (PostMitra) using MERN stack, selected among top 1% nationwide."],
      image:
        "/sih.jpg",
      links: [],
    },
    {
      title: "Semi-Finalist l Flipkart Grid 5.0",
      dates: "2023",
      location: "Remote",
      description:[
        "For Flipkart Grid 5.0 finale, I developed a personalized product recommendation system using collaborative filtering to suggest products based on user preferences and behavior."],
      image:
        "/flipkart.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Finalist l Smart India Hackathon 2022",
      dates: "Mar 22 - Aug 22",
      location: "IIT Guwahati",
      description:[
        "Finalist – Smart India Hackathon 2022: Designed a platform enabling students, startups, and institutions to discover and book shared laboratory facilities across campuses."],
      image:
        "/sih.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Top 8 l Shark Tank - By Ecell NIT Rourkela",
      dates: "Apr 22",
      location: "Remote",
      description:[
        "Finalist – E-Cell, NIT Rourkela (Top 8): Designed Geels, a content-sharing platform for gaming reels tailored to the gaming community."],
      image:
        "/shark.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],

  positions: [
    {
      title: "Training and Placement Coordinator",
      dates: "Feb 23 - Present",
      location: "Visvesvaraya National Institute of Technology, Nagpur",
      description:[
        "Managed the official VNIT Training and Placement LinkedIn page, growing it to 940+ followers and enhancing digital visibility, alumni engagement, and recruiter outreach.", "Coordinated with company representatives, alumni, and T&P staff for seamless execution of placement drives.", "Supported 10+ Workshops, 15+ Training Sessions, and outreach campaigns to prepare students for interviews and campus placements. Also conducted 40+ mock interviews for final-year students.", "Assisted 84+ final-year students, contributing to a 76.36% on-campus placement rate for the graduating batch."],
      image:
        "/vnit.jpeg",
      links: [],
    },
    {
      title: "Public Relations Manager - VNIT Nagpur",
      dates: "Jul 22 - Apr 23",
      location: "Visvesvaraya National Institute of Technology, Nagpur",
      description:[
        "Spearheaded media partnerships by successfully onboarding Dainik Bhaskar as the title sponsor and two radio channels for live broadcasting and event promotion, significantly boosting event reach and visibility.", "Took charge of end-to-end sponsor acquisition by researching potential partners from top college events, crafting tailored outreach strategies."],
      image: "/1692677853931.jpg",
      links: [],
    },
  ],
} as const;
