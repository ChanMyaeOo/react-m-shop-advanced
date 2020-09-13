import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
          label="Confirm Password"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
