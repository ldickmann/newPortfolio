import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem 0.5rem;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 1.4rem;

  ${({ $highlighted }) =>
    $highlighted &&
    css`
      text-decoration: underline #e1a6a6;
    `}
`;

const SidebarLink = styled(Link)`
  color: white;
  font-family: "Silkscreen", serif;
  font-weight: 500;
  font-size: 3rem;
  width: 90%;
  transition: opacity 0.3s ease, color 0.3s ease;

  ${({ $highlighted }) =>
    $highlighted &&
    css`
      opacity: 1;
      color: white;
    `}
`;

const NavLinks = ({ children, to, isSidebar }) => {
  const location = useLocation();
  const isHighlighted = location.pathname === to;

  return isSidebar ? (
    <SidebarLink to={to} $highlighted={isHighlighted}>
      {children}
    </SidebarLink>
  ) : (
    <StyledLink to={to} $highlighted={isHighlighted}>
      {children}
    </StyledLink>
  );
};

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  isSidebar: PropTypes.bool,
};

export default NavLinks;
