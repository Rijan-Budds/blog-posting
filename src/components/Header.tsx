import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-primary-light transition-colors">
            My Blog
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
