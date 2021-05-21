import "./App.css";
// import ClassBased from "./components/ClassBased";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  retypedPassword: "",
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
      {/* <ClassBased /> */}
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