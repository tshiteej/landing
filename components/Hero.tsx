import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-background-dark overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/50 text-blue-300 text-xs font-bold uppercase tracking-wide mb-6 backdrop-blur-sm shadow-[0_0_10px_-2px_rgba(59,130,246,0.2)]">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span>New: GPT-4o Integration</span>
            </div> */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6">
              Turn Your Documentation into an{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Intelligent Support Agent
              </span>{' '}
              instantly.
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              Provide instant answers to your customers and teams. Reduce support
              tickets by 80% with AI trained on your unique data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-base font-bold shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)] hover:bg-primary-hover hover:scale-[1.02] transition-all"
                href="https://app.knowtly.app/register"
              >
                Create Your AI Bot
              </Link>
              {/* <Link
                className="flex items-center justify-center h-12 px-8 rounded-lg bg-white/5 text-gray-200 border border-white/10 text-base font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
                href="#"
              >
                View Demo
              </Link> */}
            </div>
            <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
              Free 7-day trial
              {/* <span className="w-1 h-1 bg-gray-700 rounded-full mx-1"></span>
              <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
              No credit card required */}
            </p>
          </div>
          <div className="relative lg:h-auto w-full aspect-square lg:aspect-auto flex items-center justify-center perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface-dark/80 backdrop-blur-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChF1ylF9VbRVkypwkDRKYmfdsFckeOzAkx9HP61Lt4yKZezdgbmmP7cMw-XB9ZIqSUcMcEdinWIKaeV5N46fvrOCXPVXoELEOLZ_hoF5WUQelLTOHYoTdnfk8QgUlBZzmvAl9ZaECYVg0pcf6pgC4OLv5uhjTJNeNuLmYER5wlzKzcy9XvwaHHdq5NjfaIlbsg9vlmZVamUzdQL_XxGlxE4FGzRI-b46yYr8rGZCNY1TIssDp5KpdLYr1GTJydleqw-W7Gx4et2-4')",
                  opacity: 0.1,
                  filter: 'grayscale(100%) invert(1)',
                }}
              ></div>
              <div className="absolute inset-0 flex flex-col p-6 z-10">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg ring-1 ring-white/10">
                      <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Knowtly Assistant</div>
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>{' '}
                        Online
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex justify-end">
                    <div className="bg-blue-600/90 text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-md backdrop-blur-sm border border-blue-500/20">
                      How do I integrate the API key?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-surface-light/80 text-gray-200 px-5 py-4 rounded-2xl rounded-tl-sm text-sm max-w-[90%] border border-white/5 shadow-lg backdrop-blur-md">
                      <p className="mb-3 text-gray-100">To integrate your API key, follow these steps:</p>
                      <ol className="list-decimal list-inside space-y-2 ml-1 text-gray-400">
                        <li>
                          Go to <span className="text-blue-400 font-medium">Settings &gt; Developers</span>.
                        </li>
                        <li>Click &quot;Generate New Key&quot;.</li>
                        <li>Copy the key to your .env file.</li>
                      </ol>
                      <div className="mt-3 pt-3 border-t border-white/5 text-xs text-gray-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">menu_book</span> Source: Developer Docs
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="h-12 bg-black/40 rounded-xl border border-white/10 w-full flex items-center px-4 text-gray-500 text-sm hover:border-white/20 transition-colors cursor-text shadow-inner">
                    Type your question...
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

