import CaregiverCarousel from "../components/CaregiverCarousel";

const dummyCaregiverData = [
  {
    name: "Shirley",
    image: "unsplash.com",
    rating: 5,
  },
  {
    name: "Daniel",
    image: "unsplash.com",
    rating: 3,
  },
  {
    name: "Ben",
    image: "unsplash.com",
    rating: 5,
  },
  {
    name: "Sarah",
    image: "unsplash.com",
    rating: 4,
  },
];

function CaregiverPage() {
  return (
    <>
      <h1>Caregivers</h1>
      <input type="text"></input>
      <h2>Assigned Caregivers</h2>
      <CaregiverCarousel caregivers={dummyCaregiverData.slice(2)} />
      <h2>UW Caregivers</h2>
      <CaregiverCarousel caregivers={dummyCaregiverData} />
    </>
  );
}

export default CaregiverPage;
