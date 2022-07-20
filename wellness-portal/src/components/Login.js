import React ,{useState,useEffect} from "react"
import "./login.css"
import {Link,useNavigate} from "react-router-dom"
import Auth from "./Auth"
import Navbar from "./Navbar";
// eslint-disable-next-line
export default function () {
  <Navbar/>
const navigate=useNavigate();
const homehandler=()=>{
  if(isSubmit){
  navigate("/")
  document.getElementById("button").hidden=true;
  }else{
console.log("try agian with proper credentials")
  }
}
const initialValues = { email: "", password: ""};
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
    
    if (!values.email) {
      errors.email = "Email is required!";
    } 
    if (!values.password) {
      errors.password = "Password is required!";
    } 
     
    return errors;
  };
  
  
  return (
    <>
      <div className="Login-form-container fixed-top " id="logindiv">
      {Object.keys(formerrors).length === 0 && isSubmit ?(
      <div className="alert alert-primary fixed-top mx-10 text-center" role="alert">Signed In Successfully</div>
      ):("")}
      
        <form className="Login-form"onSubmit={handleSubmit}>
          <div className="cont_tabs_login">
            <ul className='ul_tabs'>
              <li className="active Login-form-title"><Link to="/login" onClick="sign_in()">SIGN IN</Link>
                <span className="linea_bajo_nom"></span>
              </li>
              <li className="Login-form-title" style={{ paddingRight: "20%" }}><Link to="/signup" onClick="sign_up()">SIGN UP</Link><span className="linea_bajo_nom"></span>
              </li>
            </ul>
          </div>


          <div className="Login-form-content">

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
            <div className="d-grid gap-2 mt-3 ">
              <button type="submit" className="btn btn-primary" onClick={homehandler} >
                Sign In
              </button>
            </div>
             <hr/>
            
            <div className="center" style={{paddingLeft:"10%"}}>
              {/* <button className="login__btn login__google btn btn-primary" onClick={{}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16"> */}
                {/* <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" /> */}
              {/* </svg> */}
              {/* <i className="bi bi-google"></i> SignIn with Google */}
              {/* </button> */}
                <Auth/>
            </div>
            <p className="text-center mt-3">New User? <Link to="/signup">Create Account</Link></p>

          </div>
        </form>
      </div>
    </>
  )
}