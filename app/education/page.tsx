import Image from "next/image";
import education from "../data/education.json";

export default function EducationPage() {
  return (
    <div className="education-page flex flex-col justify-center gap-8 items-center p-8 mt-32">
      {/* <h1 className="text-4xl font-bold mb-4">Education</h1> */}

      <p className="text-4xl font-bold">My Educational Background</p>

      <div className="education-list text-xl flex flex-col gap-4 border-t border-white ">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="education-item p-4 flex items-center gap-8"
          >
            {/* Image */}
            <Image
              src={`${edu.image}`}
              alt={`${edu.institution} Logo`}
              className="w-20 h-20 object-contain rounded-full"
              width={300}
              height={300}
            />

            {/* Details */}
            <div className="education-details flex flex-col">
              <h2 className="text-2xl font-bold">{edu.degree}</h2>
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                {edu.institution}
              </a>
              <p className="text-gray-200">
                {edu.start_year} - {edu.end_year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
