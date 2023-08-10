/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import FeatureIcon from "./FeatureIcon";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function FeatureCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        FeatureIcon: {},
        Title: { color: "rgba(254,254,254,1)" },
        "arrow-narrow-right": {},
        "Frame 332": {},
        "Frame 326": {},
        FeatureCard: {
          padding: "16px 24px 16px 16px",
          backgroundColor: "rgba(20,23,24,1)",
          boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.03999999910593033)",
        },
      },
      variantValues: { property1: "hover", property2: "off" },
    },
    {
      overrides: {
        FeatureIcon: {},
        Title: { color: "rgba(254,254,254,1)" },
        "arrow-narrow-right": {},
        "Frame 332": {},
        "Frame 326": {},
        FeatureCard: {
          border: "1px SOLID rgba(52,56,57,1)",
          backgroundColor: "rgba(35,38,39,1)",
        },
      },
      variantValues: { property1: "default", property2: "off" },
    },
    {
      overrides: {
        FeatureIcon: {},
        Title: {},
        "arrow-narrow-right": {},
        "Frame 332": {},
        "Frame 326": {},
        FeatureCard: {},
      },
      variantValues: { property1: "default", property2: "on" },
    },
    {
      overrides: {
        FeatureIcon: {},
        Title: {},
        "arrow-narrow-right": {},
        "Frame 332": {},
        "Frame 326": {},
        FeatureCard: {
          padding: "16px 24px 16px 16px",
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.03999999910593033)",
        },
      },
      variantValues: { property1: "hover", property2: "on" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="row"
      width="492px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(232,236,239,1)"
      borderRadius="12px"
      padding="15px 23px 15px 15px"
      backgroundColor="rgba(254,254,254,1)"
      display="flex"
      {...getOverrideProps(overrides, "FeatureCard")}
      {...rest}
    >
      <FeatureIcon
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(144,104,208,0.2)"
        type="photo"
        {...getOverrideProps(overrides, "FeatureIcon")}
      ></FeatureIcon>
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 326")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="600"
          color="rgba(20,23,24,1)"
          lineHeight="32px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.21px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Title"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="40px"
          padding="8px 8px 8px 8px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 332")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "arrow-narrow-right")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
