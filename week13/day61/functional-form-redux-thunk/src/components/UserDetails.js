import React from "react";
import {
  SignUpFormInputUsername,
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
            value={formValues.username}
            placeholder="Username"
          />
          <SignUpFormInputLongField
            type="email"
            placeholder="Email"
            value={formValues.email}
          />
        </SignUpFormDiv>
        <SignUpButton onClick={() => resetUserDetails()}>
          Clear User Details
        </SignUpButton>
      </SignUpFormContainer>
    </div>
  );
}