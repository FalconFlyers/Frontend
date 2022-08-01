import Figure from 'react-bootstrap/Figure';
import yoga from "../../Logos/yoga.jpeg";
import fitness from "../../Logos/fitness.jpg";
import meditation from "../../Logos/meditation.jpeg";
import therapy from  "../../Logos/therapy.jpg";
import mindfulness from  "../../Logos/mindfulness.jpg";
import "./LogoBox.css"
import {Link} from "react-router-dom";


// import Row from "react-bootstrap/Row"
function LogoBox() {
  return (
      <>
      <div className="box1" >
    <Figure   >
      <Figure.Image 
         width={105}
         height={100}
        // alt="171x180"
        src={yoga}
      />
      <Figure.Caption style={{fontFamily:"bold",fontSize:"17px",color:"black"}}>
       <Link className='link' to="/yoga" >YOGA</Link>
      </Figure.Caption>
      </Figure>
      <Figure >
      <Figure.Image
         width={110}
         height={95}
        // alt="171x180"
        src={meditation}
      />
      <Figure.Caption >
      
     <Link className='link' to="/meditation"> MEDITATION</Link>
      </Figure.Caption>
      </Figure>
      <Figure >
      <Figure.Image
        width={135}
        height={100}
        // alt="171x180"
        src={fitness}
      />
      <Figure.Caption style={{fontFamily:"bold",fontSize:"17px",color:"grey"}}>
      <Link className='link' to="/fitness"> FITNESS</Link>
      </Figure.Caption>
      </Figure>
      <Figure>
      <Figure.Image
        width={110}
        height={100}
        // alt="171x180"
        src={mindfulness}
      />
      <Figure.Caption style={{fontFamily:"bold",fontSize:"17px",color:"grey"}}>
      <Link className='link' to="/mindfulness">MINDFULLNESS</Link>
      </Figure.Caption>
      </Figure>
      <Figure>
      <Figure.Image
        width={160}
        height={100}
        // alt="171x180"
        src={therapy}
      />
      <Figure.Caption style={{fontFamily:"bold",fontSize:"17px",color:"grey"}}>
      <Link className='link' to="/therapy">THERAPY</Link>
      </Figure.Caption>
    </Figure>
    </div>
      </> 
  );
}

export default LogoBox;