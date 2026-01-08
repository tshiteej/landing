import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="text-primary relative group">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-3xl relative z-10">smart_toy</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Knowtly</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/features">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#how-it-works">
              How it Works
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#solutions">
              Solutions
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/integrations">
              Integrations
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="/#faq">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link className="hidden sm:flex text-sm font-semibold text-gray-300 hover:text-white px-3 py-2" href="#">
              Log In
            </Link>
            <Link
              className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-all shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.7)]"
              href="#"
            >
              Create Your AI Bot
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

