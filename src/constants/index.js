import {
  dev,
  chief_project,
  webdesigner,
  art,
  racing,
  videogames,
  creation,
  basketball,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  web,
  mobile,
  graphisme,
  photo,
  video,
  sass,
  vue,
  bootstrap,
  flutter,
  mysql,
  php,
  pasquier,
  autodidacte,
  espl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur web",
    icon: dev,
  },
  {
    title: "Gestion de projet",
    icon: chief_project,
  },
  {
    title: "Webdesigner",
    icon: webdesigner,
  },
  {
    title: "Graphiste",
    icon: art,
  },
];

const hobbies = [
  {
    title: "Sports automobiles",
    icon: racing,
  },
  {
    title: "Basketball",
    icon: basketball,
  },
  {
    title: "Jeux-vidéos",
    icon: videogames,
  },
  {
    title: "Création",
    icon: creation,
  },
];

const technologies = [
  {
    name: "HTML",
    temps: "3 ans",
    icon: html,
  },
  {
    name: "CSS",
    temps: "3 ans",
    icon: css,
  },
  {
    name: "JavaScript",
    temps: "3 ans",
    icon: javascript,
  },
  {
    name: "React",
    temps: "1 an",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    temps: "1 an",
    icon: tailwind,
  },
  {
    name: "Node",
    temps: "1 an",
    icon: nodejs,
  },
  {
    name: "git",
    temps: "3 ans",
    icon: git,
  },
  {
    name: "figma",
    temps: "3 ans",
    icon: figma,
  },
  {
    name: "sass",
    temps: "1 an",
    icon: sass,
  },
  {
    name: "vue",
    temps: "1 an",
    icon: vue,
  },
  {
    name: "bootstrap",
    temps: "2 ans",
    icon: bootstrap,
  },
  {
    name: "flutter",
    temps: "1 an",
    icon: flutter,
  },
  {
    name: "mysql",
    temps: "3 ans",
    icon: mysql,
  },
  {
    name: "php",
    temps: "3 ans",
    icon: php,
  },
];

const experiences = [
  {
    title: "Développement web et Création numérique",
    company_name: "Autodidacte",
    icon: autodidacte,
    iconBg: "#333333",
    date: "Févr 2021 - Août 2021",
  },
  {
    title: "Développeur Frontend",
    company_name: "Pasquier",
    icon: pasquier,
    iconBg: "#333333",
    date: "Sept 2021 - Août 2022",
  },
  {
    title: "Développeur Backend",
    company_name: "ESPL",
    icon: espl,
    iconBg: "#333333",
    date: "Sept 2022 - Août 2023",
  },
  {
    title: "Chef de projet numérique",
    company_name: "ESPL",
    icon: espl,
    iconBg: "#333333",
    date: "Sept 2023 - Août 2025",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Site Web",
    description: "Découvrez un premier aperçu de l’ensemble de mes créations.",
    image: web,
    repo: "https://github.com/yoshiTorisutan-web/F1_Express",
  },
  {
    id: "project-2",
    name: "Application Mobile",
    description: "Découvrez un premier aperçu de l’ensemble de mes créations.",
    image: mobile,
    repo: "https://github.com/yoshiTorisutan-web/MyDigitalProject_Marc",
  },
  {
    id: "project-3",
    name: "Montage Photo",
    description: "Découvrez un premier aperçu de l’ensemble de mes créations.",
    image: photo,
    repo: "https://www.pinterest.fr/yoshiTorisutan_creative/",
  },
  {
    id: "project-4",
    name: "Graphisme/Dessin",
    description: `Découvrez un premier aperçu de l’ensemble de mes créations.`,
    image: graphisme,
    repo: "https://www.pinterest.fr/yoshiTorisutan_creative/",
  },
  {
    id: "project-5",
    name: "Montage Vidéo",
    description: "Découvrez un premier aperçu de l’ensemble de mes créations.",
    image: video,
    repo: "https://www.youtube.com/channel/UCYYPTNdt3bpRT8BGQIC9YJg",
  },
];

export { services, hobbies, technologies, experiences, projects };
