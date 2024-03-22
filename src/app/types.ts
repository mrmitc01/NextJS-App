import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type LoginFormData = {
    username: string;
    password: string;
};

export type LoginFormFieldProps = {
    type: string;
    name: LoginValidFieldNames;
    register: UseFormRegister<LoginFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    label: string;
};

export type LoginValidFieldNames =
 | "username"
 | "password";

export const LoginUserSchema: ZodType<LoginFormData> = z
    .object({
        username: z.string().email(),
        password: z
            .string()
            .min(10, { message: "Password is too short" })
            .max(24, { message: "Password is too long" }),
    });


export type RegisterFormData = {
    username: string;
};
    
export type RegisterFormFieldProps = {
    type: string;
    name: RegisterValidFieldNames;
    register: UseFormRegister<RegisterFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    label: string;
};
    
export type RegisterValidFieldNames =
    | "username";
    
export const RegisterUserSchema: ZodType<RegisterFormData> = z
    .object({
        username: z.string().email(),
    });


export type PasswordFormData = {
    password: string;
    confirmpassword: string;
};
    
export type PasswordFormFieldProps = {
    type: string;
    name: PasswordValidFieldNames;
    register: UseFormRegister<PasswordFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    label: string;
};
    
export type PasswordValidFieldNames =
    | "password"
    | "confirmpassword";
    
export const PasswordUserSchema: ZodType<PasswordFormData> = z
    .object({
        password: z
            .string()
            .min(8, { message: "Password is too short" })
            .max(20, { message: "Password is too long" })
            .refine((value) => /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(value ?? ""), { message: "Password must contain letters, lowercase letters, and numbers" }),
        confirmpassword: z.string(),
    })
    .refine((data) => data.password === data.confirmpassword, {
        message: "Passwords do not match",
        path: ["confirmpassword"], // path of error
    });
