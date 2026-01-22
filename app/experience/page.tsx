import ExperienceCard from "../components/experienceCard";
import experienceData from "../data/experience.json";

export default function ExperiencePage() {
  return (
    <div className="align-center justify-center items-center flex flex-col gap-12 p-8 mt-32">
      <p className="text-xl font-bold">This page is under construction!</p>
      Experience Page

      <div className="flex flex-col justify-center gap-12">
        <div className="flex flex-wrap justify-center gap-4">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
