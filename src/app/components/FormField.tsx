import { LoginFormFieldProps, RegisterFormFieldProps, AccountFormFieldProps } from "../types.js";

export const LoginFormField: React.FC<LoginFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber, required: true })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);

export const RegisterFormField: React.FC<RegisterFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber, required: true })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);

export const AccountFormField: React.FC<AccountFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber, required: true })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);
