import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gear from "../images/gear.jpg";
import Rifle from "../images/rifle.jpg";
import Smg from "../images/smg.jpg";
import Pistol from "../images/pistol.jpeg";
import "../styles/HomeView.css";
import FeaturedProducts from "../components/Featured/FeaturedProducts";
const HomeView = () => {
  return (
    <div id="home-view">
      <Carousel>
        <Carousel.Item interva={5000}>
          <img className="d-block" src={Smg} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <Link className="btn btn-primary carousel-btn" to="/signup">
            REGISTER
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block" src={Pistol} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          <Link className="btn btn-primary carousel-btn" to="/pistols">
            SHOP PISTOLS
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block" src={Rifle} alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          <Link className="btn btn-primary carousel-btn" to="/rifles">
            SHOP RIFLES
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block" src={Gear} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
          <Link className="btn btn-primary carousel-btn" to="/gear">
            SHOP GEAR
          </Link>
        </Carousel.Item>
      </Carousel>
      <div>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default HomeView;
