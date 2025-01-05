import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "#EBEBEB", position: "relative" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        {/* Carousel Section - 100% width now */}
        <div className="col-md-12">
          <Carousel interval={10000}>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <div className="d-flex align-items-center">
                    {/* Image displayed as a small university logo */}
                    <img
                      className="rounded-circle"
                      src={value.img}
                      alt={`University Logo ${index + 1}`}
                      width="80" // Small size for the logo
                      height="80"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Label and Ort next to the image */}
                    <div className="ms-3 d-flex justify-content-between w-100">
                      <div>
                        <h3>{value.name}</h3>
                        <p>{value.degree}</p> 
                        <p>{value.thesis}</p>
                        <p>{value.mark}</p>
                      </div>
                      <div className="ms-auto">
                        <p>{value.ort}</p>
                        <p>{value.timeline}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>

      {/* Custom Navigation Buttons with Grey Color */}
      <div
        className="text-center mt-3"
        style={{
          position: "absolute",
          bottom: "20px", // Adjust to fit within the Jumbotron
          right: "20px", // Right side of the box
        }}
      >
        <button
          className="btn btn-secondary"
          onClick={() => document.querySelector('.carousel-control-prev').click()}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => document.querySelector('.carousel-control-next').click()}
        >
          Next
        </button>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
