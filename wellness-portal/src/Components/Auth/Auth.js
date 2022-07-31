import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function Auth() {
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded jwt id token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({
      client_id:
        "383065311131-hb1rcpo5r29dotjfn7t89arccfh0141t.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "dark",
      size: "larger"
      
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
      {Object.keys(user).length !== 0 && (
        <button
          type="button"
          className=" btn btn-primary"
          onClick={(e) => handleSignOut(e)}
        >
          Log Out
        </button>
      )}
    </div>
  );
}
export default Auth;
