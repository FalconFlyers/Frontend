import React ,{useEffect}from 'react';
import jwt_decode from 'jwt-decode';
const google=window.google;
function Auth(){
    
   function handlecallbackresponse(response){
console.log("Encoded jwt id token"+ response.credential);
var userObject=jwt_decode(response.credential);
console.log(userObject)
   }
    useEffect(()=>{
        google.accounts.id.initialize({
            // client_id:"720365015379-0a90vevqrpt8pgs547r2465lbqn9r694.apps.googleusercontent.com",
            client_id:"383065311131-hb1rcpo5r29dotjfn7t89arccfh0141t.apps.googleusercontent.com",
            useCallback:handlecallbackresponse
            
        });
        google.accounts.id.renderButton(
            document.getElementById("SignInDiv"),
            {
                theme:"outline",
                size:"larger"
            }
        )


    },[])
return (
    <div className="App">
        <div id="SignInDiv"></div>

    </div>
)
}
export default Auth;