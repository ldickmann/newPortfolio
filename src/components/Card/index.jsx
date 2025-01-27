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
  gap: 2rem;
  padding: 2rem 0rem;
  background-color: #433d3d;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.723);
`;

const Card = () => {
  return (
    <CardStyles>
      <FaPython size={80} />
      <FaJs size={80} />
      <FaVuejs size={80} />
      <FaReact size={80} />
      <DiDjango size={80} />
      <SiQuasar size={80} />
      <FaSass size={80} />
      <FaBootstrap size={80} />
    </CardStyles>
  );
};

export default Card;
