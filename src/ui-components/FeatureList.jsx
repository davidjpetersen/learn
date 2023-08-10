/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import FeatureCard from "./FeatureCard";
export default function FeatureList(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="736px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="80px 39px 80px 39px"
      {...getOverrideProps(overrides, "FeatureList")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 324")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(20,23,24,1)"
          lineHeight="64px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-1.45px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Captivate Your Learners"
          {...getOverrideProps(overrides, "Captivate Your Learners")}
        ></Text>
        <Text
          fontFamily="Karla"
          fontSize="24px"
          fontWeight="400"
          color="rgba(108,114,117,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.33px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The world’s most engaging learning system"
          {...getOverrideProps(
            overrides,
            "The world\u2019s most engaging learning system"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="20px"
        direction="column"
        width="492px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "row")}
      >
        <FeatureCard
          display="flex"
          gap="24px"
          direction="row"
          width="492px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(232,236,239,1)"
          borderRadius="12px"
          padding="15px 23px 15px 15px"
          backgroundColor="rgba(254,254,254,1)"
          property1="default"
          property2="on"
          {...getOverrideProps(overrides, "FeatureCard")}
        ></FeatureCard>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "feature card39504539")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "feature card39504540")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "feature card39504541")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "feature card39504542")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
