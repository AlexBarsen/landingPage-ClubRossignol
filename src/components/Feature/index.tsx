import React, { FC } from "react";

import {
  FeatureContainer,
  FeatureImage,
  FeatureDetails,
  FeatureName,
  FeatureDescription,
} from "./FeatureElements";

interface Props {
  feature: any;
}

const Feature: FC<Props> = ({ feature }) => {
  const { image, name, description } = feature;
  return (
    <>
      <FeatureContainer>
        <FeatureImage src={image} alt="Photo" />
        <FeatureDetails>
          <FeatureName>{name}</FeatureName>
          <FeatureDescription>{description}</FeatureDescription>
        </FeatureDetails>
      </FeatureContainer>
    </>
  );
};

export default Feature;
