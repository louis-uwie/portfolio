import Image from "next/image";
import profilePhoto from "../public/images/profile-photo.png";

export default function Home(){
  return (
    
    <div className="flex flex-wrap justify-center gap-8 items-center p-16 mt-32">
      <Image src={profilePhoto} width={300} height={300} alt="Profile Photo" className="top-0 rounded-full shadow-sm shadow-white"/>
      
        <div className="flex flex-row justify-center w-6/12 items-center">
      
          <div className="flex flex-col text-center text-left object-left gap-2">
            <h1 className="text-8xl font-bold">{`Hi, I'm Uwie!`}</h1>

            <p className="text-2xl font-bold text-rose-50">Graduating Student from Ateneo De Manila University.</p>

            <p className="text-xl text-rose-50">An aspiring <b className="font-semibold">software engineer</b> prepared to handle any challenges and opportunities alongside my fellow colleagues in the field of technology.</p>
        
            <p className="text-sm font-thin text-blue-950 mb-8 mt-8 italic mgr-4 p-4 bg-white rounded-xl">
              Former <b className="font-semibold">Intern</b> at DigiPlus Interactive Corporation. Former <b className="font-semibold">member</b> of the Logistics Team of Loyola Schools Of Placement and Career Services Organization of Ateneo De Manila University.
            </p>
          </div>
        </div>
    </div>

  )
}