import { dummyCaregiverData } from "./CaregiverPage";
import { getStars } from "../components/CaregiverCarousel";

function CaregiverMoreDetails() {
    const caregiver = dummyCaregiverData[2];

    return ( 
        <>
            <img src={caregiver.image} className="object-cover w-full h-2/5"/>
            <div className="mx-4 pb-20">
                <h1 className="font-extrabold text-3xl my-4">{caregiver.name}</h1>
                {getStars(caregiver.rating)}
                <h2 className="font-bold text-2xl py-4">About Me</h2>
                <p>I&apos;m a dedicated Senior Healthcare Specialist with 15 years of experience in geriatric care. My focus is on delivering holistic, personalized care to seniors, specializing in chronic disease management, medication oversight, dementia care, and end-of-life support.</p>
                <h2 className="font-bold text-2xl py-4">Why Choose Me:</h2>
                <p>I&apos;m committed to enhancing the quality of life for seniors by providing respectful, empathetic, and high-quality care. Contact me at {caregiver.name}@CareConnect.com to discuss how I can assist you or your loved ones in their senior healthcare journey.</p>
            </div>
        </>
     );
}

export default CaregiverMoreDetails;