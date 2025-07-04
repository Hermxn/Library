import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import formValidationRules from "../utils/formValidationRules.js";

const Form = (props: { type: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const auth = useContext(AuthContext);

  const onSubmit = (data: any) => {
    props.type === "signup" ? auth.signup(data) : auth.login(data);
  };

  const listOfInputs =
    props.type === "signup"
      ? ["name", "email", "password"]
      : ["email", "password"];

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {listOfInputs.map((inputField) => (
          <div key={inputField}>
            <label htmlFor={inputField}>{inputField}</label>
            <input
              id={inputField}
              type={inputField === "name" ? "text" : inputField}
              placeholder={`Enter ${inputField}`}
              {...register(inputField, formValidationRules(inputField))}
            />
            {errors[inputField] && (
              <p>{errors[inputField]?.message?.toString()}</p>
            )}
          </div>
        ))}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
