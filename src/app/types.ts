import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type LoginFormData = {
    username: string;
    password: string;
};

export type LoginFormFieldProps = {
    type: string;
    placeholder: string;
    name: LoginValidFieldNames;
    register: UseFormRegister<LoginFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};

export type LoginValidFieldNames =
 | "username"
 | "password";

export const LoginUserSchema: ZodType<LoginFormData> = z
    .object({
        username: z.string().email(),
        password: z
            .string()
            .min(8, { message: "Password is too short" })
            .max(20, { message: "Password is too long" }),
    });


export type RegisterFormData = {
    username: string;
    password: string;
};
    
export type RegisterFormFieldProps = {
    type: string;
    placeholder: string;
    name: RegisterValidFieldNames;
    register: UseFormRegister<RegisterFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};
    
export type RegisterValidFieldNames =
    | "username"
    | "password";
    
export const RegisterUserSchema: ZodType<RegisterFormData> = z
    .object({
        username: z.string().email(),
        password: z
            .string()
            .min(8, { message: "Password is too short" })
            .max(20, { message: "Password is too long" }),
    });


export type AccountFormData = {
    username: string;
    password: string;
};
    
export type AccountFormFieldProps = {
    type: string;
    placeholder: string;
    name: AccountValidFieldNames;
    register: UseFormRegister<AccountFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};
    
export type AccountValidFieldNames =
    | "username"
    | "password";
    
export const AccountUserSchema: ZodType<AccountFormData> = z
    .object({
        username: z.string().email(),
        password: z
            .string()
            .min(8, { message: "Password is too short" })
            .max(20, { message: "Password is too long" }),
    });

