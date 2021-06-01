import React from "react";
import {
  SignUpFormInputUsername,
  SignUpFormDiv,
  SignUpFormContainer,
  SignUpHeader,
  SignUpFormInputLongField,
  SignUpButton,
} from "./styledComponents/SignUpFormStyles";

const SignUpForm = ({ formValues, setFormValues, setUserAndResetForm }) => {
  return (
    <SignUpFormContainer className="sign-up-form-container">
      <SignUpHeader>Create Account</SignUpHeader>
      <SignUpFormDiv action="">
        <SignUpFormInputName
          onChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
          type="text"
          value={formValues.username}
          placeholder="First Name"
        />
        <SignUpFormInputLongField
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          value={formValues.email}
        />
      </SignUpFormDiv>
      <SignUpButton onClick={() => setUserAndResetForm(formValues)}>
        Sign Up
      </SignUpButton>
    </SignUpFormContainer>
  );
};
export default SignUpForm;