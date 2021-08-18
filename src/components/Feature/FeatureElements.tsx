import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  border: 2px solid black;
  background-color: rgba(77, 168, 218, 0.9);
  height: 38rem;
  width: 32rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1rem) scale(1.05);
  }

  @media screen and (max-width: 960px) {
    height: 33rem;
    width: 27rem;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 50%;
  background-size: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const FeatureDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FeatureName = styled.div`
  text-align: center;
  font-size: 2.6rem;
  padding: 0.5rem;
`;

export const FeatureDescription = styled.div`
  font-size: 1.8rem;
  text-align: center;
`;
