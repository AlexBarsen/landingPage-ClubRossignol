import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;

  @media screen and (max-width: 768) {
    padding: 100rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  height: 86rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "col2 col1" : "col1 col2"};

  @media screen and (max-width: 768px) {
    grid-grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div``;

export const TopLine = styled.p``;

export const Heading = styled.h1``;

export const Subtitle = styled.p``;

export const ButtonWrapper = styled.div``;

export const ImageWrapper = styled.div``;

export const InfoImage = styled.img``;
