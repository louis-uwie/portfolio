'use client'; // Ensure that server doesn't need to mind this component.

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

export default function PdfViewer() {
    return (
    <main className="flex justify-center px-4">
        <Document
            file="/resume.pdf"
            loading={null}
            error={null}
        >
            <Page
            pageNumber={1}
            scale={1.5}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            />
        </Document>
        </main>
    );
}
