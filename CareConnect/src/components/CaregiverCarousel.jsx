import { Card } from "@mui/material";
import { useMemo } from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

export const getStars = (rating) => {
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

function CaregiverCarousel(props) {
  const caregiversArrangement = useMemo(()=>{
    let chunks = [];
    let chunkSize = 2;

    for (let i = 0; i < props.caregivers.length; i += chunkSize) {
      chunks.push(props.caregivers.slice(i, i + chunkSize));
    }
    return chunks;
  }, [props.caregivers]);

  return (
    <Carousel
      animation="slide"
      cycleNavigation={true}
      fullHeightHover={true}
      navButtonsAlwaysVisible={caregiversArrangement.length>1}
      autoPlay={false}
      swipe={true}
      indicators={false}
      height={170}
      className="mx-10"
    >
      {caregiversArrangement.map((items, i) => {
        return(
        <div key={i} className="flex flex-row gap-4 h-40">
          {items.map((item, i) => {
            return (
              <Link key={i+"1"} to={"/CaregiverMoreDetails"} className="w-1/2 h-full">
                <Card className="h-full">
                  <img src={item.image} className="object-cover w-full h-3/5"/>
                  <h3>{item.name}</h3>
                  {getStars(item.rating)}
                </Card>
              </Link>
            )
          })}
        </div>
        )
      })}
    </Carousel>
  );
}

export default CaregiverCarousel;
