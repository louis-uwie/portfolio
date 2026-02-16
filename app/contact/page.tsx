import Image from "next/image";
import profilePhoto from "../../public/images/profile-photo.png";

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8 mt-12 mx-auto w-[70vw] max-w-[70vw]">
      <div className="flex flex-row justify-center items-center bg-white min-h-128 min-w-252 text-black p-8 gap-12 drop-shadow-[0_20px_20px_rgba(255,255,255,.5)]">
        <div className="w-1/3 relative">
          <Image
            src={profilePhoto}
            width={300}
            height={300}
            alt="Profile Photo"
            className="top-0 rounded-full shadow-sm shadow-white z-10"
          />
        </div>

        <div className="w-2/3 flex flex-col justify-center items-center gap-12">
          <div className="text-center font-bold text-xl border-b-3 w-full pb-4">
            Let's Connect!
          </div>

          <div className="text-center mt-4 text-sm italic">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out to me through any of the
            platforms below!
          </div>

          <div className="flex flex-row gap-8 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/louisuwie2003/"
              target="_blank"
              className="hover:underline justify-center items-center flex flex-row gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              LinkedIn Profile
            </a>

            <a
              href="mailto:louisbinwagiii@gmail.com"
              target="_blank"
              className="hover:underline justify-center items-center flex flex-row gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Email Me!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
