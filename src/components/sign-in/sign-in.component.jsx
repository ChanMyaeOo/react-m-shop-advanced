import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          required
          value={email}
          handleChange={handleChange}
          label="email"
        />

        <FormInput
          type="password"
          name="password"
          required
          value={password}
          handleChange={handleChange}
          label="password"
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
