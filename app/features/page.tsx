import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <main className="bg-background-dark">
      <Header />
      
      {/* Secondary Navigation (Anchor Links) */}
      <div className="sticky top-16 z-40 border-b border-white/5 bg-background-dark/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center gap-1 overflow-x-auto no-scrollbar">
            <a className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-primary bg-primary/10" href="#training">
              Training
            </a>
            <a className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors" href="#qa">
              Q&A Engine
            </a>
            <a className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors" href="#analytics">
              Analytics
            </a>
            <a className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors" href="#philosophy">
              Why Knowtly
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-background-dark overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Everything Knowtly Can Do Today —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Built for Clarity.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 mb-10">
              Turn your static documentation into an expert support agent in minutes. No hallucinations, just accurate answers strictly derived from your own content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all w-full sm:w-auto flex items-center justify-center"
                href="#"
              >
                Start Free Trial
              </Link>
              <Link
                className="h-12 px-8 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-bold text-base hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-primary">play_circle</span>
                See How It Works
              </Link>
            </div>
          </div>
          
          {/* Hero Image Abstract */}
          
        </div>
      </section>

      {/* Feature 1: Training */}
      <section className="py-20 lg:py-32 bg-background-light border-y border-white/5" id="training">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl bg-surface-dark p-8 aspect-square lg:aspect-[4/3] flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden group">
                {/* Decorative Abstract for Upload */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <div className="relative bg-surface-light/80 p-6 rounded-xl shadow-lg w-3/4 max-w-sm text-center transform group-hover:scale-105 transition-transform duration-500 border border-white/10">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4">cloud_upload</span>
                  <div className="space-y-3">
                    <div className="h-2 w-2/3 mx-auto bg-white/10 rounded-full"></div>
                    <div className="h-2 w-1/2 mx-auto bg-white/10 rounded-full"></div>
                  </div>
                  <div className="mt-6 flex justify-center gap-3">
                    <span className="material-symbols-outlined text-gray-400 text-3xl">description</span>
                    <span className="material-symbols-outlined text-gray-400 text-3xl">link</span>
                    <span className="material-symbols-outlined text-gray-400 text-3xl">folder_zip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                Knowledge Ingestion
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Train on Your Content.<br />In Seconds, Not Weeks.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Upload PDFs, Word docs, Sitemaps, or simply enter a URL. Knowtly ingests your knowledge base instantly and prepares it for answering user queries. No complex setup or coding required.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">check_circle</span>
                  <span className="text-gray-300 font-medium">Supports PDF, DOCX, TXT, and CSV</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">check_circle</span>
                  <span className="text-gray-300 font-medium">One-click sitemap crawling</span>
                </li>
                {/* <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">check_circle</span>
                  <span className="text-gray-300 font-medium">Auto-sync when content changes</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Q&A */}
      <section className="py-20 lg:py-32 bg-background-dark border-y border-white/5" id="qa">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                AI Accuracy
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Instant Answers.<br />Strictly from Your Data.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Your visitors get instant, accurate answers derived strictly from the content you uploaded. We prioritize accuracy over creativity to eliminate hallucinations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* <div className="flex flex-col gap-2">
                  <div className="bg-surface-dark p-3 rounded-lg shadow-sm border border-white/10 w-fit">
                    <span className="material-symbols-outlined text-primary">fact_check</span>
                  </div>
                  <h3 className="font-bold text-white">Source Citations</h3>
                  <p className="text-sm text-gray-400">Every answer links back to the original source material for trust.</p>
                </div> */}
                <div className="flex flex-col gap-2">
                  <div className="bg-surface-dark p-3 rounded-lg shadow-sm border border-white/10 w-fit">
                    <span className="material-symbols-outlined text-primary">lock</span>
                  </div>
                  <h3 className="font-bold text-white">Anti-Hallucination</h3>
                  <p className="text-sm text-gray-400">AI is instructed to say "I don't know" if the answer isn't in your docs.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl bg-surface-dark p-6 shadow-2xl border border-white/10">
                {/* Chat Bubble User */}
                <div className="flex justify-end mb-4">
                  <div className="bg-primary text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm font-medium shadow-md">
                    How do I add a team member to my project?
                  </div>
                </div>
                {/* Chat Bubble Bot */}
                <div className="flex justify-start mb-6">
                  <div className="bg-surface-light/80 text-gray-200 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm">
                    <p className="text-sm leading-relaxed mb-3 text-gray-100">To add a team member, navigate to Settings &gt; Team Management and click the "Invite Member" button.</p>
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
                      {/* <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Source:</span> */}
                      {/* <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 cursor-pointer hover:bg-primary/20">
                        <span className="material-symbols-outlined text-[14px]">description</span>
                        User Guide.pdf (p. 12)
                      </span> */}
                    </div>
                  </div>
                </div>
                {/* Chat Input */}
                <div className="relative">
                  <div className="h-12 w-full bg-surface-light/50 border border-white/10 rounded-lg flex items-center px-4 justify-between">
                    <span className="text-gray-500 text-sm">Ask a question...</span>
                    <span className="material-symbols-outlined text-gray-500">send</span>
                  </div>
                </div>
              </div>
              {/* Decorative back element */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 blur-2xl -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Analytics */}
      <section className="py-20 lg:py-32 bg-background-light border-y border-white/5" id="analytics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-white/10">
                {/* Graph Mockup */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-4 w-24 bg-gray-700 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <div className="text-gray-400 text-xs mb-1">Total Queries</div>
                    <div className="text-white text-2xl font-bold">12,405</div>
                    <div className="text-green-400 text-xs mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">trending_up</span> +12%
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <div className="text-gray-400 text-xs mb-1">Resolution Rate</div>
                    <div className="text-white text-2xl font-bold">94.2%</div>
                    <div className="text-green-400 text-xs mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">trending_up</span> +2.1%
                    </div>
                  </div>
                </div>
                <div className="h-32 w-full flex items-end gap-2 px-2">
                  <div className="w-full bg-primary/20 h-[40%] rounded-t-sm"></div>
                  <div className="w-full bg-primary/40 h-[60%] rounded-t-sm"></div>
                  <div className="w-full bg-primary/60 h-[50%] rounded-t-sm"></div>
                  <div className="w-full bg-primary h-[80%] rounded-t-sm relative shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  <div className="w-full bg-primary/50 h-[65%] rounded-t-sm"></div>
                  <div className="w-full bg-primary/30 h-[45%] rounded-t-sm"></div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                Deep Insights
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Know What Your Customers Are Asking.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Uncover gaps in your documentation with powerful analytics. See exactly what questions users are asking and identify where the AI couldn't find an answer, so you can improve your content.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <span className="material-symbols-outlined">query_stats</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Query Analysis</h4>
                    <p className="text-sm text-gray-400 mt-1">Track most frequent topics and questions over time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400">
                    <span className="material-symbols-outlined">sentiment_dissatisfied</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Missed Questions</h4>
                    <p className="text-sm text-gray-400 mt-1">See exactly when the bot said "I don't know" to fill content gaps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section / Philosophy */}
      <section className="py-20 bg-background-dark border-t border-white/5" id="philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Not many features. The <span className="text-primary italic">right</span> features.
            </h2>
            <p className="text-lg text-gray-400">
              We don't bloat our software with bells and whistles. We focus entirely on making your support faster, clearer, and more autonomous.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-dark p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[28px]">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast Setup</h3>
              <p className="text-gray-400 leading-relaxed">
                No complex flows to build. Just upload your data and paste the snippet. You're live in 5 minutes.
              </p>
            </div>
            <div className="bg-surface-dark p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[28px]">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Your data is isolated and encrypted. We never train public models on your private documentation.
              </p>
            </div>
            <div className="bg-surface-dark p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[28px]">palette</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Branding</h3>
              <p className="text-gray-400 leading-relaxed">
                Customize the widget to match your brand colors, logo, and tone of voice effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Knowtly wins on trust</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-surface-dark">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-light/50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-400 w-1/2" scope="col">Feature</th>
                  <th className="px-6 py-4 font-bold text-gray-400 text-center w-1/4" scope="col">Generic Chatbots</th>
                  <th className="px-6 py-4 font-bold text-primary text-center w-1/4 bg-primary/10" scope="col">Knowtly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-surface-dark">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-300">Trained strictly on your content</td>
                  <td className="px-6 py-4 text-center text-gray-500"><span className="material-symbols-outlined">close</span></td>
                  <td className="px-6 py-4 text-center text-primary bg-primary/10"><span className="material-symbols-outlined">check_circle</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-300">Zero Hallucinations Guarantee</td>
                  <td className="px-6 py-4 text-center text-gray-500"><span className="material-symbols-outlined">close</span></td>
                  <td className="px-6 py-4 text-center text-primary bg-primary/10"><span className="material-symbols-outlined">check_circle</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-300">Citations & Source Links</td>
                  <td className="px-6 py-4 text-center text-gray-500"><span className="material-symbols-outlined">close</span></td>
                  <td className="px-6 py-4 text-center text-primary bg-primary/10"><span className="material-symbols-outlined">check_circle</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-300">Unlimited PDF Uploads</td>
                  <td className="px-6 py-4 text-center text-gray-500"><span className="material-symbols-outlined">close</span></td>
                  <td className="px-6 py-4 text-center text-primary bg-primary/10"><span className="material-symbols-outlined">check_circle</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            <details className="group rounded-lg bg-surface-dark p-4 shadow-sm border border-white/10 open:border-primary/50 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-white list-none">
                <span>Can I connect multiple data sources?</span>
                <span className="material-symbols-outlined transition group-open:rotate-180 text-gray-400">expand_more</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Yes! You can mix and match. Upload PDFs, add text, and crawl your public website all in one Knowtly agent.
              </p>
            </details>
            <details className="group rounded-lg bg-surface-dark p-4 shadow-sm border border-white/10 open:border-primary/50 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-white list-none">
                <span>How does updating content work?</span>
                <span className="material-symbols-outlined transition group-open:rotate-180 text-gray-400">expand_more</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                For URLs, we can re-crawl automatically on a schedule. For uploaded files, simply drag and drop the new version, and we'll re-index the changes in seconds.
              </p>
            </details>
            <details className="group rounded-lg bg-surface-dark p-4 shadow-sm border border-white/10 open:border-primary/50 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-white list-none">
                <span>Is my data secure?</span>
                <span className="material-symbols-outlined transition group-open:rotate-180 text-gray-400">expand_more</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Absolutely. Data is encrypted at rest and in transit. We strictly use your data for retrieval and do not use it to train foundation models.
              </p>
            </details>
            <details className="group rounded-lg bg-surface-dark p-4 shadow-sm border border-white/10 open:border-primary/50 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-white list-none">
                <span>Can I embed this on WordPress/Shopify?</span>
                <span className="material-symbols-outlined transition group-open:rotate-180 text-gray-400">expand_more</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Yes. Knowtly provides a simple Javascript snippet that works on any website builder, including WordPress, Shopify, Webflow, and custom apps and websites.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden bg-background-dark text-white border-t border-white/5">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-background-dark opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to automate your support?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-10">
            Join others who use Knowtly to provide instant answers and reduce support ticket volume by 40%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="h-14 px-8 rounded-lg bg-primary text-white font-bold text-lg shadow-lg hover:bg-primary-hover transition-all w-full sm:w-auto flex items-center justify-center text-center"
              href="#"
            >
              Start Using Knowtly
            </Link>
            <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
              Free 7-day trial
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

