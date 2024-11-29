import Carousel from 'react-bootstrap/Carousel';
import {Craouselitem} from "../Screencomponents/crauselitems"
import crimg1 from "../Image/carousel-1.jpg"
import crimg2 from "../Image/carousel-2.jpg"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Craouselitem img={crimg1}/>
      </Carousel.Item>
      <Carousel.Item>
      <Craouselitem img={crimg2}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;