import { Carousel } from "react-bootstrap";

const MyCarousel = (props) => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel_1.jpg"
            alt="Paramotor 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel_2.jpg"
            alt="Paramotor 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel_3.jpg"
            alt="Paramotor 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel_4.jpg"
            alt="Paramotor 4"
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      {props.welcome ? <h4>{props.welcome}</h4> : null}
    </div>
  );
};

export default MyCarousel;
