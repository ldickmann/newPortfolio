import styled from "styled-components";
import Card from "../components/Card";
// import ParticlesComponent from "../components/Particles/particlesComponent";
import Contacts from "../components/Contacts";
import Banner from "../components/Banner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// const BannerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #000000;
//   height: 70vh;
// `;

// const ParticlesWrapper = styled.div`
//   flex: 1;
//   height: 100vh;
// `;

const Overlay = styled.div`
  flex: 0 0 auto;
  margin-top: -24rem;
  padding: 0 8rem;
`;

const Home = () => {
  return (
    <Container>
      <Banner />
        {/* <ParticlesWrapper>
        <ParticlesComponent />
      </ParticlesWrapper> */}
      <Contacts />
      <Overlay>
        <Card />
      </Overlay>
    </Container>
  );
};

export default Home;
