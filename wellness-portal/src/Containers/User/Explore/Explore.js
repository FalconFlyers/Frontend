import React,{useState} from 'react'
import './Explore.css'
import ReactPlayer from 'react-player/youtube'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
const Explore = () => {
  const[readMore,setReadMore]=useState(false);
  const text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores amet, dolorem quibusdam h"
    const extraContent=<div>
     <p className='extra-content'>
     raesentium facere dolore sapiente quae nobis sit, a neque in mollitia quisquam quidem ex assumenda animi nesciunt soluta quo quod impedit autem laboriosam nostrum atque nulla!
    </p>
   </div>
  const linkName=readMore? 'Read Less<<':'Read More>>'
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
     </Row >
        </div>
        <div className="mid-div">
      <h2 className='h2-deco'><i>What you should take Action?</i></h2>
      <Row className="line">
        <Col>
          <Card className="cardtop">
            <Card.Body>
              <Card.Title className="cardtitle">
                <h3>What is Wellness?</h3>
              </Card.Title>
              <Card.Text className="cardtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi mollitia eum quod placeat beatae, facere atque architecto aut
              </Card.Text>
              <Card.Link  className="yes"  href="https://www.globalwellnessday.org/about/what-is-wellness/">Explore More</Card.Link>
            </Card.Body>
          </Card>


        </Col>
        <Col>
        <Card className="cardtop">
            <Card.Body>
              <Card.Title className="cardtitle">
                <h4>Changing Trends in Indian Wellness</h4>
              </Card.Title>
              <Card.Text className="cardtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi mollitia eum quod placeat beatae, facere atq
              </Card.Text>
              <Card.Link className="yes" href="https://www.thehealthsite.com/diseases-conditions/changing-trends-in-indian-wellness-from-mindfulness-to-nutrition-to-fitness-and-more-886326/">Explore More</Card.Link>
            </Card.Body>
          </Card>
</Col>
        <Col>
        <Card className="cardtop">
            <Card.Body>
              <Card.Title className="cardtitle">
              <h4>Dimensions of wellness:</h4>
              </Card.Title>
              <Card.Text className="cardtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi mollitia eum quod placeat beatae, facere
              </Card.Text>
              <Card.Link  className="yes"  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508938/">Explore More</Card.Link>
            </Card.Body>
          </Card>
</Col>
        <Col>  
                <Card className="cardtop">
            <Card.Body>
              <Card.Title className="cardtitle">
              <h4>For the Perfect Workdown</h4>
              </Card.Title>
              <Card.Text>
                <div>
                  {text.slice(0,100)}
                {readMore && extraContent}
                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                </div>
              </Card.Text>
              <Card.Link   className="yes" href="https://www.readersdigest.in/health-wellness/story-3-thngs-you-must-have-during-a-workout-125596">Explore More</Card.Link>
            </Card.Body>
          </Card>
</Col>

      </Row>
        </div>
    </div>
  )
}

export default Explore