import React,{useState, useEffect} from "react";
import axios from "axios";
import "./MyEvents.css";
import Card from "react-bootstrap/Card";

const apiUrl = `http://localhost:8080/api/v1/user/123abc/events`;
const [post, setPost] = useState([]);
const Fitness = () => {
  // const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
       setPost(response.data);

       console.log(response.data);
      // console.log(post.type);
    });
  }, [setPost]);


  //  handleClick = () => {
    // useEffect(() => {
    //    axios.delete("http://localhost:8080/api/v1/user/123abc/event/",{params: {id: post.event_id}}) .then(response => { 
    //   setPost('');
    //   console.log(response.data); }); 
    // },[setPost])
    // alert("You have cancelled  the event successfully!")
  // };


  const myFit = post.map((post) => (
    <>
      <Card className="fitness">
        {/* <card-img>
          <Card.Img variant="top" src={fit.photo} />
        </card-img> */}
        <Card.Body>
          <Card.Title>
            <h4>{post.name}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description: </b>
            {post.desc}
          </Card.Text>
          <Card.Text>
            Date: {post.time}
            {/* <br></br>
            Time: {fit.time} */}
          </Card.Text>
          <button variant="primary" onClick={()=>{
            useEffect(() => {
              axios.delete("http://localhost:8080/api/v1/user/123abc/event/",{params: {id: post.event_id}}) .then(response => { 
             setPost('');
             console.log(response.data); }); 
           },[setPost])
            alert("You have cancelled  the event successfully!")
          }}>Cancel</button>
        </Card.Body>
      </Card>
    </>
  ));

  //()=>

  return (
    <>
      <div className="text">
        <h2>My Events</h2>
        {/* <h2>{post.type} it's working</h2>
        {console.log(post.data.type)} */}
      </div>
      {myFit}
    </>
  );
};

export default Fitness;
