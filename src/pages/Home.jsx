import styled from "styled-components";
import Card from "../components/Card";
import ParticlesComponent from "../components/Particles/particlesComponent";
import Contacts from "../components/Contacts";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  flex: 0 0 auto;
  margin-top: -24rem;
  padding: 0 8rem;
`;

const Home = () => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 5000); // Tempo em milissegundos (5 segundos)

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, []);

  return showHome ? (
    <Container>
      <Banner />
      <Contacts />
      <Overlay>
        <Card />
      </Overlay>
    </Container>
  ) : (
    <ParticlesComponent />
  );
};

export default Home;
