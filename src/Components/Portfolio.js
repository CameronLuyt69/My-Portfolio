import React, { Component } from "react";
import Slider from "react-slick";
import Navigation from "./Navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../index.css';


class Portfolio extends Component {
  render() {
    const { data } = this.props;
    const carouselStyles = `
  .carousel-slide {
    position: relative;
    height: 600px; /* desktop */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-slide img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }

  .slick-prev, .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .slick-prev {
    left: -70px;
  }

  .slick-next {
    right: -70px;
  }

  .slick-prev:before, .slick-next:before {
    font-size: 21px;
    color: #fff;
    background-color: #525252;
    border-radius: 100%;
    display: block;
    text-align: center;
    transition: all 0.2s ease-in-out;
  }

  .slick-prev:hover:before, .slick-next:hover:before {
    background-color: #000000ff;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #525252;
    opacity: 1;
    transition: background-color 0.2s ease-in-out;
  }

  .slick-dots li.slick-active button:before {
    color: #3385c6;
  }

  .item-wrap {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    padding: 20px;
    height: 100%;
    background-color: rgba(82, 82, 82, 0.97);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-wrap:hover .overlay {
    opacity: 1;
  }

  .portfolio-item-meta {
    text-align: center;
    color: white;
  }

  .meta-buttons button {
    margin: 5px;
    padding: 8px 16px;
    background-color: #000000ff;
    border: none;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .meta-buttons button:hover {
    background-color: #3385c6;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .carousel-slide {
      height: 300px; /* smaller height on mobile */
    }
 .slick-dots li button:before {
    display: none;
  }

  .slick-dots li.slick-active button:before {
    display: none;
  }
    .slick-prev {
      left: 5px; /* closer to image */
    }

    .slick-next {
      right: 5px;
    }

    .slick-prev:before, .slick-next:before {
      display: none; /* smaller arrows */
      width: 36px;
      height: 36px;
      line-height: 36px;
    }

    .overlay {
      padding: 10px;
      line-height: 15px;
      font-size: 10px;
    }
  }

  @media (max-width: 480px) {
    .carousel-slide {
      height: 220px;
    }

    .slick-prev:before, .slick-next:before {
      font-size: 0;
      width: 28px;
      height: 28px;
      line-height: 28px;
    }

    .meta-buttons button {
      padding: 6px 12px;
      font-size: 12px;
    }
  }
`;


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
    };

    let projects = null;
    if (data?.projects) {
      projects = data.projects.map((project) => {
        // const projectImage =
        //   process.env.PUBLIC_URL + "/images/portfolio/" + project.image;
        const projectImage = "images/portfolio/" + project.image;
        return (
          <div key={project.title} className="carousel-slide">
            <div className="item-wrap">
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <div className="meta-buttons">
                    {project.url && (
                      <a
                        href={project.url}
                        title={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="view-code-btn">View Code</button>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        title={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="view-demo-btn">View Demo</button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <>
      
  <style>{carouselStyles}</style>
        <Navigation />
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out My Projects</h1>
              <Slider {...settings}>{projects}</Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
