import styled from "styled-components";
import CardMini from "../components/CardMini";

const ProjectsStyles = styled.section`
  background-color: var(--color-black);
`;

const divideIntoGroups = (array, groupSize) => {
  const groups = [];
  for (let i = 0; i < array.length; i += groupSize) {
    groups.push(array.slice(i, i + groupSize));
  }
  return groups;
};

const Projects = () => {
  const cards = [
    {
      src: "./images/DjangoSGE.png",
      alt: "Django SGE | Full Stack App - Django, Django REST & Bootstrap",
      title: "Django SGE - Sistema de Gerenciamento de Estoque",
      githubLink: "https://github.com/ldickmann/djangoSGE",
    },
    {
      src: "./images/ola-mundo.png",
      alt: "Ola mundo - React App",
      title: "Projeto Olá Mundo | Front-end App - React",
      githubLink:
        "https://github.com/ldickmann/ReactG7-ONE/tree/main/ola-mundo",
      deployLink: "https://react-ola-mundo-one.vercel.app/",
    },
    {
      src: "./images/space-app.png",
      alt: "Space APP",
      title: "Projeto Space | Front-end App - React",
      githubLink:
        "https://github.com/ldickmann/ReactG7-ONE/tree/main/space-app",
      deployLink: "https://react-space-app-one.vercel.app/",
    },
    {
      src: "./images/alura-flix-app.png",
      alt: "AluraFlix | Front-end App - React",
      title: "Projeto AluraFlix | Front-end App - React",
      githubLink: "https://github.com/ldickmann/AluraFlix-ONE",
      deployLink: "https://alura-flix-one-blond.vercel.app/",
    },
    {
      src: "./images/LukFlixApp.png",
      alt: "LukFlix App",
      title: "Projeto LukFlix | Front-end - Django App",
      githubLink: "https://github.com/ldickmann/LukFlix-App",
    },
    {
      src: "./images/pong.png",
      alt: "Pong Game",
      title: "Projeto Pong Game - Javascript",
      githubLink:
        "https://github.com/ldickmann/FrontEndG7-ONE/tree/main/ChatGPTeJS",
      deployLink: "https://ldickmann.github.io/FrontEndG7-ONE/ChatGPTeJS/",
    },
  ];

  const cardGroups = divideIntoGroups(cards, 3);

  return (
    <ProjectsStyles>
      {cardGroups.map((group, index) => (
        <CardMini key={index} cards={group} />
      ))}
    </ProjectsStyles>
  );
};

export default Projects;
