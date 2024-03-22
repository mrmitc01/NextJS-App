import { useForm } from "react-hook-form";
import { LoginFormData, LoginUserSchema, LoginValidFieldNames } from "../types";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormField } from "./FormField";
import axios from "axios";
import { Button } from '@radix-ui/themes';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginUserSchema)
  });
  
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
        const response = await axios.post("/api/loginform", data); // Make a POST request
        const { errors = {} } = response.data; // Destructure the 'errors' property from the response data
  
        // Define a mapping between server-side field names and their corresponding client-side names
        const fieldErrorMapping: Record<string, LoginValidFieldNames> = {
          username: "username",
          password: "password",
        };
  
        // Find the first field with an error in the response data
        const fieldWithError = Object.keys(fieldErrorMapping).find(
          (field) => errors[field]
        );
  
        // If a field with an error is found, update the form error state using setError
        if (fieldWithError) {
          // Use the ValidFieldNames type to ensure the correct field names
          setError(fieldErrorMapping[fieldWithError], {
            type: "server",
            message: errors[fieldWithError],
          });
          console.log("ERROR", data);
        }
        else {
            console.log("SUCCESS", data);
            localStorage.setItem('loggedInUser', "true");
            setLoggedIn(true);
            router.push('/homepage');
        }
      } catch (error) {
        console.log("ERROR", data);
        alert("Submitting form failed!");
      }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid col-auto space-y-2">
          <LoginFormField
            type="email"
            name="username"
            register={register}
            error={errors.username}
            label="Email address"
          />
          <LoginFormField
            type="password"
            name="password"
            register={register}
            error={errors.password}
            label="Password"
          />
          <Button type="submit" className="submit-button w-80 h-24" color="blue" >
            Continue with email
          </Button>
        </div>
      </form>
  );
}

export default LoginForm;