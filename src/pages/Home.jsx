import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../components/Card";
// import Contacts from "../components/Contacts";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/Particles/particlesComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  flex: 0 0 auto;
  margin-top: -5rem;
  z-index: 999;
`;

const Home = ({ toggleSidebar, isSidebarOpen }) => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return showHome ? (
    <>
      <Container>
        <Navbar
          isHome
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <Banner />
        <Overlay>
          <Card />
        </Overlay>
      </Container>
    </>
  ) : (
    <ParticlesComponent />
  );
};

Home.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Home;
