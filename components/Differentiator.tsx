export default function Differentiator() {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/5 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface-dark/50 backdrop-blur-sm text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/10 rounded-full blur-[60px]"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wide mb-8 shadow-inner">
              <span className="material-symbols-outlined text-sm">shield</span>
              <span>Enterprise Grade Security</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Not just another generic wrapper</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Most AI bots hallucinate or make up facts. Knowtly is strictly{' '}
              <span className="text-white font-bold underline decoration-primary decoration-4 underline-offset-4 decoration-skip-ink-none">
                bounded by your context
              </span>
              . If the answer isn&apos;t in your docs, it won&apos;t invent one.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <div className="bg-green-500/20 rounded-full flex items-center justify-center w-8 h-8">
                  <span className="material-symbols-outlined text-green-400 text-lg">check</span>
                </div>
                <span className="font-medium text-sm text-gray-200">Anti-Hallucination Guardrails</span>
              </div>
              {/* <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <div className="bg-green-500/20 rounded-full flex items-center justify-center w-8 h-8">
                  <span className="material-symbols-outlined text-green-400 text-lg">check</span>
                </div>
                <span className="font-medium text-sm text-gray-200">Citations & Source Links</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <div className="bg-green-500/20 rounded-full flex items-center justify-center w-8 h-8">
                  <span className="material-symbols-outlined text-green-400 text-lg">check</span>
                </div>
                <span className="font-medium text-sm text-gray-200">SOC-2 Compliant Data</span>
              </div> */}
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                <div className="bg-green-500/20 rounded-full flex items-center justify-center w-8 h-8">
                  <span className="material-symbols-outlined text-green-400 text-lg">check</span>
                </div>
                <span className="font-medium text-sm text-gray-200">Custom Brand Tone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

