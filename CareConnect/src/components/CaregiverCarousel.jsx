import { Card } from "@mui/material";
import Image from "mui-image";
import React from "react";
import Carousel from "react-material-ui-carousel";

function CaregiverCarousel(props) {
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
    <Carousel
      animation="slide"
      cycleNavigation={true}
      navButtonsAlwaysVisible={true}
      fullHeightHover={true}
      autoPlay={false}

    >
      {props.caregivers.map((item, i) => (
        <Card key={i}>
          <Image src={item.image} />
          <h3>{item.name}</h3>
          {getStars(item.rating)}
        </Card>
      ))}
    </Carousel>
  );
}

export default CaregiverCarousel;
