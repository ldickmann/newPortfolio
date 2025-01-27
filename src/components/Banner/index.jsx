import styled from "styled-components";
// import Title from "../TitleLetter";
import ImageComponent from "../ImageComponent";
import Title from "../Title";

const BannerContainer = styled.div`
  display: flex;
  background-color: #000000;
  height: 70vh;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10rem 0rem 0rem 7rem;
`;

const Header = styled.h1`
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0rem 0rem 0rem 7rem;
`;

const TitleFooter = styled.h1`
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 700;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
