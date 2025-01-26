import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import NavLinks from "../NavLinks";

const SidebarContainer = styled.div`
  height: 100%;
  background-color: #000;
  transition: width 0.3s, opacity 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 1rem;

  &.open {
    .sidebarLink {
      opacity: 1;
      color: white;
    }
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
`;

const CloseIcon = styled.div`
  align-self: flex-end;
  margin-right: 3vh;
  margin-top: 3vh;
  cursor: pointer;
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer className={isOpen ? "open" : ""}>
      <SidebarHeader>
        <CloseIcon onClick={toggleSidebar}>
          <FaTimes />
        </CloseIcon>
      </SidebarHeader>
      <NavLinks isSidebar />
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
