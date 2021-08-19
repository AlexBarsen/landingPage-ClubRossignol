import styled from "styled-components";

interface Props {
  imgStart: boolean;
}

interface Background {
  primary: boolean;
}

export const InfoContainer = styled.div<Background>`
  min-height: 86rem;
  padding: 15rem 0;
  margin-top: -9rem;
  background: rgba(0, 0, 0, 0.2);
  background-image: ${({ primary }) =>
    primary
      ? `linear-gradient(
    to right bottom,
    rgba(77, 168, 218, 1),
    rgba(0, 124, 199, 0.2)
  );`
      : `linear-gradient(
    to left bottom,
    rgba(244, 217, 73, 1),
    rgba(244, 217, 73, 0.2)
  );`};

  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: -12rem;
  }
`;

export const InfoWrapper = styled.div<Background>`
  display: grid;
  min-height: 55rem;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 5rem 2.4rem;
  justify-content: center;
  background: #fff;
  background-image: ${({ primary }) =>
    primary
      ? `linear-gradient( 
        to right bottom ,
        rgba(244, 217, 73, .2),
        rgba(244,217,73, .8));`
      : `linear-gradient(
    to left bottom,
    rgba(77, 168, 218, .2),
    rgba(0, 124, 199, 0.7)
  );`};

  border-radius: 2rem;
`;

export const InfoRow = styled.div<Props>`
  display: grid;

  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 1.5rem; */
  padding-left: 2rem;

  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

export const Column2 = styled.div`
  /* margin-bottom: 1.5rem; */
  padding: 0 3rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 54rem;
`;

export const TopLine = styled.p`
  color: black;
  font-size: 2rem;
  line-height: 1.6rem;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  color: black;
  font-size: 3rem;

  /* @media screen and (max-width: 1100px) {
    font-size: 2.2rem;
  } */
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 3.5rem;
  font-size: 2rem;
  color: black;

  /* @media screen and (max-width: 1100px) {
    font-size: 1.8rem;
  } */
`;

export const ButtonWrapper = styled.div`
  width: 20rem;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const ImageWrapper = styled.div<Background>`
  border-radius: 2rem;
  max-width: 70rem;
  box-shadow: 1rem 1rem 1.5rem rgba(114, 82, 82, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const InfoImage = styled.img`
  vertical-align: middle;
  border-radius: inherit;
  width: 100%;
`;
