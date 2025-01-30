import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";
import NavLinks from "../NavLinks";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-black);
  width: 100%;
  box-sizing: border-box;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  transition: opacity 0.3s ease;
`;

const NavItem = styled.li`
  margin: 0 10px;
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
              <NavLinks to="/about-me">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projetos</NavLinks>
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