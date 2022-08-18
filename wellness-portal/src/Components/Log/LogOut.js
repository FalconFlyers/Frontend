import React from "react";
import { GoogleLogout } from "react-google-login";
import "./LogOut.css";
import swal from "sweetalert";

const clientId =
  "383065311131-hb1rcpo5r29dotjfn7t89arccfh0141t.apps.googleusercontent.com";

function Logout(props) {
  const onSuccess = () => {
    console.log("Logout made successfully");
    props.changedLogging();
    swal({
      title: `Loged Out`,
      text: "You have logged Out!",
  
    });
  };

  return (
    <div className="logout">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Log Out
          </button>
        )}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
