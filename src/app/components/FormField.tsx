import { LoginFormFieldProps, RegisterFormFieldProps, PasswordFormFieldProps } from "../types.js";

export const LoginFormField: React.FC<LoginFormFieldProps> = ({
  type,
  name,
  register,
  error,
  valueAsNumber,
  label,
}) => (
  <>
    <label>{label}</label>
    <input
      className="bg-gray-200 w-80 h-10"
      type={type}
      {...register(name, { valueAsNumber, required: true })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);

export const RegisterFormField: React.FC<RegisterFormFieldProps> = ({
  type,
  name,
  register,
  error,
  valueAsNumber,
  label,
}) => (
  <>
    <label>{label}</label>
    <input
      className="bg-gray-200 w-80 h-10"
      type={type}
      {...register(name, { valueAsNumber, required: true })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);

export const PasswordFormField: React.FC<PasswordFormFieldProps> = ({
  type,
  name,
  register,
  error,
  valueAsNumber,
  label,
}) => (
  <>
    <label>{label}</label>
    <input
      className="bg-gray-200 w-80 h-10"
      type={type}
      {...register(name, { valueAsNumber, required: true })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);
