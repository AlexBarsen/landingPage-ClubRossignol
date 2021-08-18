import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrapper,
  Column2,
  ImageWrapper,
  InfoImage,
} from "./InfoElements";

// import { Button } from "../Button/ButtonElement";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Top Line</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <ButtonWrapper>{/* <Button>Button</Button> */}</ButtonWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrapper>
                <InfoImage />
              </ImageWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
