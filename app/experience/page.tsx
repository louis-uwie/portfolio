import ExperienceCard from "../components/experienceCard";
import experienceData from "../data/experience.json";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="align-center justify-center items-center flex flex-col p-4 mt-12">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col justify-center items-center gap-4 mb-8 border-b border-white pb-4">
          <p className="text-4xl font-bold">Experiences</p>
          <Link
            href="/contact"
            className="underline font-semibold italic text-sm"
          >
            You can also visit my Github profile!
          </Link>{" "}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
