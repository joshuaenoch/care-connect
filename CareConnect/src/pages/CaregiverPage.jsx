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
      <h1 style={{padding:"115px 0px 20px 0px", textAlign: "center"}}>Caregivers</h1>
      <input type="text" style={{display: "block", margin:"0 auto"}} placeholder="Search caregivers..."></input>
      <div style={{margin: "30px auto 90px auto", maxWidth: "200px"}}>
        <h2 style={{marginBottom:"10px"}}>Assigned Caregivers</h2>
        <CaregiverCarousel caregivers={dummyCaregiverData.slice(2)} />
        <h2 style={{margin:"20px 0px 10px 0px"}}>UW Caregivers</h2>
        <CaregiverCarousel caregivers={dummyCaregiverData} />
      </div>
    </>
  );
}

export default CaregiverPage;
