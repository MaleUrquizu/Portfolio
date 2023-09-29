
import web from "../assets/web.png";
import creator from "../assets/creator.png";
import backend from "../assets/backend.png";
import mobile from "../assets/mobile.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";

import ApolloClient from "../assets/tech/ApolloClient.png";
import BurpSuite from "../assets/tech/BurpSuite.png";
import GitHub from "../assets/tech/GitHub.png";
import Graphql from "../assets/tech/Graphql.png";
import MySQL from "../assets/tech/MySQL.png";
import Postman from "../assets/tech/Postman.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";



import EthicHub from "../assets/EthicHub.png";
import Movies from "../assets/Movies.png";
import NASA from "../assets/NASA.png";
import CodoACodo from "../assets/CodoACodo.png";
import EthicLogo from "../assets/EthicLogo.png";
import Factoría from "../assets/Factoría.png";
import Telefonica from "../assets/Telefonica.png";
import TW from "../assets/TW.png";

export const navLinks = [
  {
    id: "CV",
    title: "CV",
    href: "https://drive.google.com/file/d/15sJ7fnuLYW29M5avD0AsXlByLAzS0_Xv/view?usp=sharing", 
    download: "MalenaUrquizu-CV.pdf", 
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrolladora Front-end",
    icon: web,
  },
  {
    title: "Desarrolladora Back-end",
    icon: mobile,
  },
  {
    title: "Pentesting App Web",
    icon: backend,
  },
  {
    title: "Exploradora de Tecnologías",
    icon: creator,
  },
];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Apollo Client",
    icon: ApolloClient,
  },
  {
    name: "Burp Suite",
    icon: BurpSuite,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "GraphQL",
    icon: Graphql,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Postman",
    icon: Postman,
  },
];

const experiences = [
  {
    title: "Ciberseguridad",
    company_name: "Factoría F5-Fundación Tomillo  -  MADRID",
    icon: Factoría,
    iconBg: "#383E56",
    date: "Presente - 2023",
    points: [
      "Análisis de riesgos y activos (siteReport, whois, Wappalyzer).",
      "Auditoría en búsqueda de vulnerabilidades y riesgos haciendo uso de herramientas de análisis automático (Owasp Zap, Nmap, BurpSuite).",
      "Búsqueda de directorios y subdominios ocultos.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "EthicHub",
    icon: EthicLogo,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Desarrollo de un CRM para mostrar datos del token ETHIX en las blockchains de Ethereum y Celo.",
      "Adaptación del CRM para cumplir con las necesidades específicas de nuestros clientes.",
      "Utilización de GraphQL para obtener datos de las blockchains.",
      "Implementación de Apollo para conectar los datos de las blockchains a la aplicación.",
      "Desarrollo del front-end de la aplicación utilizando React.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: " THOUGHTWORKS",
    icon: TW,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Participación en un hackathon organizado por la Fundación Somos F5 y en colaboración con la Red de Escuelas F5.",
      "Creación exitosa de una plataforma de e-commerce durante el hackathon.",
      "Trabajo en equipo y colaboración con otros participantes para llevar a cabo el proyecto de manera efectiva",
    ],
  },
  {
    title: "Desarrollo Web Full-Stack",
    company_name: "Factoría F5-Fundación Tomillo  -  MADRID",
    icon: Factoría,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Desarrollo de proyectos tanto en equipo como de manera individual.",
      "Creación de diversos tipos de proyectos, incluyendo Landing pages, e-commerce y CRM.",
      "Utilización de una variedad de tecnologías, como React, Node JS, MongoDB, GraphQL y Git para llevar a cabo estos proyectos de manera efectiva.",
    ],
  },
  {
    title: "Testing Manual y Automatizado",
    company_name: "Codo a Codo -  ARGENTINA",
    icon: CodoACodo,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Garantizar la calidad del software en todas las etapas del ciclo de desarrollo, desde la definición inicial del producto hasta el mantenimiento posterior a la entrega.",
      "Implementación de herramientas y técnicas de prueba, incluyendo Selenium, SpiraTeam, Rapise y Apache JMeter, para evaluar y mejorar la calidad del software en cada fase del proyecto",
    ],
  },
  {
    title: "Introducción a la Programación",
    company_name: "Fundación Telefónica  -  ARGENTINA",
    icon: Telefonica,
    iconBg: "#E6DEDD",
    date: "2020",
    points: [
      "Resolución efectiva de problemas mediante la aplicación de algoritmos.",
      "Toma de decisiones basadas en lógica y análisis.",
      "Creación de código limpio y organizado, siguiendo buenas prácticas de desarrollo de software para garantizar la calidad y la mantenibilidad.",
    ],
  },
];


const projects = [
  {
    name: "CRM EthicHub",
    description:
      "CRM para mostrar datos del token ETHIX (en las blockchains de Ethereum y Celo) ajustándolo a las necesidades específicas de nuestros clientes. Utilizamos GRAPHQL para obtener datos de las blockchains, Apollo para conectar los datos a la aplicación y React para el front-end.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Apollo Client",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "orange-text-gradient",
      },
    ],
    image: EthicHub,
    source_code_link: "https://github.com/",
  },
  {
    name: "Moth",
    description:
      "Aplicación web de películas que utiliza la API TMDB para presentar películas en tarjetas con sus títulos correspondientes. Al hacer clic en una tarjeta, se abre un popup que muestra una descripción detallada. Además, la aplicación cuenta con una barra de búsqueda y opciones de filtro por género para facilitar la exploración.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: Movies,
    source_code_link: "https://github.com/MaleUrquizu/MaleUrquizu.github.io",
  },
  {
    name: "NASA",
    description:
      "Aplicación web interactiva que ofrece información relacionada con el espacio consumiendo la API de la NASA. Nos permite ver la foto del día con su descripción, un carrusel con videos y una barra de búsqueda que presenta los resultados en forma de tarjetas con nombres descriptivos, al hacer clic sobre una de ellas se abre un popup que muestra información adicional sobre el elemento seleccionado.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: NASA,
    source_code_link: "https://github.com/MaleUrquizu/NASA",
  },
];

export { services, technologies, experiences, projects };
