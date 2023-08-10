/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureIconOverridesProps = {
    FeatureIcon?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type FeatureIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    type?: "audio" | "code" | "edu" | "photo" | "video";
} & {
    overrides?: FeatureIconOverridesProps | undefined | null;
}>;
export default function FeatureIcon(props: FeatureIconProps): React.ReactElement;
