import CaregiverCarousel from "../components/CaregiverCarousel";
import { TextField } from "@mui/material";

export const dummyCaregiverData = [
  {
    name: "Shirley",
    image: "https://firebasestorage.googleapis.com/v0/b/care-connect-proto-v1.appspot.com/o/Shirley.avif?alt=media&token=402e4028-5c04-4e80-b237-6f23f5f3e049",
    rating: 4,
  },
  {
    name: "Daniel",
    image: "https://firebasestorage.googleapis.com/v0/b/care-connect-proto-v1.appspot.com/o/Daniel.webp?alt=media&token=8c7c4cea-d880-4778-aff8-df81d263efcb",
    rating: 3,
  },
  {
    name: "Ben",
    image: "https://firebasestorage.googleapis.com/v0/b/care-connect-proto-v1.appspot.com/o/Ben.webp?alt=media&token=1750f4e1-ff2b-4e2f-8149-fcfcf9f95ff0",
    rating: 5,
  },
  {
    name: "Sarah",
    image: "https://firebasestorage.googleapis.com/v0/b/care-connect-proto-v1.appspot.com/o/Sarah.webp?alt=media&token=5a165136-e788-495e-bc3c-1bb5ad5395bd",
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
