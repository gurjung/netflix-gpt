import { useState } from "react";
import styled from "styled-components";

type formType = "Sign In" | "Sign Up";

function SignIn() {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);

  const toggleForm = () => setIsSignInForm((prev) => !prev);

  const formText = (): formType => isSignInForm ? "Sign In" : "Sign Up";

  return (
    <FormContainer>
      <Title>{formText()}</Title>
      <SignInForm>
        <UserInput type='text' placeholder="Email Address" />
        {!isSignInForm && <UserInput type='text' placeholder="Full Name" />}
        <UserInput type='password' placeholder="Password" />
        <SubmitBtn type="submit">{formText()}</SubmitBtn>
      </SignInForm>
      <ToggleFormText onClick={toggleForm}>{isSignInForm ? "New to Netflix, Sign Up Now" : "Already Registered, Sign In Now"}</ToggleFormText>
    </FormContainer>
  )
  }

  const ToggleFormText = styled.p`
  color: white;
  cursor: pointer;
`;

  const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
`;

  const SubmitBtn = styled.button`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 12px;
  padding: 16px;
  background: #e50914;
  color: white;
`;

  const UserInput = styled.input`
  border-radius: 4px;
  border: 0;
  padding: 16px 20px 16px 20px;
  margin-bottom: 10px;
  background: #333;
`;

  const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

  const FormContainer = styled.div`
  background-color: rgba(0,0,0,.75);
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 515px;
  width: 50%;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  padding: 60px 68px 40px;
`;

  export default SignIn;