import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: -9.5rem;
  padding: 10rem 0;
  min-height: 86rem;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  background-image: linear-gradient(
    to right bottom,
    rgba(244, 217, 73, 1),
    rgba(244, 217, 73, 1)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
