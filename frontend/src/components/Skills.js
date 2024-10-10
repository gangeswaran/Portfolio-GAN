import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { img: meter1, name: "JavaScript" },
    { img: meter2, name: "C++" },
    { img: meter3, name: "Python" },
    { img: meter1, name: "ExpressJs" },
    { img: meter2, name: "ReactJs" },
    { img: meter3, name: "Bootstrap" },
    { img: meter1, name: "MongoDB" },
    { img: meter2, name: "PostgreSQL" },
    { img: meter3, name: "SQL" },
    { img: meter1, name: "GitHub" },
    { img: meter2, name: "Vercel" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are the technologies and tools I have worked with across various projects.<br></br> Ranging from programming languages to cloud services and frameworks.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {
                  skills.map((skill, index) => (
                    <div className="item" key={index}>
                      <img src={skill.img} alt="Image" />
                      <h5>{skill.name}</h5>
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
