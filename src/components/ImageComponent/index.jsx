import styled from "styled-components";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
`;

/**
 * Image component that displays an image.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - The image alt text.
 *
 * @returns {JSX.Element} The image component.
 */
const ImageComponent = ({ src, alt }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageComponent;
