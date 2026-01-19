import Link from "next/link";

export default function NavbarComponent() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold hover:scale-110 transition-all duration-150">
          Home
        </Link>

        <div className="flex items-center gap-6">
        <Link href="/education" className="hover:font-bold transition-all duration-150">
            Education
        </Link>

        <Link href="/experience" className="hover:font-bold transition-all duration-150">
            Experience
        </Link>
        
        <Link href="/resume" className="hover:font-bold transition-all duration-150">
            Resume
        </Link>
        
        <Link href="/contact" className="hover:font-bold transition-all duration-150">
            Contact Me
        </Link>

        </div>
      </div>
    </nav>
  );
}
