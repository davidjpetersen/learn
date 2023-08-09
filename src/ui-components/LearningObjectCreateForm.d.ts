/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LearningObjectCreateFormInputValues = {
    title?: string;
    description?: string;
    content?: string;
};
export declare type LearningObjectCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearningObjectCreateFormOverridesProps = {
    LearningObjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type LearningObjectCreateFormProps = React.PropsWithChildren<{
    overrides?: LearningObjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LearningObjectCreateFormInputValues) => LearningObjectCreateFormInputValues;
    onSuccess?: (fields: LearningObjectCreateFormInputValues) => void;
    onError?: (fields: LearningObjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LearningObjectCreateFormInputValues) => LearningObjectCreateFormInputValues;
    onValidate?: LearningObjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function LearningObjectCreateForm(props: LearningObjectCreateFormProps): React.ReactElement;
