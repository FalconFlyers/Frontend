import Button from 'react-bootstrap/Button';
import "./Addevent.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
function Addevent() {
  return (
    <>
        <div className="header" >
      <Link className='l1' to="/admin">Add Events</Link>
      <Link className='l1' style={{paddingLeft:"2%"}} to="/removeevent">Remove Events</Link>
      </div>
    <div className='container' >
    <Form style={{paddingTop:"2%"}} >
      <Form.Group as={Row}  className="form-group" >
        <Form.Label column sm={2}>
          Event Name:
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="text" placeholder="Event Name" />
        </Col>
        <Col sm={2}></Col>
        <Form.Label column sm={2}>
            Date:
        </Form.Label>
        <Col sm={2}>
        <Form.Control type="date"/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="form-group">
        <Form.Label column sm={2}>
          Event Type:
        </Form.Label>
        <Col sm={2}>
          <Form.Select >
            <option>Yoga</option>
            <option>Therapy</option>
            <option>MindFullness</option>
            <option>Fitness</option>
            <option>Meditation</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="form-group">
      <Form.Label column sm={2}>
          Capacity:
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="Number" min="0" placeholder="Capacity"/>
        </Col>
        <Col sm={2}></Col>
        <Form.Label column sm={2}>
          Time:
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="time" placeholder="Time" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="form-group">
        <Form.Label column sm={2}>
          Instructor:
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="text" placeholder="Instructor Name" />
        </Col>
        <Col sm={2}></Col>
        
      </Form.Group>
      <Form.Group as={Row} className="form-group">
        <Form.Label column sm={2}>
          Zoom Link:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder="Zoom Link" style={{paddingBottom:"10%"}}/>
        </Col>
        <Col sm={1}></Col>
        <Form.Label column sm={2} >
          Event Discription:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder="Event Description" style={{paddingBottom:"10%"}} />
        </Col>
      </Form.Group> 
    <Form.Group as={Row} className="btn-deco" >
        <Col sm={{ span: 10, offset: 2 }}>
          <button className="btn">ADD EVENT</button>
        </Col>
      </Form.Group>
      </Form>
  </div>
  </>
  );
}

export default Addevent;