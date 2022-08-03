import React from 'react'
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
const Removeevent = () => {
  return (
    <><div className="header" >
    <Link className='l1' to="/admin">Add Events</Link>
    <Link className='l1' style={{paddingLeft:"2%"}} to="/removeevent">Remove Events</Link>
    </div>
    <Container style={{marginTop:"2%",marginBottom:"2%",paddingTop:"1%",paddingBottom:"1%"}}>
    <Row>
      <Col>Event Name-Type Instructor</Col>
      <Col>Event description</Col>
      <Col>Date/Time</Col>
      <Col> <Button type="submit">REMOVE EVENT</Button></Col>
    </Row>
    </Container>
    <Container style={{marginTop:"2%",marginBottom:"2%",paddingTop:"1%",paddingBottom:"1%"}}>
    <Row>
      <Col>Event Name-Type Instructor</Col>
      <Col>Event description</Col>
      <Col>Date/Time</Col>
      <Col><Button type="submit">REMOVE EVENT</Button></Col>
    </Row>
    </Container>
    <Container style={{marginTop:"2%",marginBottom:"2%",paddingTop:"1%",paddingBottom:"1%"}}>
    <Row>
      <Col>Event Name-Type Instructor</Col>
      <Col>Event description</Col>
      <Col>Date/Time</Col>
      <Col><Button type="submit">REMOVE EVENT</Button></Col>
    </Row>
    </Container>
    <Container style={{marginTop:"2%",marginBottom:"2%",paddingTop:"1%",paddingBottom:"1%"}}>
    <Row>
      <Col>Event Name-Type Instructor</Col>
      <Col>Event description</Col>
      <Col>Date/Time</Col>
      <Col><Button type="submit">REMOVE EVENT</Button></Col>
    </Row>
    </Container>
    </>
  )
}

export default Removeevent