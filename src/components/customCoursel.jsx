import Carousel from 'react-bootstrap/Carousel';

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 290, objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Fresh groceries delivered fast.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 290, objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Daily essentials at best prices.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 290, objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Fast & reliable grocery service.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
