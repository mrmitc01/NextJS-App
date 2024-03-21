import { useForm } from "react-hook-form";
import { RegisterFormData, RegisterUserSchema, RegisterValidFieldNames } from "../types";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormField } from "./FormField";
import axios from "axios";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterUserSchema)
  });
  
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: RegisterFormData) => {
    try {
        const response = await axios.post("/api/registerform", data); // Make a POST request
        const { errors = {} } = response.data; // Destructure the 'errors' property from the response data
  
        // Define a mapping between server-side field names and their corresponding client-side names
        const fieldErrorMapping: Record<string, RegisterValidFieldNames> = {
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
        <div className="grid col-auto">
          <RegisterFormField
            type="email"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username}
          />

          <RegisterFormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <button type="submit" className="submit-button">
            Register
          </button>
        </div>
      </form>
  );
}

export default RegisterForm;