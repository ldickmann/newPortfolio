import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";
import NavLinks from "../NavLinks";

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 2rem 1rem 0rem;
  background-color: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: rgba(41, 33, 33, 0.9);
    padding-top: 50px;
    transition: opacity 0.3s ease;

    &.open {
      display: flex;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    margin-top: 0;
  }
`;

const NavItem = styled.li`
  margin: 0 10px;

  @media (max-width: 600px) {
    margin: 20px 0;
    text-align: center;
  }
`;

const ToggleIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-top: 10px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [prevPos, setPrevPos] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      setPrevPos(currentPos);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevPos]);

  return (
    <header>
      <Navigation>
        {isMobile ? (
          <ToggleIcon onClick={toggleSidebar}>
            <FaBars size={40} color="white" />
          </ToggleIcon>
        ) : (
          <NavList className={isSidebarOpen ? "open" : ""}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about-me">Sobre Mim</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projetos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contato</NavLinks>
            </NavItem>
          </NavList>
        )}
      </Navigation>
    </header>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Navbar;
