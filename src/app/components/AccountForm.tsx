import { useForm } from "react-hook-form";
import { AccountFormData, AccountUserSchema, AccountValidFieldNames } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountFormField } from "./FormField";
import axios from "axios";

function AccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<AccountFormData>({
    resolver: zodResolver(AccountUserSchema)
  });
  
  const onSubmit = async (data: AccountFormData) => {
    try {
        const response = await axios.post("/api/accountform", data); // Make a POST request
        const { errors = {} } = response.data; // Destructure the 'errors' property from the response data
  
        // Define a mapping between server-side field names and their corresponding client-side names
        const fieldErrorMapping: Record<string, AccountValidFieldNames> = {
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
        }
      } catch (error) {
        console.log("ERROR", data);
        alert("Submitting form failed!");
      }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid col-auto">
          <AccountFormField
            type="email"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username}
          />

          <AccountFormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <button type="submit" className="submit-button">
            Update
          </button>
        </div>
      </form>
  );
}

export default AccountForm;