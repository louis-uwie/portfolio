"use client"; // Ensure that server doesn't need to mind this component.

import Link from "next/link";
import dynamic from "next/dynamic";

const ResumePDF = dynamic(() => import("../components/resumePDF"), {
  ssr: false,
});

export default function PdfViewer() {
  return (
    <main className="flex flex-col justify-center items-center mb-8">
      <div className="text-3xl my-8 py-4 border-b-2 font-bold">
        Resume
        <a
          href="/BINWAG, Louis III - Resume.pdf"
          download="BINWAG, Louis III - Resume.pdf"
          aria-label="Download resume"
          className="inline-flex items-center gap-12 px-3 py-2 text-sm font-medium
                        hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
            />
          </svg>
        </a>
        <div className="text-sm font-semibold">Updated as of January 2026</div>
        <div className="text-sm italic font-light">
          Sensitive information are not included in my resume. Please{" "}
          <Link href="/contact" className="underline font-semibold">
            contact me
          </Link>{" "}
          through email for further inquiries!
        </div>
      </div>

      <ResumePDF></ResumePDF>
    </main>
  );
}
