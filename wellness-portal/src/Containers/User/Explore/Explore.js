import React from 'react'
import './Explore.css'
import ReactPlayer from 'react-player/youtube'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Explore = () => {
    
  return (
    <div>
        <div className='first-div'>
       <h2 className='h2-deco'><i>"Your Wellness our Responsibility"</i></h2>
       <p className='p-deco'>
       <i>Wellness is the act of practicing healthy habits on a daily basis to attain better physical and mental health outcomes,<br/>
       so that instead of just surviving, you're thriving.To understand the significance of wellness.
       it's important to understand <br/>how it's linked to health.
       According to the World Health Organisation(WHO), Health is defined as being <br/>
       " A state of complete physical,mental
        and social well-being and not merely the absence of disease or infirmity".
        </i>
       </p>
        </div>
        <div className="mid-div">
        <h2 className='h2-mid-deco'><i>"What would you like to do today?"</i></h2>
        <Row>
     <Col><ReactPlayer url='https://www.youtube.com/watch?v=nvKYHTFrmMs' playing={true} muted={true}/></Col>
     <Col><ReactPlayer url='https://www.youtube.com/watch?v=F8_ME4VwTiw' playing={true} muted={true}/></Col>
     </Row>
        </div>
        <div>
      What you should take action?
        </div>
    </div>
  )
}

export default Explore