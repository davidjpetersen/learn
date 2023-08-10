/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { FeatureCardProps } from "./FeatureCard";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureListOverridesProps = {
    FeatureList?: PrimitiveOverrideProps<FlexProps>;
    "Frame 324"?: PrimitiveOverrideProps<FlexProps>;
    "Captivate Your Learners"?: PrimitiveOverrideProps<TextProps>;
    "The world\u2019s most engaging learning system"?: PrimitiveOverrideProps<TextProps>;
    row?: PrimitiveOverrideProps<FlexProps>;
    FeatureCard?: FeatureCardProps;
    "feature card39504539"?: PrimitiveOverrideProps<FlexProps>;
    "feature card39504540"?: PrimitiveOverrideProps<FlexProps>;
    "feature card39504541"?: PrimitiveOverrideProps<FlexProps>;
    "feature card39504542"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type FeatureListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeatureListOverridesProps | undefined | null;
}>;
export default function FeatureList(props: FeatureListProps): React.ReactElement;
