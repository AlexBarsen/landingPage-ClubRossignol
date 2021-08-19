import React, { FC } from "react";
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

import { Button } from "../Button/ButtonElement";

interface Props {
  section: any;
  imgStart: boolean;
}

interface sectionValues {
  id: string;
  topLine: string;
  headline: string;
  description1: string;
  description2: string;
  buttonLabel: string;
  image: string;
  primary: boolean;
}

const InfoSection: FC<Props> = ({ section, imgStart }) => {
  const {
    id,
    topLine,
    headline,
    description1,
    description2,
    buttonLabel,
    image,
    primary,
  }: sectionValues = section;
  return (
    <>
      <InfoContainer id={id} primary={primary}>
        <InfoWrapper primary={primary}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description1}</Subtitle>
                <Subtitle>{description2}</Subtitle>
                <ButtonWrapper>
                  <Button
                    to="/"
                    paddingBig={true}
                    primary={primary}
                    dark={true}
                    fontBig={true}
                  >
                    {buttonLabel}
                  </Button>
                </ButtonWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrapper primary={primary}>
                <InfoImage src={image} />
              </ImageWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
