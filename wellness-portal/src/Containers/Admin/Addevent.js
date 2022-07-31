import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
function Addevent() {
  return (
    <>
    <div style={{paddingTop:"2%",paddingBottom:"2%",paddingLeft:"2%",paddingRight:"2%"}}>
    <div style={{border :'2px solid #0d6efd',flexDirection:"row"}}>
    <Form style={{paddingTop:"2%"}} >
      <Form.Group as={Row} className="mb-3" style={{paddingTop:"2%"}} >
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
      <Form.Group as={Row} className="mb-3" style={{paddingTop:"2%"}}>
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
      <Form.Group as={Row} className="mb-3" style={{paddingTop:"2%"}}>
      <Form.Label column sm={2}>
          Capacity:
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="Number" placeholder="Capacity"/>
        </Col>
        <Col sm={2}></Col>
        <Form.Label column sm={2}>
          Time:
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="time" placeholder="Time" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" style={{paddingTop:"2%"}} >
        <Form.Label column sm={2}>
          Instructor:
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="text" placeholder="Instructor Name" />
        </Col>
        <Col sm={2}></Col>
        
      </Form.Group>
      <Form.Group as={Row} className="mb-3" style={{paddingTop:"2%"}}>
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
    <Form.Group as={Row} className="mb-4 " style={{paddingRight:"15%",paddingTop:"2%"}} >
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">ADD EVENT</Button>
        </Col>
      </Form.Group>
      </Form>
    </div>
  </div>
  </>
  );
}

export default Addevent;