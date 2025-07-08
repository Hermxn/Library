import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.js";
import formValidationRules from "../utils/formValidationRules.js";
import "../styles/Form.css";

const Form = (props: { type: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const { signup, login } = useAuth();

  const onSubmit = (data: any) => {
    props.type === "signup" ? signup(data) : login(data);
  };

  const listOfInputs =
    props.type === "signup"
      ? ["name", "email", "password"]
      : ["email", "password"];

  return (
    <main>
      <section className="section-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Welcome!</h2>
          {listOfInputs.map((inputField) => (
            <div key={inputField} className="form-field">
              <label htmlFor={inputField}>
                {inputField.charAt(0).toUpperCase() + inputField.slice(1)}
              </label>
              <div className="input-wrapper">
                <input
                  id={inputField}
                  type={inputField === "name" ? "text" : inputField}
                  placeholder={`Enter ${inputField}`}
                  {...register(inputField, formValidationRules(inputField))}
                />
              </div>
              {errors[inputField] && (
                <p>{errors[inputField]?.message?.toString()}</p>
              )}
            </div>
          ))}
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
};

export default Form;
