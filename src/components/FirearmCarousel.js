import { Carousel } from "react-bootstrap";
const FirearmCarousel = ({ firearmObj }) => {
  return (
    <Carousel fade>
      <Carousel.Item className="firearm-carousel-item">
        <img className="d-block" src={firearmObj.titleImg} alt="First slide" />
      </Carousel.Item>
      {firearmObj.extraImg1 !== "" ? (
        <Carousel.Item className="firearm-carousel-item">
          <img
            className="d-block"
            src={firearmObj.extraImg1}
            alt="Second slide"
          />
        </Carousel.Item>
      ) : null}
      {firearmObj.extraImg2 !== "" ? (
        <Carousel.Item className="firearm-carousel-item">
          <img
            className="d-block"
            src={firearmObj.extraImg2}
            alt="Third slide"
          />
        </Carousel.Item>
      ) : null}
      {firearmObj.extraImg3 !== "" ? (
        <Carousel.Item className="firearm-carousel-item">
          <img
            className="d-block"
            src={firearmObj.extraImg3}
            alt="Fourth slide"
          />
        </Carousel.Item>
      ) : null}
    </Carousel>
  );
};

export default FirearmCarousel;
