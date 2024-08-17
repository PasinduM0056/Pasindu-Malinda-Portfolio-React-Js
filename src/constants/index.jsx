// Import necessary React icons
import {
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGit,
  FaLinux,
  FaAws,
  FaDocker,
  FaJenkins,
  FaCircle,
  FaFilm,
  FaPlusCircle,
  FaRProject,
  FaMedium,
} from "react-icons/fa";

import {
  SiMongodb,
  SiSpringboot,
  SiTailwindcss,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";

// Import assets
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import { FaC } from "react-icons/fa6";


// Navigation Links
export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blogs", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Profile Information
export const PROFILE = {
  name: "Pasindu Malinda",
  info: "Full-Stack Developer | DevOps Enthusiast | Video Editing Aficionado | AWS Cloud Enthusiast",
};

// About Section
export const ABOUT = {
  text1:
    "I craft dynamic, responsive applications that seamlessly blend innovation with efficiency.",
  text2:
    "Hello! I'm Pasindu Malinda Ghanarathna, a full-stack developer with a passion for AWS Cloud, DevOps, and video editing. I specialize in building scalable, robust applications that not only perform well but also deliver a polished user experience. My dedication to continuous learning keeps me at the forefront of emerging technologies, enabling me to create practical and cutting-edge solutions. Outside of development, I channel my creativity into video editing, where I combine technical precision with artistic vision. Whether I'm coding a complex application or refining a video project, my commitment to excellence drives every endeavor.",
};

// Projects Section
export const PROJECTS = [
  {
    title: "E Net Education Online Examination System (OOP Project)",
    subtitle: "MVC-Architecture | Java | MySQL",
    image: image1,
    category: "Web Development",
    link: "https://github.com/PasinduM0056/E-Net-Education-Online-Examination-System-OOP-Project",
  },
  {
    title: "Restaurant Management System (IWT Project)",
    subtitle: "HTML | CSS | JavaScript | PHP",
    image: image2,
    category: "Web Development",
    link: "https://github.com/PasinduM0056/Restaurant-Management-System-IWT-Project.git",
  },
  {
    title: "SoulLift Social Media App (ITPM Project)",
    subtitle: "MongoDB | Express.js | React.js | Node.js | Chakra UI",
    image: image3,
    category: "Web Development",
    link: "https://github.com/PasinduM0056/SoulLift-Social-Media-App-ITPM",
  },
  {
    title: "Food Market Management System (ITP Project)",
    subtitle: "MongoDB | Express.js | React.js | Node.js | Bootstrap",
    image: image4,
    category: "Web Development",
    link: "https://github.com/nanayakkara09/ITP-Project",
  },
  {
    title: "Fitness Social Media Web Application (PAF Project)",
    subtitle: "Spring Boot | React.js | Tailwind CSS",
    image: image5,
    category: "Web Development",
    link: "https://github.com/PAF-IT3030/paf-assignment-2024-reg_we_03-team",
  },
  {
    title: "GitHub Docker and Jenkins CI/CD Pipeline (Non Academic)",
    subtitle: "GitHub | Docker | Jenkins",
    image: image6,
    category: "DevOps",
    link: "https://github.com/PasinduM0056/GitHub-Docker-and-Jenkins-CI-CD-Pipeline.git",
  },
  {
    title: "Chat Application with DNS Integration (NDM Project)",
    subtitle:
      "Socket Programming | Networking | Concurrent Programming | Network Programming | DNS Management | Linux System Administration",
    image: image7,
    category: "DevOps",
    link: "https://www.linkedin.com/in/pasindu-malinda-7087942a2/details/projects/",
  },
  {
    title: "Pasindu Malinda Portfolio React.js (Non Academic)",
    subtitle: "React.js | Tailwind CSS | Framer Motion",
    image: image8,
    category: "Web Development",
    link: "https://github.com/PasinduM0056/Pasindu-Malinda-Portfolio-React-Js.git",
  },
  {
    title: "MERN Stack Real Estate Website (Non Academic)",
    subtitle: "MongoDB | Express.js | React.js | Node.js | Tailwind CSS",
    image: image9,
    category: "Web Development",
    link: "https://github.com/PasinduM0056/MERN-Stack-Real-State-Website.git",
  },
  {
    title: "Node.js-React.js-ChatApp (Non Academic)",
    subtitle: "React.js | Node.js",
    image: image10,
    category: "Web Development",
    link: "https://github.com/PasinduM0056/Nodejs-Reactjs-ChatApp.git",
  },
  {
    title: "Location CRUD App (Non Academic)",
    subtitle: "MongoDB | Express.js | React.js | Node.js | Tailwind CSS",
    image: image11,
    category: "Web Development",
    link: "https://github.com/PasinduM0056/LocationCrudApp.git",
  },
  {
    title: "My Sample Video Editing Projects (Video Editing)",
    subtitle: "Adobe After Effects | Adobe Premiere Pro | Filmora",
    image: image12,
    category: "Video Editing",
    link: "https://drive.google.com/drive/folders/1G2JaDmW_S_UZiwhMJsvLq-3gzxdefSkx?usp=sharing",
  },
];

// Skills Section
export const SKILLS = [
  {
    icon: <FaReact className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React.js",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <FaCircle className="text-4xl lg:text-6xl text-green-500" />,
    name: "Express.js",
    experience: "2+ yearsr",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <FaJsSquare className="text-4xl lg:text-6xl text-yellow-500" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiSpringboot className="text-4xl lg:text-6xl text-green-500" />,
    name: "Spring Boot",
    experience: "1+ year",
  },
  {
    icon: <FaJava className="text-4xl lg:text-6xl text-red-600" />,
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-orange-600" />,
    name: "HTML",
    experience: "3+ year",
  },
  {
    icon: <FaCss3Alt className="text-4xl lg:text-6xl text-blue-600" />,
    name: "CSS",
    experience: "3+ year",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-yellow-500" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <FaRProject className="text-4xl lg:text-6xl text-blue-500" />,
    name: "R",
    experience: "1+ year",
  },
  {
    icon: <FaC className="text-4xl lg:text-6xl text-blue-500" />,
    name: "C",
    experience: "2+ year",
  },
  {
    icon: <FaC className="text-4xl lg:text-6xl text-blue-500" />,
    name: "C++",
    experience: "2+ year",
  },
  {
    icon: <FaGit className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Git",
    experience: "2+ year",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-black" />,
    name: "GitHub",
    experience: "2+ year",
  },
  {
    icon: <FaLinux className="text-4xl lg:text-6xl text-black" />,
    name: "Linux",
    experience: "1+ year",
  },
  {
    icon: <FaAws className="text-4xl lg:text-6xl text-yellow-600" />,
    name: "AWS",
    experience: "1+ year",
  },
  {
    icon: <FaDocker className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Docker",
    experience: "1+ year",
  },
  {
    icon: <FaJenkins className="text-4xl lg:text-6xl text-red-600" />,
    name: "Jenkins",
    experience: "1+ year",
  },
  {
    icon: (
      <SiAdobeaftereffects className="text-4xl lg:text-6xl text-purple-600" />
    ),
    name: "Adobe After Effects",
    experience: "2+ years",
  },
  {
    icon: (
      <SiAdobepremierepro className="text-4xl lg:text-6xl text-blue-600" />
    ),
    name: "Adobe Premiere Pro",
    experience: "2+ years",
  },
];

// Award Section
export const ACHIEVEMENT = {
  title: "Kickstart Your Cloud Journey with Free AWS Resources",
  award: "Read my blog",
  description:
    "In today's digital era, cloud computing is a vital skill powering everything from simple apps to complex enterprise solutions. Amazon Web Services (AWS) stands out as a leading cloud platform, offering a wide range of tools for both beginners and experts. Whether you're new to cloud computing or eager to learn more, AWS provides excellent free resources to kickstart your journey. In this blog post, we'll explore these resources and how you can maximize their benefits.",
};

// Testimonial Section
export const TESTIMONIALS = [
    {
      name: "Emily Johnson",
      title: "CEO, Tech Innovators",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: user1,
    },
    {
      name: "Michael Lee",
      title: "CTO, Creative Minds",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: user2,
    },
];
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://web.facebook.com/profile.php?id=61557403311638",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/pasindu-malinda-7087942a2/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/PasinduM0056",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  
  {
    href: "https://medium.com/@malindafiv56",
    icon: <FaMedium fontSize={25} className="hover:opacity-80" />,
  },
];
