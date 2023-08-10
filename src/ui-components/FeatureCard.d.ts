/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeatureIconProps } from "./FeatureIcon";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureCardOverridesProps = {
    FeatureCard?: PrimitiveOverrideProps<FlexProps>;
    FeatureIcon?: FeatureIconProps;
    "Frame 326"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Frame 332"?: PrimitiveOverrideProps<FlexProps>;
    "arrow-narrow-right"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type FeatureCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "default" | "hover";
    property2?: "off" | "on";
} & {
    overrides?: FeatureCardOverridesProps | undefined | null;
}>;
export default function FeatureCard(props: FeatureCardProps): React.ReactElement;
