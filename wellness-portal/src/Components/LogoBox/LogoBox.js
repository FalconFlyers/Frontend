import Figure from "react-bootstrap/Figure";
import yoga from "../../Logos/yogalogo1.png";
import fitness from "../../Logos/fitnesslogo1.png";
import meditation from "../../Logos/meditationlogo.png";
import therapy from "../../Logos/therapylogo1.png";
import mindfulness from "../../Logos/mindfulnesslogo.png";
import "./LogoBox.css";
import { Link } from "react-router-dom";

function LogoBox() {
  return (
    <>
      <div className="box1">
        <Link className="link" to="/yoga">
          <Figure>
            <figimage>
              <img src={yoga} />
            </figimage>
            <Figure.Caption>YOGA</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/mindfulness">
          <Figure>
            <figimage>
              <img src={mindfulness} />
            </figimage>
            <Figure.Caption>MINDFULLNESS</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/meditation">
          <Figure>
            <figimage>
              <img src={meditation} />
            </figimage>
            <Figure.Caption> MEDITATION</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/therapy">
          <Figure>
            <figimage>
              <img src={therapy} />
            </figimage>
            <Figure.Caption>THERAPY</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/fitness">
          <Figure>
            <figimage>
              <img src={fitness} />
            </figimage>
            <Figure.Caption> FITNESS</Figure.Caption>
          </Figure>
        </Link>
      </div>
    </>
  );
}

export default LogoBox;
