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
import { View } from "@aws-amplify/ui-react";
export default function FeatureIcon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { FeatureIcon: {} }, variantValues: { type: "photo" } },
    {
      overrides: { FeatureIcon: { backgroundColor: "rgba(216,76,16,0.2)" } },
      variantValues: { type: "video" },
    },
    {
      overrides: { FeatureIcon: { backgroundColor: "rgba(0,132,255,0.2)" } },
      variantValues: { type: "edu" },
    },
    {
      overrides: { FeatureIcon: { backgroundColor: "rgba(82,186,105,0.2)" } },
      variantValues: { type: "code" },
    },
    {
      overrides: { FeatureIcon: { backgroundColor: "rgba(254,171,73,0.2)" } },
      variantValues: { type: "audio" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="60px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="12px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(144,104,208,0.2)"
      {...getOverrideProps(overrides, "FeatureIcon")}
      {...rest}
    ></View>
  );
}
