import { Icons } from "@/components/icons";
<<<<<<< HEAD
import { HomeIcon, NotebookIcon, MapPin } from "lucide-react";
=======
import { HomeIcon, NotebookIcon } from "lucide-react";
>>>>>>> a23149b (Updated Portfolio)

export const DATA = {
  name: "Kiran Pande",
  initials: "KP",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer | Problem Solver | Open Source Contributor",
  summary:
<<<<<<< HEAD
    "I'm Kiran Pande, a passionate technology enthusiast and problem solver pursuing B.Tech at VNIT Nagpur. Recognized for my innovative thinking and leadership, I've excelled in national hackathons and open-source contributions. As a full-stack developer specializing in C++, JavaScript, and MERN stack, I actively contribute to open-source projects and lead initiatives in GDSC and E-Cell. I'm dedicated to creating impactful technological solutions.",
  avatarUrl: "/20241216_134956.jpg",
  skills: [
    "React",
    "Javascript",
    "Node.js",
    "Express",
    "Monogo DB",
    "Github",
    "Git",
    "Data Structures & Algorithms",
    "Python",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/travel", icon: MapPin, label: "Travel" }
  ],
=======
    "I'm Kiran Pande, a passionate technology enthusiast and a problem solver, currently pursuing a Bachelor's in Technology at VNIT Nagpur. I specialize in full-stack web development with a strong focus on C++, JavaScript, and the MERN stack. As an open-source contributor, I enjoy collaborating with others and learning from diverse projects. .I am constantly exploring innovative ways to leverage technology for impactful solutions.",
  avatarUrl: "/20241216_134956.jpg",
  skills: {
    Frontend: ["React", "Javascript"],
    Backend: ["Node.js", "Express", "Mongo DB"],
    VersionControl: ["Git", "Github"],
    Programming: ["C++", "Python", "Data Structures & Algorithms"],
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
>>>>>>> a23149b (Updated Portfolio)
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
<<<<<<< HEAD
      title: "Open Source Contributor",
      logoUrl: "/google.svg",
      start: "Dec 23",
      end: "Apr 24",
      description:
        "My first experience in open-source was with CircuitVerse, where I contributed using Ruby on Rails, Tailwind CSS, JavaScript, React.js, Node.js, MongoDB, and Git. I worked on fixing issues, optimizing code, and adding new features to improve the project. Collaborating with the team, I helped resolve merge conflicts and enhance functionality, gaining valuable problem-solving and full-stack development experience.",
    }
    ,            
=======
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
>>>>>>> a23149b (Updated Portfolio)
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
<<<<<<< HEAD
=======
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

>>>>>>> a23149b (Updated Portfolio)
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
<<<<<<< HEAD
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
      ],
=======
      technologies: ["Node.js", "Express", "MongoDB", "React"],
>>>>>>> a23149b (Updated Portfolio)
      links: [
        {
          type: "Website",
          href: "https://github.com/Kiran-pande-30/E-commerce",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shopper.png",
<<<<<<< HEAD
      video:
        "",
=======
      video: "",
>>>>>>> a23149b (Updated Portfolio)
    },
    {
      title: "Pokedex",
      href: "",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "A dynamic Pokedex app that displays Pokémon details like abilities, stats, and types. Users can search by name or ID and explore listings with real-time data from PokéAPI, offering a fun experience for Pokémon fans.",
<<<<<<< HEAD
      technologies: [
        "React",
      ],
=======
      technologies: ["React"],
>>>>>>> a23149b (Updated Portfolio)
      links: [
        {
          type: "Website",
          href: "https://github.com/Kiran-pande-30/Pokedox",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pokedex.png",
<<<<<<< HEAD
      video:
        "",
=======
      video: "",
>>>>>>> a23149b (Updated Portfolio)
    },
  ],
  hackathons: [
    {
<<<<<<< HEAD
      title: "Runner-up l Smart India Hackathon 2024",
      dates: "Sept 24 - Dec 24",
      location: "Rajalaxmi Engineering College, Chennai",
      description:
        "For Smart India Hackathon 2024, I worked on a project focused on optimizing the utilization of workshops and labs across educational institutes. The solution aimed to create a seamless platform for scheduling, resource allocation, and collaboration, ensuring better access and efficiency for all participating institutions.",
      image:
        "/sih.jpg",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Semi-Finalist l Flipkart Grid 5.0",
      dates: "2023",
      location: "Remote",
      description:
        "For Flipkart Grid 5.0 finale, I developed a personalized product recommendation system using collaborative filtering to suggest products based on user preferences and behavior.",
      image:
        "/flipkart.png",
=======
      title: "Smart India Hackathon 2024",
      dates: "Sept 24 - Dec 24",
      location: "REC Chennai",
      description:[
        "For Smart India Hackathon 2024, I worked on a project focused on optimizing the utilization of workshops and labs across educational institutes. The solution aimed to create a seamless platform for scheduling, resource allocation, and collaboration, ensuring better access and efficiency for all participating institutions.",
      ],
      image: "/sih24.png",
      links: [],
    },
    {
      title: "Flipkart Grid 5.0",
      dates: "2023",
      location: "Remote",
      description:[
        "Built a Basic Personalized Recommendation System using collaborative filtering with cosine similarity to analyze user-user and item-item interactions, ensuring relevant product suggestions and a more personalized user experience.", "Utilized Python libraries including NumPy, Pandas, Matplotlib, and Seaborn for efficient data processing, analysis, and visualization, enabling deeper insights and more accurate recommendation outputs."],
      image: "/flipkart.png",
>>>>>>> a23149b (Updated Portfolio)
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
<<<<<<< HEAD
      title: "Finalist l Smart India Hackathon 2022",
      dates: "Mar 22 - Aug 22",
      location: "IIT Guwahati",
      description:
        "Participated in Smart India Hackathon 2022, addressing a national-level problem on shared usage of workshops and labs across institutes. Developed a platform for efficient scheduling, resource sharing, and collaboration. Worked with a team to deliver an innovative solution.",
      image:
        "/sih.jpg",
=======
      title: "Smart India Hackathon 2022",
      dates: "Mar 22 - Aug 22",
      location: "IIT Guwahati",
      description:[
        "Built a web-based platform for shared lab access across institutions, enabling students to find and book nearby verified labs during the pandemic. The solution helped bridge educational gaps in lab-based learning through centralized booking and approvals.", "Designed dual portals for students and colleges, with registration, ID verification, fee management, and a mutual feedback system. Tech stack included HTML, CSS, JavaScript (frontend), Django (backend), and MySQL (database).", "Secured a Top 5 rank among 150+ teams in Smart India Hackathon 2022 under the ‘Smart Education’ theme by Startup India (DPIT), demonstrating innovation and scalability in solving national-level educational challenges." ],
      image: "/sih.jpg",
>>>>>>> a23149b (Updated Portfolio)
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
<<<<<<< HEAD
      title: "Top 8 l Shark Tank - By Ecell NIT Rourkela",
      dates: "Apr 22",
      location: "Remote",
      description:
        "Participated in Smart India Hackathon 2022, addressing a national-level problem on shared usage of workshops and labs across institutes. Developed a platform for efficient scheduling, resource sharing, and collaboration. Worked with a team to deliver an innovative solution.",
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
      description:
        "Facilitated placements for 320+ students by coordinating with recruiters, alumni, and HRs. Managed databases, organized placement drives, and guided peers in training and career development.",
      image:
        "/vnit.jpeg",
=======
      title: "Shark Tank - By Ecell NIT Rourkela",
      dates: "Apr 22",
      location: "Remote",
      description:
        "Contributed to the design and development of Geels, a short-form gaming content platform aimed at empowering underrated gamers through 45-second highlight clips, NFT integration, and community-driven features—addressing the lack of a focused space for immersive, time-efficient gaming content.",
      image: "/shark.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
  positions: [
    {
      title: "Core - Training and Placement Coordinator",
      dates: "Feb 23 - Present",
      location: "Visvesvaraya National Institute of Technology, Nagpur",
      description:[
        "Coordinated with company representatives, alumni, and T&P staff for seamless execution of placement drives.", "Supported 10+ Workshops, 15+ Training Sessions, and outreach campaigns to prepare students for interviews and campus placements. Also conducted 40+ mock interviews for students.", "Assisted 85+ final-year students, contributing to a 76+% on-campus placement rate for the graduating batch."],
      image: "/vnit.jpeg",
>>>>>>> a23149b (Updated Portfolio)
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
<<<<<<< HEAD
      title: "Outreach Lead - GDSC VNIT Nagpur",
      dates: "Aug 23 - July 24",
      location: "Visvesvaraya National Institute of Technology, Nagpur",
      description:
        "Led outreach initiatives at GDSC VNIT, fostering collaborations, increasing community engagement, and expanding the club's reach among students and professionals.",
      image:
        "/gdsc.png",
      links: [],
    },
    {
      title: "Public Relations Manager - VNIT Nagpur",
      dates: "Jul 22 - Apr 23",
      location: "Visvesvaraya National Institute of Technology, Nagpur",
      description:
        "Managed external relations for E-Cell VNIT at the flagship entrepreneurship event, Consortium, securing partnerships like Dainik Bhaskar as a media partner, collaborating with radio RJs, and handling barter deals to enhance the event's visibility.",
      image: "/1692677853931.jpg",
      links: [
      ],
    },
    
  ],
  
  travel: [
    {
      location: "Jamshedpur",
      coordinates: [22.8046, 86.2029],
      date: "2023",
      description: "Steel City of India, known for its industrial heritage and planned urban development",
      images: ["/travel/jamshedpur.jpg"],
      highlights: ["Tata Steel", "Jubilee Park", "Dimna Lake"]
    },
    {
      location: "Nanded",
      coordinates: [19.1383, 77.3210],
      date: "2023",
      description: "Visited the sacred Sikh shrine, Hazur Sahib",
      images: ["/travel/nanded.jpg"],
      highlights: ["Hazur Sahib", "Religious Heritage"]
    },
    {
      location: "Nagpur",
      coordinates: [21.1458, 79.0882],
      date: "2023",
      description: "Explored the Orange City and its cultural heritage",
      images: ["/travel/nagpur.jpg"],
      highlights: ["Deekshabhoomi", "Orange Capital"]
    },
    {
      location: "Indore",
      coordinates: [22.7196, 75.8577],
      date: "2023",
      description: "Experienced the food capital of Madhya Pradesh",
      images: ["/travel/indore.jpg"],
      highlights: ["Street Food", "Rajwada Palace"]
    },
    {
      location: "Guwahati",
      coordinates: [26.1445, 91.7362],
      date: "2023",
      description: "Gateway to the Northeast and the mighty Brahmaputra",
      images: ["/travel/guwahati.jpg"],
      highlights: ["Kamakhya Temple", "Brahmaputra River"]
    },
    {
      location: "Goa",
      coordinates: [15.2993, 74.1240],
      date: "2023",
      description: "Beach paradise with Portuguese heritage",
      images: ["/travel/goa.jpg"],
      highlights: ["Beaches", "Portuguese Architecture"]
    },
    {
      location: "Chennai",
      coordinates: [13.0827, 80.2707],
      date: "2023",
      description: "Cultural capital of South India",
      images: ["/travel/chennai.jpg"],
      highlights: ["Marina Beach", "Temples"]
    },
    {
      location: "Pondicherry",
      coordinates: [11.9139, 79.8145],
      date: "2023",
      description: "French colonial town with spiritual aura",
      images: ["/travel/pondicherry.jpg"],
      highlights: ["French Quarter", "Auroville"]
    },
    {
      location: "Mumbai",
      coordinates: [19.0760, 72.8777],
      date: "2023",
      description: "City of dreams and financial capital of India",
      images: ["/travel/mumbai.jpg"],
      highlights: ["Gateway of India", "Marine Drive"]
    },
    {
      location: "Ujjain",
      coordinates: [23.1793, 75.7849],
      date: "2023",
      description: "Ancient city of temples and spiritual significance",
      images: ["/travel/ujjain.jpg"],
      highlights: ["Mahakaleshwar Temple", "Kumbh Mela"]
    },
    {
      location: "Pench National Park",
      coordinates: [21.7751, 79.3300],
      date: "2023",
      description: "Wildlife sanctuary and inspiration for The Jungle Book",
      images: ["/travel/pench.jpg"],
      highlights: ["Tiger Reserve", "Wildlife Safari"]
    }
  ]
=======
      title: "Public Relations Manager - VNIT Nagpur",
      dates: "Jul 22 - Apr 23",
      location: "Visvesvaraya National Institute of Technology, Nagpur",
      description:[
        "Spearheaded media partnerships by successfully onboarding Dainik Bhaskar as the title sponsor and two radio channels for live broadcasting and event promotion, significantly boosting event reach and visibility.", "Took charge of end-to-end sponsor acquisition by researching potential partners from top college events, crafting tailored outreach strategies."],
      image: "/1692677853931.jpg",
      links: [],
    },
  ],
  travel: [
    {
      title: "Goa, India",
      description:
        "Chilled on beaches, explored forts, and enjoyed local seafood.",
      dates: "April 2025",
      tags: ["Beaches", "Food", "Relaxing"],
      image: "/goa.jpg",
    },
    {
      title: "Mumbai, MK",
      description:
        "Biked through mountains, visited monasteries, and saw Pangong Lake.",
      dates: "Jan 2025",
      tags: ["Mountains", "Adventure", "Peace"],
      image: "/mumbai.jpg",
    },
    {
      title: "Pudducherry, India",
      description:
        "Biked through mountains, visited monasteries, and saw Pangong Lake.",
      dates: "Dec 2024",
      tags: ["Mountains", "Adventure", "Peace"],
      image: "/puducherry.jpg",
    },
    {
      title: "Pachmarhi, India",
      description:
        "Biked through mountains, visited monasteries, and saw Pangong Lake.",
      dates: "Jan 2024",
      tags: ["Mountains", "Adventure", "Peace"],
      image: "/puducherry.jpg",
    },
  ],
>>>>>>> a23149b (Updated Portfolio)
} as const;
