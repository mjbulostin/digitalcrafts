import "./App.css";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

const initialState = {
  username: "",
  email: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialState);
  const [userDetails, setuserDetails] = useState(initialState);

  const setUserAndResetForm = (formDetails) => {
    setuserDetails(formDetails);
    setFormValues(initialState);
  }

  const resetUserDetails = () => {
    setuserDetails(initialState);
  };

  return (
    <AppStyle className="App">
      <SignUpForm 
      formValues={formValues}
      setFormValues={setFormValues}
      setUserAndResetForm={setUserAndResetForm}
      />
      <UserDetails
      resetUserDetails={resetUserDetails}
      formValues={userDetails} />
    </AppStyle>
  );
}

export default App;