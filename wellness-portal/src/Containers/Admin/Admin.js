import React from "react";
import { useParams } from "react-router-dom";
import Addevent from "./Addevent";
import Removeevent from "./Removeevent";

const Admin = (props) => {
  const { type } = useParams();
  return (
    <>
      {type === "addevent" && <Addevent />}
      {type === "removeevent" && <Removeevent />}
      {/* { 
        (!props.isLogged)
          ? <> <Home/> </> 
          : <> {type === "addevent" && <Addevent />}
          {type === "removeevent" && <Removeevent />} </> 
      } */}
    </>
  );
};

export default Admin;
