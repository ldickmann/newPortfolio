import styled from "styled-components";
import Card from "../components/Card";
import ParticlesComponent from "../components/Particles/particlesComponent";
import Contacts from "../components/Contacts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ParticlesWrapper = styled.div`
  flex: 1;
  height: 100vh;
`;

const Overlay = styled.div`
  flex: 0 0 auto;
  margin-top: -24rem;
  padding: 0 10rem;
`;

const Home = () => {
  return (
    <Container>
      <ParticlesWrapper>
        <ParticlesComponent />
      </ParticlesWrapper>
      <Contacts />
      <Overlay>
        <Card />
      </Overlay>
    </Container>
  );
};

export default Home;
