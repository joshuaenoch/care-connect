import { Card } from "@mui/material";
import Image from "mui-image";
import React from "react";
import Slider from "react-slick";

function CaregiverCarousel(props) {
  let settings = {

  };

  const getStars = (rating) => {
    if (rating >= 5) {
      return "⭐⭐⭐⭐⭐";
    }
    if (rating <= 0) {
      return "⭐";
    }
    let stars = "";
    for (let index = 0; index < rating; index++) {
      stars += "⭐";
    }
    return stars;
  };
  return (
    <>
      <Slider
      dots= {true}
      infinite= {true}
      speed= {500}
      slidesToShow= {1}
      slidesToScroll= {1}
      >
        {props.caregivers.map((item, i) => (
          <div>
            <Card key={i}>
              <Image src={item.image} />
              <h3>{item.name}</h3>
              {getStars(item.rating)}
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default CaregiverCarousel;
