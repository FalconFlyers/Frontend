import React from 'react';
import {Header, Events, LogoBox} from "../../../Components";

const home = (props) => {
  return (
    <>
      { 
        (!props.isLogged)
          ? <> <Header/><Events/> </> 
          : <> <Header/><LogoBox/> </> 
      }
    </>
  );
}

export default home