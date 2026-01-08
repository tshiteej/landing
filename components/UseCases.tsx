import Link from 'next/link'

export default function UseCases() {
  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">One AI, infinite possibilities</h2>
          <p className="text-gray-400 mt-4 text-lg">Tailor Knowtly to serve different teams in your organization.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-white/5 bg-surface-dark shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 group-hover:bg-blue-900/30 transition-colors">
              <span className="material-symbols-outlined text-3xl">support_agent</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">SaaS Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Handle Tier 1 support inquiries automatically. Reset passwords, explain features, and guide users without
              human intervention.
            </p>
            {/* <Link className="text-blue-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link> */}
          </div>
          <div className="p-8 rounded-2xl border border-white/5 bg-surface-dark shadow-lg hover:shadow-2xl hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20 group-hover:bg-purple-900/30 transition-colors">
              <span className="material-symbols-outlined text-3xl">library_books</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Docs Assistant</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Turn your static API documentation into an interactive conversation. Developers can ask &quot;How do I
              auth?&quot; and get code snippets.
            </p>
            {/* <Link className="text-purple-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              See example <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link> */}
          </div>
          <div className="p-8 rounded-2xl border border-white/5 bg-surface-dark shadow-lg hover:shadow-2xl hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 group-hover:bg-orange-900/30 transition-colors">
              <span className="material-symbols-outlined text-3xl">folder_shared</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Internal Knowledge</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Stop Slack interruptions. Let your team ask the bot about HR policies, engineering guidelines, or sales
              playbooks.
            </p>
            {/* <Link className="text-orange-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              View integration <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}

