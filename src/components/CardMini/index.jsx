import styled from "styled-components";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ImageComponent from "../ImageComponent";

const CardSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 3rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 8px;
  margin: 8px;
  background-color: var(--color-grey);
  color: var(--color-green);
  padding: 0rem 0rem 4rem 0rem;
  box-shadow: rgba(166, 143, 123, 1) 0px 4px 8px 0px,
    rgba(166, 143, 123, 1) 0px 4px 15px 0px;
  overflow: hidden;
`;

const CardTitle = styled.h3`
  font-size: 26px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const CardMini = ({ cards }) => {
  return (
    <CardSection>
      {cards.map((card, index) => (
        <CardContainer key={index}>
          <ImageComponent src={card.src} alt={card.alt} width="100%" />
          <CardTitle>{card.title}</CardTitle>
          <IconContainer>
            <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} color="white" />
            </a>
            <a href={card.deployLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={28} color="white" />
            </a>
          </IconContainer>
        </CardContainer>
      ))}
    </CardSection>
  );
};

CardMini.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      deployLink: PropTypes.string,
    })
  ).isRequired,
};

export default CardMini;
