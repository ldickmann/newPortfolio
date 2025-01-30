import styled from "styled-components";
import ImageComponent from "../ImageComponent";
import Title from "../Title";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  height: 70vh;
  padding: 0rem 10rem 0rem 10rem;

  @media (max-width: 769px) {
    padding: 0rem 2rem;
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

const ContainerImage = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
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
      </ContainerText>
      <ContainerImage>
        <ImageComponent src={"./images/perfil.png"} alt={"Lucas Dickmann"} />
      </ContainerImage>
    </BannerContainer>
  );
};

export default Banner;
