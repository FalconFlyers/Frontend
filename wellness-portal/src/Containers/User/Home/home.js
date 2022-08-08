import React from 'react';
import {Header, Events, LogoBox, MyEvents} from "../../../Components";

const home = (props) => {
  return (
    <>
      { 
        (!props.isLogged)
          ? <> <Header/><Events changedLogging={props.changedLogging} isLogged={props.isLogged}/> </> 
          : <> <Header/><LogoBox/><MyEvents/></> 
      }
    </>
  );
}

export default home