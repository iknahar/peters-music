import React from "react";
import AboutSlide1 from "../../images/AboutSlide1.jpg";
import AboutSlide2 from "../../images/AboutSlide2.jpg";
import AboutSlide3 from "../../images/AboutSlide3.jpg";

import { Carousel } from "react-bootstrap";

const About = () => {
  return (
    <div className="bg-dark">
      <div className="text-center text-info">
        <h2 className="text-warning">About Us</h2>
        <hr className="text-center text-white w-75 mx-auto" />

        <p className="m-0 text-white p-5 w-75 mx-auto">
          Our music school or conservatoire teaches music in all its aspects. It
          may be called a college of music, or academy of music or conservatory
          (American English) or a conservatorium (Australian English). In 1905,
          the Institute of Musical Art, Juilliard's predecessor institution, was
          founded on the premise that the United States did not have a premier
          music school and too many students were going to Europe to study
          music. In 1919, a wealthy textile merchant named Augustus Juilliard
          died and left the school in his will the largest single bequest for
          the advancement of music at that time.
        </p>
        <Carousel>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-75 rounded mx-auto"
              src={AboutSlide1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Evening Get Together</h3>
              <p>A day every week we spent together</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-75 rounded mx-auto"
              src={AboutSlide2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Graduate Performs</h3>
              <p>Graduates Perform before the graduation ceremony every year</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 rounded mx-auto"
              src={AboutSlide3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Annual Concert</h3>
              <p>
                The super jamming concert happens in a year
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr className="text-center text-white w-25 mt-5 mx-auto" />
        <h3 className="m-0 text-white p-1">We Breathe Music</h3>
        <p className="m-0 text-white p-5 w-75 mx-auto">
          A music school or conservatoire teaches music in all its aspects. It
          may be called a college of music, or academy of music or conservatory
          (American English) or a conservatorium (Australian English). Music
          schools exist at different levels: The term conservatory is often used
          for specialized university-grade schools that train people who want a
          career as a music artist, dance or theatre performer. These people
          then study how to play musical instruments, singing, composition,
          musicology, music history and music theory. Several high schools also
          offer an education in music. In these high schools, the subjects are
          integrated into a normal school curriculum. The third type of music
          school is independent of the other education a child or adults gets.
          These schools are often organised as associations, or they are run by
          a theatre. Pupils can learn how to sing, play an instrument, or be a
          dancer or actor in a theatre play, outside a context of regular
          schooling.
        </p>
      </div>
    </div>
  );
};

export default About;
