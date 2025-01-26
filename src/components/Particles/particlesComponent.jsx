import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./particles.json";
import Title from "../Title";
import styled from "styled-components";

const Text = styled.h1`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
`;

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesConfig}
          />
          <Text>Hi there! I'm Lucas E. Dickmann</Text>
          <Title text="Dev Luks" />
        </>
      )}
    </>
  );
};

export default ParticlesComponent;
