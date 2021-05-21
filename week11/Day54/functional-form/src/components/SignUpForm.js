import React from "react";
import {
  SignUpFormInputName,
  SignUpFormInputLName,
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
            setFormValues({ ...formValues, firstName: e.target.value })
          }
          type="text"
          value={formValues.firstName}
          placeholder="First Name"
        />
        <SignUpFormInputLName
          type="text"
          placeholder="Last Name"
          onChange={(e) =>
            setFormValues({ ...formValues, lastName: e.target.value })
          }
          value={formValues.lastName}
        />
        <SignUpFormInputLongField
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          value={formValues.email}
        />
        <SignUpFormInputLongField
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          value={formValues.password}
        />
        <SignUpFormInputLongField
          type="password"
          placeholder="Re-Type Password"
          onChange={(e) =>
            setFormValues({ ...formValues, retypedPassword: e.target.value })
          }
          value={formValues.retypedPassword}
        />
      </SignUpFormDiv>
      <SignUpButton onClick={() => setUserAndResetForm(formValues)}>
        Sign Up
      </SignUpButton>
    </SignUpFormContainer>
  );
};
export default SignUpForm;