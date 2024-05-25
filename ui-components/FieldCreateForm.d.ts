import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FieldCreateFormInputValues = {
    type?: string;
    content?: string;
    title?: string;
};
export declare type FieldCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldCreateFormOverridesProps = {
    FieldCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FieldCreateFormProps = React.PropsWithChildren<{
    overrides?: FieldCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FieldCreateFormInputValues) => FieldCreateFormInputValues;
    onSuccess?: (fields: FieldCreateFormInputValues) => void;
    onError?: (fields: FieldCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FieldCreateFormInputValues) => FieldCreateFormInputValues;
    onValidate?: FieldCreateFormValidationValues;
} & React.CSSProperties>;
export default function FieldCreateForm(props: FieldCreateFormProps): React.ReactElement;
