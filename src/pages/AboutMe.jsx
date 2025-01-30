import styled from "styled-components";

const AboutMeStyles = styled.section`
  padding: 2rem 0;
  background-color: var(--color-dark);
`;

const AboutMe = () => {
  return (
    <AboutMeStyles>
      <h2>About Me</h2>
    </AboutMeStyles>
  );
};

export default AboutMe;
