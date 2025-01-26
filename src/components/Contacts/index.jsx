import styled from "styled-components";

const ContactsStyles = styled.section`
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.3rem;
  height: 30vh;
`;

const SocialMediaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SocialButton = styled.a`
  font-size: 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background-color: #333;
  text-align: center;
  padding: 0.5rem 3rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const GitHubButton = styled(SocialButton)`
  background-color: #000000;

  &:hover {
    background-color: #333333;
  }
`;

const LinkedInButton = styled(SocialButton)`
  background-color: #0e76a8;

  &:hover {
    background-color: #0a5a7e;
  }
`;

const InstagramButton = styled(SocialButton)`
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );

  &:hover {
    background: linear-gradient(
      45deg,
      #e6683c 0%,
      #dc2743 25%,
      #cc2366 50%,
      #bc1888 75%,
      #a8176f 100%
    );
  }
`;

const Contacts = () => {
  return (
    <ContactsStyles>
      <SocialMediaGroup>
        <GitHubButton href="https://github.com/ldickmann" target="_blank">
          GitHub
        </GitHubButton>
        <LinkedInButton
          href="https://www.linkedin.com/in/lucas-dickmann/"
          target="_blank"
        >
          LinkedIn
        </LinkedInButton>
        <InstagramButton
          href="https://www.instagram.com/yourprofile/"
          target="_blank"
        >
          Instagram
        </InstagramButton>
      </SocialMediaGroup>
    </ContactsStyles>
  );
};

export default Contacts;
