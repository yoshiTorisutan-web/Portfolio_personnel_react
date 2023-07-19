import {
  dev,
  integrateur,
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
  docker,
  graphql,
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
  python,
  symfony,
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
    title: "Intégrateur web",
    icon: integrateur,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "symfony",
    icon: symfony,
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
    date: "Sept 2022 - Août 2025",
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
