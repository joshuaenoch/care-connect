import CaregiverCarousel from "../components/CaregiverCarousel";
import { TextField } from "@mui/material";

export const dummyCaregiverData = [
  {
    name: "Shirley",
    image: "./public/images/Shirley.avif",
    rating: 4,
  },
  {
    name: "Daniel",
    image: "./public/images/Daniel.webp",
    rating: 3,
  },
  {
    name: "Ben",
    image: "./public/images/Ben.webp",
    rating: 5,
  },
  {
    name: "Sarah",
    image: "./public/images/Sarah.webp",
    rating: 5,
  },
];

function CaregiverPage() {
  return (
    <div className=" text-center pt-20">
      <h1 className="font-extrabold text-3xl py-4">Caregivers</h1>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className="b bg-white"
      />
      <h2 className="font-bold text-2xl py-4">Assigned Caregivers</h2>
      <CaregiverCarousel caregivers={dummyCaregiverData.slice(2)} />
      <h2 className="font-bold text-2xl py-4">UW Caregivers</h2>
      <CaregiverCarousel caregivers={dummyCaregiverData} />
    </div>
  );
}

export default CaregiverPage;
