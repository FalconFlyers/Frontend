import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
// import Login from './Login';

function Auth(){
    const navigate=useNavigate();
    const [user, setuser] = useState({});
    function handleCallbackResponse(response){
      console.log("Encoded JWT TD token:"+response.credential);
      var userObject=jwt_decode(response.credential);
      console.log(userObject);
      setuser(userObject);
      document.getElementById("SignInDiv").hidden=true;
    //   document.getElementById("signindiv").hidden=false;
    navigate("/")
    }
    
    function handleSignOut(event){
        setuser({});
        document.getElementById("SignInDiv").hidden=false;
        // document.getElementById("signindiv").hidden=false;
    }
    useEffect(()=>{
        const google=window.google;
        google.accounts.id.initialize({
            client_id:"383065311131-hb1rcpo5r29dotjfn7t89arccfh0141t.apps.googleusercontent.com",
            callback:handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("SignInDiv"),
            {theme:"outline",size:"large"}
        );
        google.accounts.id.prompt();
    },[]);
    //If we have no user,SignIn Button
    //If we have user,Show the SignOut Button
return(
<div className="Auth">
<div id="SignInDiv"></div>
{
    Object.keys(user).length!==0 && 
<button onClick={(e)=> handleSignOut(e)}>SignOut</button>   
}
{
    user &&
    <div>
   <img src={user.picture}></img>
   <h3>{user.name}</h3>
    </div>
}
</div>

);
}
export default Auth;