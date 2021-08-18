import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: -9.5rem;
  padding: 10rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  background: rgba(255, 228, 92, 0.6);
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

export const AboutHeading = styled.h1`
  font-size: 4rem;
  margin-bottom: 5rem;
`;

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
