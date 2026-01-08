export default function TrustBadges() {
  return (
    <section className="py-12 bg-background-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-widest">
          Trusted by forward-thinking SaaS teams
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 hover:opacity-90 transition-opacity duration-500">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300">
            <span className="material-symbols-outlined">diamond</span> AcmeCorp
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300">
            <span className="material-symbols-outlined">layers</span> LayerStack
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300">
            <span className="material-symbols-outlined">bolt</span> BoltShift
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300">
            <span className="material-symbols-outlined">globe</span> GlobalBank
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300">
            <span className="material-symbols-outlined">code</span> CodeStream
          </div>
        </div>
      </div>
    </section>
  )
}

