export default function HowItWorks() {
  return (
    <section className="py-24 bg-background-light border-y border-white/5" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Up and running in minutes</h2>
          <p className="text-gray-400 mt-4 text-lg">No complex setup. No training data required. Just connect and go.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent border-t border-dashed border-gray-700 z-0"></div>
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-surface-dark border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:border-primary group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
                cloud_upload
              </span>
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-white mb-3">1. Add Content</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Upload PDFs, Add Text, Connect Sitemap pages, or simply paste your website URL.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-surface-dark border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:border-primary group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
                psychology
              </span>
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-white mb-3">2. Train AI</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our AI automatically indexes and organizes your knowledge. It takes less than 2 minutes to train.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-surface-dark border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:border-primary group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
                code
              </span>
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-white mb-3">3. Embed Widget</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Copy a simple snippet of code and paste it into your site footer. Live instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

