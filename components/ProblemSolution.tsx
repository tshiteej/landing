export default function ProblemSolution() {
  return (
    <section className="py-24 bg-background-dark relative" id="solutions">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop drowning in support tickets</h2>
          <p className="text-lg text-gray-400">
            The old way involves endless manual replies and frustrated users waiting for answers. Knowtly delivers
            instant, accurate responses drawn directly from your knowledge base.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-surface-light/30 p-8 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden group hover:bg-surface-light/50 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/60 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
              <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <span className="material-symbols-outlined text-red-400">warning</span>
                </div>
                Common Pain Points
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-red-400/70 text-xl mt-0.5">close</span>
                  <span>24+ hour response times leading to churn.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-red-400/70 text-xl mt-0.5">close</span>
                  <span>Repetitive questions (&quot;How do I reset password?&quot;) wasting agent time.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="material-symbols-outlined text-red-400/70 text-xl mt-0.5">close</span>
                  <span>Outdated documentation that users can&apos;t find.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-surface-light/40 to-blue-900/10 p-8 rounded-2xl border border-blue-500/20 shadow-xl relative overflow-hidden group ring-1 ring-blue-500/20 hover:ring-blue-500/40 transition-all">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                The Knowtly Solution
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shadow-blue-500/50">check</span>
                  <span>
                    <strong>Instant answers</strong> available 24/7/365.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">check</span>
                  <span>
                    Deflects up to <strong>80% of routine tickets</strong> automatically.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">check</span>
                  <span>Always synced with your latest Docs, or URL content.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl opacity-40"></div>
            <div className="relative bg-surface-dark rounded-2xl shadow-2xl border border-white/10 overflow-hidden ring-1 ring-white/5">
              <div className="bg-black/40 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="text-xs text-gray-600 ml-2 font-mono">knowtly-widget</div>
              </div>
              <div className="p-8 bg-surface-dark/95 backdrop-blur" style={{ minHeight: '450px' }}>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 border border-gray-600"></div>
                    <div className="bg-surface-light p-4 rounded-2xl rounded-tl-none text-sm text-gray-200 border border-white/10 shadow-sm">
                      Can I invite team members on the Starter plan?
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex-shrink-0 flex items-center justify-center text-white shadow-lg border border-blue-500/30">
                      <span className="material-symbols-outlined text-sm">smart_toy</span>
                    </div>
                    <div className="bg-blue-900/10 border border-blue-500/20 p-5 rounded-2xl rounded-tr-none text-sm text-gray-200 shadow-sm w-full backdrop-blur-sm">
                      <p className="mb-3">
                        Yes! The Starter plan includes up to <strong>5 team members</strong>.
                      </p>
                      <p className="mb-2">To invite them:</p>
                      <ol className="list-decimal ml-4 space-y-2 text-gray-400 text-xs">
                        <li>Go to Team Settings</li>
                        <li>Click &quot;Invite Member&quot;</li>
                        <li>Enter their email address</li>
                      </ol>
                      {/* <button className="mt-4 text-blue-400 text-xs font-bold hover:text-blue-300 flex items-center gap-1 group/btn">
                        Read full article{' '}
                        <span className="group-hover/btn:translate-x-0.5 transition-transform">↗</span>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-surface-light p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/10 text-green-400 p-2.5 rounded-lg border border-green-500/20">
                      <span className="material-symbols-outlined">trending_down</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Ticket Volume</div>
                      <div className="text-xl font-bold text-white">-78%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

