import {
  FaPython,
  FaJs,
  FaVuejs,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiQuasar } from "react-icons/si";
import styled from "styled-components";

const CardStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 0 auto;
  padding: 2rem 0rem 2rem 0rem;
  background-color: #433d3d;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.723);
  width: 80%;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const Card = () => {
  return (
    <CardStyles>
      <FaPython size={80} color="white" />
      <FaJs size={80} color="white" />
      <FaVuejs size={80} color="white" />
      <FaReact size={80} color="white" />
      <DiDjango size={80} color="white" />
      <SiQuasar size={80} color="white" />
      <FaSass size={80} color="white" />
      <FaBootstrap size={80} color="white" />
    </CardStyles>
  );
};

export default Card;
