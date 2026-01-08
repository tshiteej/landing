import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy - Knowtly',
  description: 'Knowtly Refund Policy. Learn about our refund terms and conditions.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-surface-dark rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Refund Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: December 29, 2025</p>

            <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Subscription Plans</h2>
                <p className="leading-relaxed">
                  Knowtly offers subscription-based services for our note-taking and knowledge management platform. We want you to be satisfied with your purchase, but we also want to provide a sustainable service to our community.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Refund Eligibility</h2>
                <p className="leading-relaxed">
                  We offer a 14-day money-back guarantee for all new subscriptions. If you are not satisfied with our services within the first 14 days after your initial purchase, you may request a full refund.
                </p>
                <p className="leading-relaxed mt-4 mb-4">To be eligible for a refund:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The refund request must be made within 14 days of the initial purchase.</li>
                  <li>You must provide a reason for the refund request (this helps us improve).</li>
                  <li>Your account must be in good standing.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Non-Refundable Items</h2>
                <p className="leading-relaxed mb-4">The following are not eligible for refunds:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Purchases made beyond the 14-day refund window.</li>
                  <li>Subscription renewals (after the initial subscription period).</li>
                  <li>Accounts that have violated our Terms of Service.</li>
                  <li>Usage-based charges (if applicable) that have already been incurred.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. How to Request a Refund</h2>
                <p className="leading-relaxed">
                  To request a refund, please contact our support team at support@knowtly.app with the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Your account email address.</li>
                  <li>Date of purchase.</li>
                  <li>Reason for requesting the refund.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Refund Processing</h2>
                <p className="leading-relaxed">
                  Refunds will be processed through our payment processor (e.g., Stripe, Paddle, or Apple/Google if purchased via app stores).
                </p>
                <p className="leading-relaxed mt-4">
                  Once approved, refunds typically take 5-10 business days to process, depending on your payment method and financial institution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Subscription Cancellation</h2>
                <p className="leading-relaxed">
                  Canceling your subscription will stop future billing but will not automatically generate a refund for previous charges. You may continue to access the service until the end of your current billing period.
                </p>
                <p className="leading-relaxed mt-4">
                  To cancel your subscription, log in to your account and go to the billing settings, or contact our support team at support@knowtly.app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify this refund policy at any time. If we make changes, we will notify you by updating the date at the top of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about our Refund Policy, please contact us at:
                </p>
                <div className="bg-surface-light/50 p-6 rounded-xl border border-white/10 mt-4">
                  <p className="text-white font-semibold mb-2">Knowtly Support</p>
                  <p className="text-gray-300">Email: support@knowtly.app</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
