import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations - Knowtly',
  description: 'Direct integrations with your favorite tools. Let Knowtly answer support questions over your customer communication channels of choice.',
  robots: {
    index: true,
    follow: true,
  },
}

const dataSourceIntegrations = [
  {
    name: 'Text',
    icon: 'text_fields',
    description: 'Add text directly to train your chatbot with custom content, FAQs, and knowledge base information.',
    status: 'available',
  },
  {
    name: 'Sitemap',
    icon: 'map',
    description: 'Automatically crawl and index your website using sitemap URLs to keep your chatbot up-to-date with your latest content.',
    status: 'available',
  },
  {
    name: 'Links',
    icon: 'link',
    description: 'Add individual URLs or web pages to train your chatbot on specific content from across the web.',
    status: 'available',
  },
  {
    name: 'Google Drive',
    icon: 'cloud',
    description: 'Seamlessly access and sync chatbot training data stored in Google Drive, enabling easy management and updating of resources.',
    status: 'coming-soon',
  },
  {
    name: 'Dropbox',
    icon: 'folder',
    description: 'Integrate with Dropbox to utilize stored documents and files for chatbot training, ensuring data is readily available and up-to-date.',
    status: 'coming-soon',
  },
  // {
  //   name: 'OneDrive',
  //   icon: 'cloud_done',
  //   description: 'Leverage OneDrive for cloud-based storage of chatbot training materials, offering easy access and collaboration features.',
  //   status: 'coming-soon',
  // },
  // {
  //   name: 'SharePoint',
  //   icon: 'share',
  //   description: 'Utilize SharePoint to organize and share chatbot training documents within a team, supporting efficient content management.',
  //   status: 'coming-soon',
  // },
  // {
  //   name: 'Zendesk',
  //   icon: 'support_agent',
  //   description: 'Integrate with Zendesk to access its help center content, providing a rich source of information for training your chatbot.',
  //   status: 'coming-soon',
  // },
  // {
  //   name: 'Gitbook',
  //   icon: 'menu_book',
  //   description: 'Connect with Gitbook to access structured documentation and knowledge bases, enriching the chatbot\'s learning resources.',
  //   status: 'coming-soon',
  // },
  // {
  //   name: 'Box',
  //   icon: 'inventory_2',
  //   description: 'Incorporate Box for secure cloud storage of training data, ensuring safe and organized access to chatbot resources.',
  //   status: 'coming-soon',
  // },
  {
    name: 'Notion',
    icon: 'description',
    description: 'Link with Notion to harness extensive notes and organized data for training, enhancing the chatbot\'s knowledge base.',
    status: 'coming-soon',
  },
  // {
  //   name: 'Freshdesk',
  //   icon: 'headset_mic',
  //   description: 'Integrate with Freshdesk to access and utilize help center articles, providing a rich source of information for training your chatbot.',
  //   status: 'coming-soon',
  // },
  // {
  //   name: 'Confluence',
  //   icon: 'article',
  //   description: 'Use Confluence as a source of comprehensive documentation and collaborative content, providing rich training material for the chatbot.',
  //   status: 'coming-soon',
  // },
  // {
  //   name: 'Intercom',
  //   icon: 'chat',
  //   description: 'Integrate with Intercom to access and leverage help center articles, enriching your chatbot\'s knowledge base and improving its response accuracy.',
  //   status: 'coming-soon',
  // },
  {
    name: 'YouTube',
    icon: 'play_circle',
    description: 'Train your chatbot using YouTube videos, playlists, and channels to provide comprehensive knowledge from video content.',
    status: 'coming-soon',
  },
]

const chatIntegrations = [
  {
    name: 'Web Widget',
    icon: 'widgets',
    description: 'Embed a customizable chat widget directly on your website to provide instant AI-powered support to your visitors.',
    status: 'available',
  },
  // {
  //   name: 'Google Chat',
  //   icon: 'chat',
  //   description: 'Allow your customers to receive instant support directly in their preferred messaging application.',
  //   status: 'coming-soon',
  // },
  // {
  //   name: 'Messenger',
  //   icon: 'forum',
  //   description: 'Handle customer queries in real-time, opening up a convenient communication channel for support and ensuring that no question goes unanswered.',
  //   status: 'coming-soon',
  // },
  {
    name: 'Crisp',
    icon: 'support_agent',
    description: 'Automatically answer common customer queries and free up your team to handle more complex, personalized customer interactions.',
    status: 'coming-soon',
  },
  {
    name: 'Slack',
    icon: 'chat_bubble',
    description: 'Facilitate internal communications to make customer service staff more productive or enable Knowtly to power a shared customer service channel with your users.',
    status: 'coming-soon',
  },
  // {
  //   name: 'Freshchat',
  //   icon: 'headset_mic',
  //   description: 'Interact with customers, resolve common issues, and ensure a smooth and efficient customer service experience.',
  //   status: 'coming-soon',
  // },
  {
    name: 'Zendesk',
    icon: 'support_agent',
    description: 'Improve ticket response times, enhance customer satisfaction, and allow your human agents to focus on more complex, high-touch issues.',
    status: 'coming-soon',
  },
  {
    name: 'Zoho SalesIQ',
    icon: 'trending_up',
    description: 'Engage with visitors in real-time, answer queries instantly, and convert leads through live chat.',
    status: 'coming-soon',
  },
  {
    name: 'WhatsApp',
    icon: 'phone_android',
    description: 'Offer immediate, intelligent responses to customer queries directly in this popular messaging app.',
    status: 'coming-soon',
  },
  {
    name: 'Intercom',
    icon: 'chat',
    description: 'Chat with users, resolve common issues, and ensure a smooth experience and escalate to a human when needed.',
    status: 'coming-soon',
  },
  // {
  //   name: 'Hubspot',
  //   icon: 'hub',
  //   description: 'Chat with users, resolve common issues, and ensure a smooth experience and escalate to a human when needed.',
  //   status: 'coming-soon',
  // },
]

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-background-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Integrations
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Direct integrations with your favorite tools
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Let Knowtly answer support questions over your customer&apos;s communication channels of choice.
              </p>
            </div>
          </div>
        </section>

        {/* Data Source Integrations */}
        <section className="py-24 bg-background-light border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Data Source integrations</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Enhance Your Chatbot with Diverse Data Sources
              </p>
              <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
                Integrate a wide range of data sources to empower Knowtly with rich, varied, and up-to-date training material, ensuring a well-informed and effective chatbot experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataSourceIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-white/5 bg-surface-dark shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group relative"
                >
                  {integration.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                        Coming soon
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-2xl">{integration.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Looking for another integration?</p>
              <a
                href="mailto:support@knowtly.app"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-semibold"
              >
                Submit a request
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Chat Integrations */}
        <section className="py-24 bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Chat integrations</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                24/7 support in the platforms channels you already use
              </p>
              <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
                Leverage Knowtly as a standalone support chatbot or as a support agent inside your existing support channels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chatIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-white/5 bg-surface-dark shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group relative"
                >
                  {integration.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                        Coming soon
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-2xl">{integration.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Looking for another integration?</p>
              <a
                href="mailto:support@knowtly.app"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-semibold"
              >
                Submit a request
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

