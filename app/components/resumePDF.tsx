"use client"; // Ensure that server doesn't need to mind this component.

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function ResumePDF() {
  return (
    <div className="flex justify-center">
      <Document file="/resume.pdf">
        <Page
          pageNumber={1}
          scale={1.3}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
