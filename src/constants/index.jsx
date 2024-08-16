import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaJava,
  FaJs,
  Fa1,
  FaIcons,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

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
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Pasindu Malinda",
  info: "Full-Stack Developer | AWS Cloud Specialist | DevOps Enthusiast | Video Editing Aficionado",
};

export const ABOUT = {
  text1:
    "I craft dynamic, responsive applications that seamlessly blend innovation with efficiency",
  text2:
    "Hello! I'm Pasindu Malinda Ghanarathna, a full-stack developer with a passion for AWS Cloud, DevOps, and video editing. I specialize in building scalable, robust applications that not only perform well but also deliver a polished user experience. My dedication to continuous learning keeps me at the forefront of emerging technologies, enabling me to create practical and cutting-edge solutions. Outside of development, I channel my creativity into video editing, where I combine technical precision with artistic vision. Whether I'm coding a complex application or refining a video project, my commitment to excellence drives every endeavor.",
};

export const PROJECTS = [
  {
    title: "E Net Education Online Examination System (OOP Project)",
    subtitle: "MVC-Architecture | Java | MySQL",
    image: image1,
    category: "Web Development",
  },
  {
    title: "Restaurant Management System (IWT Project)",
    subtitle: "HTML | CSS | JavaScript | PHP ",
    image: image2,
    category: "Web Development",
  },
  {
    title: "SoulLift Social Media App (ITPM Project)",
    subtitle: "MongoDB | Express.js | React.js | Node.js | Chakra UI",
    image: image3,
    category: "Web Development",
  },
  {
    title: "Food Market Management System (ITP Project)",
    subtitle: "MongoDB | Express js | React js | Node js | Bootstrap",
    image: image4,
    category: "Web Development",
  },
  {
    title: "Fitness Social Media Web Application (PAF Project)",
    subtitle: "Spring boot, React.js, Tailwind CSS",
    image: image5,
    category: "Web Development",
  },
  {
    title: "GitHub Docker and Jenkins CI/CD Pipeline (Non Academic)",
    subtitle: "GitHub | Docker | Jenkins",
    image: image6,
    category: "DevOps",
  },
  {
    title: "Chat Application with DNS Integration (NDM Project)",
    subtitle: "Socket Programming | Networking | Concurrent Programming | Network Programming | DNS Management | Linux System Administration",
    image: image7,
    category: "DevOps",
  },
  {
    title: "Pasindu Malinda Portfolio React Js (Non Academic)",
    subtitle: "React Js | Tailwind CSS | Framer Motion",
    image: image8,
    category: "Web Development",
  },
  {
    title: "MERN Stack Real State Website (Non Academic)",
    subtitle: "MongoDB | Express.js | React.js | Node.js | Tailwind CSS",
    image: image9,
    category: "Web Development",
  },
  {
    title: "Nodejs-Reactjs-ChatApp (Non Academic)",
    subtitle: "React.js | Node.js ",
    image: image10,
    category: "Web Development",
  },
  {
    title: "Location Crud App (Non Academic)",
    subtitle: "MongoDB | Express.js | React.js | Node.js | Tailwind CSS",
    image: image11,
    category: "Web Development",
  },
  {
    title: "My Sample Vedio Editing Projects (Vedio Editing)",
    subtitle: "Adobe After Effect | Adobe Premiere Pro  | Filmora ",
    image: image12,
    category: "Video Editing",
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React.js",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <FaJs className="text-4xl lg:text-6xl text-red-600" />,
    name: "Express.js",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <FaJs className="text-4xl lg:text-6xl text-sky-700" />,
    name: "JavaScript",
    experience: "1+ year",
  },
  {
    icon: <FaJava className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Springboot",
    experience: "1+ year",
  },
  {
    icon: <FaJava className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Java",
    experience: "1+ year",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-sky-700" />,
    name: "GitHub",
    experience: "1+ year",
  },
  {
    icon: <FaIcons className="text-4xl lg:text-6xl text-sky-700" />,
    name: "MySql",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "Kickstart Your Cloud Journey with Free AWS Resources",
  award: "AWS",
  description:
    "In today's digital era, cloud computing is a vital skill powering everything from simple apps to complex enterprise solutions. Amazon Web Services (AWS) stands out as a leading cloud platform, offering a wide range of tools for both beginners and experts. Whether you're new to cloud computing or eager to learn more, AWS provides excellent free resources to kickstart your journey. In this blog post, we'll explore these resources and how you can maximize their benefits.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
