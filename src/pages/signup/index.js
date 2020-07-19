import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../commons/button";
import Input from "../../commons/input";
import Layout from "../../components/layout";

import "./styles.scss";

export default function Signup() {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    cofirmPassword: "",
    referral: "",
  });

  function handleChange(e) {
    e.persist();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const { fullname, email, password, confirmPassowrd, referral } = state;

  return (
    <Layout>
      <h2 className="title">Create your free account</h2>
      <span className="signin">
        Already have an account? <Link to="/login">Log in</Link>
      </span>
      <form onSubmit={handleSubmit}>
        <div className="input_row">
          <Input
            name="fullname"
            value={fullname}
            placeholder="enter full name"
            onChange={handleChange}
            type="text"
            label="Full Name"
            inputClass="input_class"
          />
          <Input
            name="email"
            value={email}
            placeholder="enter email"
            onChange={handleChange}
            type="email"
            label="Email Address"
            inputClass="input_class"
          />
        </div>
        <div className="input_row">
          <Input
            name="password"
            value={password}
            placeholder="enter password"
            onChange={handleChange}
            type="password"
            label="Create Password"
            inputClass="input_class"
          />
          <Input
            name="confirmPassword"
            value={confirmPassowrd}
            placeholder="confirm password"
            onChange={handleChange}
            type="password"
            label="Confirm Password"
            inputClass="input_class"
          />
        </div>
        <Input
          name="referral"
          value={referral}
          placeholder="enter referral's name"
          onChange={handleChange}
          type="text"
          label="Referral"
          inputClass="referral_input"
        />
        <Button buttonClass="buttonClass">Create Account</Button>
        <span className="terms">
          By signing up, you are agreeing to
          <Link to="/termsandconditions">Liveizy Terms & Conditions</Link>
        </span>
      </form>
    </Layout>
  );
}
