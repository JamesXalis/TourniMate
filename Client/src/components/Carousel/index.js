import React, { useState } from 'react';
import Signup from '../Signup';
import Login from '../Login';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    component: () => <Login/>,
    id: 1,
    altText: 'Login',
    caption: 'Login',
  },
  {
    component: () => <Signup/>,
    id: 2,
    altText: 'Signup',
    caption: 'Signup',
  },
 
];

function CarouselContainer(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        {item.component()}
        
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              padding: 100px;
              color: white;
            }`
          }
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          className='m-3'
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className='m-2'
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default CarouselContainer;