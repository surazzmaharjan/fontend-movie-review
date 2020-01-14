import React, { useState } from 'react';
import MainHeader from '../components/common/homeHeader';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Container,Row,Col
} from 'reactstrap';
import '../components/css/homepage.css';
import HomePageMovies from './homepageMovieList';


const items = [
  {
    src:'/images/2.jpg',
    altText: 'Maximum Ride',
    caption: 'Six children, genetically cross-bred with avian DNA, take flight around the country to discover their origins. Along the way, their mysterious past is ...'
  },
  {
    src:'/images/3.jpg',
    altText: 'Independence',
    caption: 'The fate of humanity hangs in the balance as the U.S. President and citizens decide if these aliens are to be trusted ...or feared.'
  },
  {
    src:'/images/4.jpg',
    altText: 'Central Intelligence',
    caption: 'Bullied as a teen for being overweight, Bob Stone (Dwayne Johnson) shows up to his high school reunion looking fit and muscular. Claiming to be on a top-secret ...'

  },
  {
    src:'/images/5.jpg',
    altText: 'Tarzan',
    caption: 'Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.'
  },
  {
    src:'/images/6.jpg',
    altText: 'Ice Age',
    caption: 'In the films epilogue, Scrat keeps struggling to control the alien ship until it crashes on Mars, destroying all life on the planet.'
  },
  {
    src:'/images/7.jpg',
    altText: 'The Conjuring 2',
    caption: '     A 2016 American supernatural horror film, directed by James Wan. The screenplay is by Chad Hayes, Carey W. Hayes, Wan...'
  }
];

const Home = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <MainHeader/>
      <Container className="main-container"><Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <div>
    <Row>
        <Col className="homepage-title">ALL MOVIE LIST</Col>
       
      </Row>
    </div>

    <HomePageMovies/>
    
    </Container>
    

    </div>
  );
}

export default Home;