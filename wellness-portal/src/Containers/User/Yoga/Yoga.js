import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import yoga from "./Yoga-list";
import "./Yoga.css"

const Yoga = () => {
  
 
  const myYoga = yoga.map((yoga) => (
    
    // <Card style={{ width: "20rem",flexDirection:"row"}}>
    <>

  
    <div style={{border:"1px solid black",marginBottom:"2px"}}>
      <Card>
      <Card.Img variant="top" src={yoga.photo} style={{minWidth:"450px"}} />
      <Card.Body>
        <Card.Title ><h4>{yoga.title}</h4></Card.Title>
        <Card.Text style={{width:"50rem",paddingTop:"1%",margin:"center"}}>
          <b>Description:</b>{yoga.desc}
        </Card.Text>
        <Card.Text  style={{margin:"center"}}>
        <b>Bookings Available:</b>{yoga.Book_Avai}<br></br>
          Date:{yoga.date}<br></br>
          Time:{yoga.time}
          
          </Card.Text>
          
        <Button variant="primary" style={{margin:"center"}}>Book Now</Button>
        

      </Card.Body>
    </Card>
    </div>
    
    </>
    
  ));
  return <>{myYoga}</>;
        
  
}

export default Yoga;