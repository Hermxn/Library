import Form from "../components/LoginRegistrationForm";

const Auth = (props: { formtype: string }) => {
  return <Form type={props.formtype} />;
};

export default Auth;
