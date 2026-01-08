import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-32 bg-background-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Ready to automate your support?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join 500+ SaaS companies saving hours every day with Knowtly.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            className="flex items-center justify-center h-14 px-8 rounded-xl bg-primary text-white text-lg font-bold hover:bg-primary-hover transition-all shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] hover:scale-105"
            href="#"
          >
            Get Started for Free
          </Link>
          <Link
            className="flex items-center justify-center h-14 px-8 rounded-xl bg-white/5 text-white border border-white/10 text-lg font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
            href="#"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  )
}

