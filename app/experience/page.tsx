import ExperienceCard from "../components/experienceCard";
import experienceData from "../data/experience.json";

export default function ExperiencePage() {
  return (
    <div className="align-center justify-center items-center flex flex-col p-8 mt-12">
      <div className="flex flex-col justify-center gap-12">
        <div className="flex flex-col justify-center items-center gap-4 mb-8 border-b border-white pb-4">
          <p className="text-4xl font-bold">Experiences</p>
        </div>

        <div className="flex flex-wrap justify-center gap-16">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
