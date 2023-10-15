import { dummyCaregiverData } from "./CaregiverPage";
import { getStars } from "../components/CaregiverCarousel";
import { Button, Card } from "@mui/material";

function CaregiverMoreDetails() {
    const caregiver = dummyCaregiverData[2];

    return ( 
        <>
            <img src={caregiver.image} className="object-cover w-full h-22 pt-10"/>
            <div className="mx-4 pb-40">
                <Card className="my-2 py-2 text-center">
                    <h1 className="font-extrabold text-3xl">{caregiver.name}</h1>
                    {getStars(caregiver.rating)}
                </Card>
                <h2 className="font-bold text-2xl py-4">About Me</h2>
                <p>I&apos;m a dedicated Senior Healthcare Specialist with 15 years of experience in geriatric care. My focus is on delivering holistic, personalized care to seniors, specializing in chronic disease management, medication oversight, dementia care, and end-of-life support.</p>
                <h2 className="font-bold text-2xl py-4">Why Choose Me:</h2>
                <p>I&apos;m committed to enhancing the quality of life for seniors by providing respectful, empathetic, and high-quality care. Contact me at {caregiver.name}@CareConnect.com to discuss how I can assist you or your loved ones in their senior healthcare journey.</p>
                <div className="mt-6 flex items-center justify-center"><Button variant="contained">Remove From Caregivers</Button></div>
            </div>
        </>
     );
}

export default CaregiverMoreDetails;