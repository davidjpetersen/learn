/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LearningObject } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LearningObjectUpdateFormInputValues = {
    title?: string;
    description?: string;
    blocks?: string;
    time?: number;
    editorVersion?: string;
};
export declare type LearningObjectUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    blocks?: ValidationFunction<string>;
    time?: ValidationFunction<number>;
    editorVersion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearningObjectUpdateFormOverridesProps = {
    LearningObjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    blocks?: PrimitiveOverrideProps<TextAreaFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    editorVersion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LearningObjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: LearningObjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    learningObject?: LearningObject;
    onSubmit?: (fields: LearningObjectUpdateFormInputValues) => LearningObjectUpdateFormInputValues;
    onSuccess?: (fields: LearningObjectUpdateFormInputValues) => void;
    onError?: (fields: LearningObjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LearningObjectUpdateFormInputValues) => LearningObjectUpdateFormInputValues;
    onValidate?: LearningObjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LearningObjectUpdateForm(props: LearningObjectUpdateFormProps): React.ReactElement;
