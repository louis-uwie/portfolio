import Image from "next/image";
import profilePhoto from "./static/images/profile-photo.png";

export default function Home(){
  return (
    
    <div className="flex flex-wrap justify-center items-center mt-32 mb-16 px-4 gap-12">
      <Image src={profilePhoto} width={200} height={200} alt="Profile Photo" className="top-0 rounded-full"/>
      
        <div className="flex flex-row gap-16 justify-center items-center">
      
          <div className="flex-col text-center max-w-xl text-left object-left">
            <h1 className="text-8xl font-bold">{`Hi, I'm Uwie!`}</h1>
            <p className="text-3xl">
              An aspiring <b className="font-semibold">software engineer</b> prepared to handle any challenges and opportunities alongside my fellow colleagues in the field of technology.
            </p>
          
            <p className="text-sm font-thin text-white mb-8 mt-4 italic mgr-4 p-1">
              Former <b className="font-semibold">Intern</b> at DigiPlus Interactive Corporation. Former <b className="font-semibold">member</b> of the Logistics Team of Loyola Schools Of Placement and Career Services Organization of Ateneo De Manila University.
            </p>
          </div>

        </div>

    </div>

  )
}