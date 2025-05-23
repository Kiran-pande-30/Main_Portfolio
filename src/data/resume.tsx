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
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
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
        "Led a 5-member team to the National Finale of SIH 2024, designing a smart logistics management system for India Post.",
        "Spearheaded the shortlisting and ideation of two complex problem statements — Rozgar Setu (job-skill mapping) and PostMitra; the latter was selected from over 150+ entries for final prototype development.",
        "Architected and developed the PostMitra prototype using the MERN stack, integrating dynamic route optimization with graph theory and real-time parcel tracking via WebSockets",
        "Implemented ML models to predict delays in train logistics, improving delivery time estimates and system reliability.",
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
      description:
        "Actively contributed to open-source projects, successfully merging ~30 Pull Requests. Worked with React.js and JavaScript to resolve frontend issues. Ranked among the top 100 contributors and in the top 4% of active contributors within the cohort.",
    },
  ],
  codingProfiles: [
    {
      title: "LeetCode",
      href: "https://leetcode.com/u/kiran_117",
      logoUrl: "/leetcode.png",
      stats: [
        { label: "Problems Solved", value: 306 },
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
        "For Smart India Hackathon 2024, I worked on a project focused on optimizing the utilization of workshops and labs across educational institutes. The solution aimed to create a seamless platform for scheduling, resource allocation, and collaboration, ensuring better access and efficiency for all participating institutions."],
      image:
        "/sih.jpg",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
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
        "Participated in Smart India Hackathon 2022, addressing a national-level problem on shared usage of workshops and labs across institutes. Developed a platform for efficient scheduling, resource sharing, and collaboration. Worked with a team to deliver an innovative solution."],
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
        "Participated in Smart India Hackathon 2022, addressing a national-level problem on shared usage of workshops and labs across institutes. Developed a platform for efficient scheduling, resource sharing, and collaboration. Worked with a team to deliver an innovative solution."],
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
        "Facilitated placements for 320+ students by coordinating with recruiters, alumni, and HRs. Managed databases, organized placement drives, and guided peers in training and career development."],
      image:
        "/vnit.jpeg",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
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
