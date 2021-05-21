import React from "react";
import {
  SignUpFormInputName,
  SignUpFormInputLName,
  SignUpFormDiv,
  SignUpFormContainer,
  SignUpHeader,
  SignUpFormInputLongField,
  SignUpButton,
} from "../components/styledComponents/SignUpFormStyles";

export default function UserDetails({ formValues, resetUserDetails }) {
  return (
    <div>
      <SignUpFormContainer className="sign-up-form-container">
        <SignUpHeader>User Detail</SignUpHeader>
        <SignUpFormDiv action="">
          <SignUpFormInputName
            type="text"
            value={formValues.firstName}
            placeholder="First Name"
          />
          <SignUpFormInputLName
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
          />
          <SignUpFormInputLongField
            type="email"
            placeholder="Email"
            value={formValues.email}
          />
          <SignUpFormInputLongField
            type="password"
            placeholder="Password"
            value={formValues.password}
          />
          <SignUpFormInputLongField
            type="password"
            placeholder="Re-Type Password"
            value={formValues.retypedPassword}
          />
        </SignUpFormDiv>
        <SignUpButton onClick={() => resetUserDetails()}>
          Clear User Details
        </SignUpButton>
      </SignUpFormContainer>
    </div>
  );
}