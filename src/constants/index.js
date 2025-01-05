import {
  dev,
  chief_project,
  webdesigner,
  art,
  data,
  photography,
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
  music_cover,
  maquettage,
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
  espl
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

export const curriculumvitaeLinks = [
  {
    id: "curriculumvitae",
    title: "CV",
  },
];

const services = [
  {
    title: "Développement web",
    icon: dev,
  },
  {
    title: "Gestion de projet & Tranformation digitale",
    icon: chief_project,
  },
  {
    title: "Webdesign",
    icon: webdesigner,
  },
  {
    title: "Graphisme",
    icon: art,
  },
  {
    title: "Marketing & Data",
    icon: data,
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
  {
    title: "Photographie",
    icon: photography,
  },
];

const technologies = [
  {
    name: "HTML",
    temps: "4 ans",
    icon: html,
  },
  {
    name: "CSS",
    temps: "4 ans",
    icon: css,
  },
  {
    name: "JavaScript",
    temps: "4 ans",
    icon: javascript,
  },
  {
    name: "React",
    temps: "2 ans",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    temps: "2 ans",
    icon: tailwind,
  },
  {
    name: "Node",
    temps: "2 ans",
    icon: nodejs,
  },
  {
    name: "git",
    temps: "4 ans",
    icon: git,
  },
  {
    name: "figma",
    temps: "4 ans",
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
    temps: "4 ans",
    icon: php,
  },
];

const experiences = [
  {
    title: "Développement web et Création numérique 🎨",
    company_name: "Autodidacte",
    icon: autodidacte,
    iconBg: "#333333",
    date: "Févr 2021 - Août 2021",
    repo: "https://github.com/yoshiTorisutan-web/"
  },
  {
    title: "Développeur web - VueJS et C# 🌐",
    company_name: "Pasquier",
    icon: pasquier,
    iconBg: "#333333",
    date: "Sept 2021 - Août 2022",
    repo: "https://www.pasquier.fr/",
  },
  {
    title: "Développeur Wordpress - PHP & MySQL 🌐",
    company_name: "ESPL",
    icon: espl,
    iconBg: "#333333",
    date: "Sept 2022 - Août 2023",
    repo: "https://www.espl.fr/",
  },
  {
    title: "Assistant chef de projet numérique - Outils digitaux & CRM 🌐",
    company_name: "ESPL",
    icon: espl,
    iconBg: "#333333",
    date: "Sept 2023 - En cours",
    repo: "https://www.espl.fr",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Projets Web",
    description: "Explorez mes créations web modernes et fonctionnelles.",
    image: web,
    repo: "https://tristanbossard-projetsweb.netlify.app/",
  },
  {
    id: "project-2",
    name: "Projets Mobile",
    description: "Découvrez mes applications mobiles interactives.",
    image: mobile,
    repo: "https://tristanbossard-projetsmobiles.netlify.app/",
  },
  {
    id: "project-3",
    name: "Montage Photo",
    description: "Plongez dans mes montages photo créatifs.",
    image: photo,
    repo: "https://www.pinterest.fr/yoshiTorisutan_creative/montage-photo/",
  },
  {
    id: "project-4",
    name: "Graphisme Dessin",
    description: `Admirez mes dessins graphiques originaux.`,
    image: graphisme,
    repo: "https://www.pinterest.fr/yoshiTorisutan_creative/logo/",
  },
  {
    id: "project-5",
    name: "Montage Vidéo",
    description: "Visionnez mes montages vidéo dynamiques.",
    image: video,
    repo: "https://www.youtube.com/channel/UCYYPTNdt3bpRT8BGQIC9YJg",
  },
  {
    id: "project-6",
    name: "Maquettage",
    description: "Explorez mes maquettes innovantes.",
    image: maquettage,
    repo: "https://www.figma.com/@tbd_design",
  },
  {
    id: "project-7",
    name: "Music Cover",
    description: "Visionnez la cover musicale de Oldvine.",
    image: music_cover,
    repo: "https://www.youtube.com/watch?v=Uqb1bpoD4mI&ab_channel=Oldvine-Topic",
  },
];

export { services, hobbies, technologies, experiences, projects };
