import instagram from "./media/instagram.png";
import Spotify from "./media/Spotify.png";
import Electon from "./media/Electon.png";
import Fabally from "./media/Fabally.png";

export const details = {
  firstname: "KAMAL",
  lastname: "VERMA",
  navList: [
    {
      val1: "Home",
      val2: "nav-link home",
    },
    {
      val1: "About",
      val2: "nav-link about",
    },
    {
      val1: "Skills",
      val2: "nav-link skills",
    },
    {
      val1: "Work",
      val2: "nav-link projects",
    },
    {
      val1: "Contact",
      val2: "nav-link contact",
    },
  ],
  scrollPosition: [0, 545, 1070, 1730, 3400],
  className: [
    "introDiv",
    "about section",
    "skillContainer",
    "workDiv",
    "contactDiv",
  ],
  linkedInLink: "https://www.linkedin.com/in/kamal-verma-b89a2925a/",
  githubLink: "https://github.com/thisiskmv",
  instagram: "7073739289",
  mailLink: "mailto:thisiskmv@gmail.com",
  techStack: [
    {
      name: "HTML",
      img: "https://img.icons8.com/color/512/html-5--v1.png",
    },
    {
      name: "CSS",
      img: "https://img.icons8.com/fluency/512/css3.png",
    },
    {
      name: "JavaScript",
      img: "https://img.icons8.com/color/512/javascript.png",
    },
    {
      name: "Java",
      img: "https://img.icons8.com/ios-filled/512/java-coffee-cup-logo.png",
    },
    {
      name: "React",
      img: "https://img.icons8.com/office/512/react.png",
    },
    {
      name: "Material UI",
      img: "https://img.icons8.com/color/512/material-ui.png",
    },
    {
      name: "Chakra UI",
      img: "https://img.icons8.com/color/512/chakra-ui.png",
    },
    {
      name: "Node JS",
      img: "https://img.icons8.com/fluency/512/node-js.png",
    },
    {
      name: "BootStrap",
      img: "https://img.icons8.com/color/512/bootstrap.png",
    },
    {
      name: "Github",
      img: "https://img.icons8.com/glyph-neue/512/github.png",
    },
    {
      name: "Express JS",
      img: "https://img.icons8.com/ios/512/express-js.png",
    },
    {
      name: "Mongo DB",
      img: "https://img.icons8.com/color/512/mongodb.png",
    },
  ],
  projects: [
    {
      name: "instagram",
      github: "https://github.com/thisiskmv/instagram-clone",
      live: "https://instagram-clone-ten-indol.vercel.app/",
      type: "Colaborative",
      tech: ["React", "Chakra UI", "Redux", "Firebase"],
      img: instagram,
      description:
        "Instagram is a free, online photo-sharing application and social network platform. Instagram allows users to edit and upload photos and short videos through a mobile app",
    },

    {
      name: "Spotify",
      github: "https://github.com/thisiskmv/Spotify-Clone",
      live: "https://spotify-two-virid.vercel.app/",
      type: "Collaborative",
      tech: ["React", "Chakra UI", "Redux"],
      img: Spotify,
      description:
        "Spotify is a live strimeing platform that allows users to listen milions of song on demand where user can listen milions of song/",
    },

    {
      name: "Electon",
      github: "https://github.com/thisiskmv/Electon-clone",
      live: "https://electon-abhi21121211.vercel.app/",
      type: "Collaborative",
      tech: ["React", "Chakra UI", "Redux"],
      img: Electon,
      description:
        "E-Commerce Web Application of Cosmetics,User can order products from Application",
    },
    {
      name: "Fabally",
      github: "https://github.com/BabyGupta05/faballey",
      live: "https://faballey-web.netlify.app/",
      type: "Collaborative",
      tech: ["HTML", "CSS", "JavaScript"],
      img: Fabally,
      description: "E-commerce website specily for ladies wear",
    },
  ],
};
