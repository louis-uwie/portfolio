export default function ContactPage() {
  return (
    <div className="align-center justify-center items-center flex flex-col gap-4 p-8 mt-12">
      <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
        <div className="bg-white min-h-128 min-w-252 text-black p-8 drop-shadow-[0_20px_20px_rgba(255,255,255,.5)]">
          <div className="text-center font-bold text-xl border-b-2">
            Let's Connect!
          </div>

          <div className="text-center mt-4 text-sm italic">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out to me through any of the
            platforms below!
          </div>

          <div className="flex flex-col gap-4 mt-8 bg-blue">
            <a
              href="mailto:louisbinwagiii@gmail.com"
              className="hover:underline"
            >
              Email me
            </a>
          </div>
          <div className="flex flex-col gap-4 mt-8"></div>
        </div>
      </div>
    </div>
  );
}
