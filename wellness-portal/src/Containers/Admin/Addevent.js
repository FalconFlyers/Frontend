import "./Addevent.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const addEventUrl = `http://localhost:8080/api/v1/events`;
const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); 
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};
function Addevent() {
  const [event, setEvent] = useState([]);
  const [name, setEve] = useState(""); //chg to setName
  const [capacity,setCapacity]=useState([]);
  const [instructor,setInstructor]=useState([]);
  const [zlink,setZlink]=useState([]);
  const [desc,setDesc]=useState([]);
  const [date,setDate]=useState([]);
  const [time,setTime]=useState([]);
  const [image,setImage]=useState([]);
  //create consts for all fields
  //const
  useEffect(() => {
    axios.get(addEventUrl).then((response) => {
      setEvent(response.data);
    });
  }, []);

  function createEvent() {
    axios
      .post(addEventUrl, {
        name,
        //,capacity,type
        //all data to be sent
      })
      .then((response) => {
        setEvent(response.data);
      });
  }
  const handleClick = (e) => {
    e.preventDefault();
    createEvent();
    //for checking
    setEvent('');
    setEve('');
    setCapacity('');
    setInstructor('');
    setZlink('');
    setDesc('');
    setDate('');
    setTime('');
    setImage('');
    console.log(name);
  };
  
  return (
    <>
      <div className="header">
        <Link className="l1" to="/admin/addevent">
          Add Events
        </Link>
        <Link className="l1" to="/admin/removeevent">
          Remove Events
          
        </Link>
      </div>
      <div className="container">
        <Form>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Event Name:
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                type="text"
                placeholder="Event Name"
                onChange={(e) => {
                  setEve(e.target.value);
                }}
                value={name}
              />
            </Col>
            <Col sm={2}></Col>
            <Form.Label column sm={2}>
              Date:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="date"  min={disablePastDate()}   onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Event Type:
            </Form.Label>
            <Col sm={2}>
              <Form.Select>
                <option>Yoga</option>
                <option>Therapy</option>
                <option>MindFullness</option>
                <option>Fitness</option>
                <option>Meditation</option>
              </Form.Select>
            </Col>
            <Col sm={2}></Col>
            <Form.Label column sm={2}>
                Image:
            </Form.Label>
            <Col sm={3}>
              <Form.Control type="file"  onChange={(e) => {
                  setImage(e.target.value);
                }}
                value={image}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Capacity:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="Number" min="0" placeholder="Capacity"   onChange={(e) => {
                  setCapacity(e.target.value);
                }}
                value={capacity} />
            </Col>
            <Col sm={2}></Col>
            <Form.Label column sm={2}>
              Time:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="time" placeholder="Time"   onChange={(e) => {
                  setTime(e.target.value);
                }}
                value={time}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Instructor:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="text" placeholder="Instructor Name"   onChange={(e) => {
                  setInstructor(e.target.value);
                }}
                value={instructor}/>
            </Col>
            <Col sm={2}></Col>
           
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Zoom Link:
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Zoom Link"
                className="form-control"
                onChange={(e) => {
                  setZlink(e.target.value);
                }}
                value={zlink}
              />
            </Col>
            <Col sm={1}></Col>
            <Form.Label column sm={2}>
              Event Discription:
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Event Description"
                className="form-control"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                value={desc}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="btn-deco">
            <Col sm={{ span: 10, offset: 2 }}>
              <button className="btn" onClick={handleClick} >
                ADD EVENT
              </button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Addevent;
