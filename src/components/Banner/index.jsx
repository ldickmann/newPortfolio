import styled from "styled-components";
import ImageComponent from "../ImageComponent";
import Title from "../Title";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  height: 70vh;
  padding: 0rem 10rem 6rem 10rem;

  @media (max-width: 769px) {
    padding: 0rem 2rem;
  }

  @media (max-width: 430px) {
    padding: 0rem 1rem;
    height: 85vh;
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.h1`
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 700;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const TitleFooter = styled.h1`
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 700;
`;

const ContainerSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-green);
  border-radius: 20px;
  gap: 1rem;
  padding: 2rem 0rem 2rem 0rem;
  margin-top: 3rem;
  width: 4rem;

  @media (max-width: 430px) {
    margin-top: 1rem;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 4rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 506px;
  background-color: var(--color-green);
`;

const Banner = () => {
  return (
    <BannerContainer>
      <ContainerText>
        <HeaderContainer>
          <Header>Hi there! I&apos;m</Header>
          <Title text={"Lucas Dickmann"} />
        </HeaderContainer>
        <FooterContainer>
          <TitleFooter>Web Developer</TitleFooter>
        </FooterContainer>
        <ContainerSocialMedia>
          <a href="https://www.linkedin.com/in/lucas-dickmann">
            <FaLinkedin size={30} color={"#000000"} />
          </a>
          <a href="https://www.github.com/ldickmann">
            <FaGithub size={30} color={"#000000"} />
          </a>
        </ContainerSocialMedia>
      </ContainerText>
      <ContainerImage>
        <ImageComponent src={"./images/perfil.png"} alt={"Lucas Dickmann"} />
        <Divider />
      </ContainerImage>
    </BannerContainer>
  );
};

export default Banner;
