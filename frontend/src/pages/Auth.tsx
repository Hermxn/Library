import Form from "../components/Form";

const Auth = (props: { formtype: string }) => {
  return <Form type={props.formtype} />;
};

export default Auth;
