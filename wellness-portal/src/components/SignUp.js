import React, { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line
export default function () {
  
  const initialValues = { username: "", email: "", password: "",cpassword:"" };
  const [formValues, setformValues] = useState(initialValues);
  const [formerrors, setFormerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormerrors(validate(formValues));
    setisSubmit(true);
  };
  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formerrors]);
  const validate = (values) => {
    const errors = {};
    const regex =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  //  const uregex=/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}+$/;
    if (!values.username) {
      errors.username = "username is required!";
    }
  //   else if(!uregex.test(values.username)){
  //     errors.username = "This is not a valid username format!";
  // }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if(!regex.test(values.email)){
        errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } 
     else if(values.password.length<4){
        errors.password = "Password must be more than 4 characters!";
    } else if(values.password.length>10){
        errors.password = "Password must be less than 10 characters!";
    }
    if(!values.cpassword){
      errors.cpassword="Confirm password is required";
    }else if(values.password!==values.cpassword){
      errors.cpassword="Password doesn't match."
    }
    return errors;
  };

  return (
    <>
      <div className="Login-form-container fixed-top my-3">
      {/* {Object.keys(formerrors).length === 0 && isSubmit ?(
      <div className="ui message success">Signed In Successfully</div>
      ):(
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>)} */}
        {Object.keys(formerrors).length === 0 && isSubmit ?(
      <div className="alert alert-primary fixed-top mx-10 text-center" role="alert">Signed In Successfully</div>
      ):("")}
        <form className="Login-form" onSubmit={handleSubmit}>
          <div className="cont_tabs_login">
            <ul className="ul_tabs">
              <li className=" Login-form-title">
                <Link to="/login">SIGN IN</Link>
                <span className="linea_bajo_nom"></span>
              </li>
              <li
                className=" active Login-form-title"
                style={{ paddingRight: "20%" }}
              >
                <Link to="/signup">SIGN UP</Link>
                <span className="linea_bajo_nom"></span>
              </li>
            </ul>
          </div>

          <div className="Login-form-content">
            <div className="form-group mt-3 ">
              <label>User Name</label>
              <input
                type="text"
                className="form-control mt-1"
                name="username"
                placeholder="Enter User Name"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p className="red">{formerrors.username}</p>

            <div className="form-group mt-3 ">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                name="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="red">{formerrors.email}</p>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                name="password"
                placeholder="Enter password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="red">{formerrors.password}</p>
            <div className="form-group mt-3">
              <label> Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                name="cpassword"
                placeholder="Enter Confirm password"
                value={formValues.cpassword}
                onChange={handleChange}
              />
            </div>
            <p className="red">{formerrors.cpassword}</p>

            <div className="d-grid gap-2  my-4 ">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
