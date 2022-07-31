import Figure from 'react-bootstrap/Figure';
import yoga from "../../Logos/yoga.jpeg";
import fitness from "../../Logos/fitness.jpg";
import meditation from "../../Logos/meditation.jpeg";
import therapy from  "../../Logos/therapy.jpg";
import mindfulness from  "../../Logos/mindfulness.jpg";
import "./LogoBox.css"


// import Row from "react-bootstrap/Row"
function LogoBox() {
  return (
      <>
      <div className="container" style={{paddingTop:"1%",paddingBottom:"2%"}}>
    <Figure   >
      <Figure.Image 
         width={100}
         height={100}
        // alt="171x180"
        src={yoga}
      />
      <Figure.Caption style={{fontFamily:"bold",fontSize:"17px",color:"grey"}}>
        YOGA
      </Figure.Caption>
      </Figure>
      <Figure >
      <Figure.Image
         width={110}
         height={95}
        // alt="171x180"
        src={meditation}
      />
      <Figure.Caption style={{fontFamily:"bold",fontSize:"17px",color:"grey"}} >
      
      MEDITATION
      </Figure.Caption>
      </Figure>
      <Figure >
      <Figure.Image
        width={140}
        height={100}
        // alt="171x180"
        src={fitness}
      />
      <Figure.Caption style={{fontFamily:"bold",fontSize:"17px",color:"grey"}}>
      FITNESS
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
      MINDFULLNESS
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
      THERAPY
      </Figure.Caption>
    </Figure>
    </div>
      </> 
  );
}

export default LogoBox;