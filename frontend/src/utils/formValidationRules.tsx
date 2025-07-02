const errorMessages = {
  nameMaxLength: "Name must not exceed 20 characters",
  passwordMinLength: "Password must be at least 8 characters",
  passwordSpecialCharacter:
    "Password must contain at least one special character",
  emailRegex: "Please enter a valid email address",
};

const formValidationRules = (inputField: string) => {
  const rules: any = { required: "This field is required" };
  if (inputField === "name") {
    rules.maxLength = {
      value: 20,
      message: errorMessages.nameMaxLength,
    };
  }
  if (inputField === "email") {
    rules.pattern = {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: errorMessages.emailRegex,
    };
  }
  if (inputField === "password") {
    rules.minLength = {
      value: 8,
      message: errorMessages.passwordMinLength,
    };
    rules.pattern = {
      value: /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      message: errorMessages.passwordSpecialCharacter,
    };
  }
  return rules;
};

export default formValidationRules;
