import styled from "styled-components";
import Card from "../components/Card";
import ParticlesComponent from "../components/Particles/particlesComponent";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  height: 100vh;
`;

const ParticlesWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

const Overlay = styled.div`
  display: grid;
  place-items: center;
  z-index: 999;
  margin-top: -39rem;
`;

const Home = () => {
  return (
    <Container>
      <ParticlesWrapper>
        <ParticlesComponent />
        <Overlay>
          <Card />
        </Overlay>
      </ParticlesWrapper>
    </Container>
  );
};

export default Home;
