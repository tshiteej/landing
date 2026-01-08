import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Knowtly',
  description: 'Knowtly Terms and Conditions. Read our terms of service and user agreement.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-surface-dark rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms and Conditions</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to Knowtly, operated Our Team (&quot;Company&quot;, &quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
                </p>
                <p className="leading-relaxed mt-4">
                  Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard, and disclose information that results from your use of our web pages. Please read it here: https://knowtly.app/privacy-policy/.
                </p>
                <p className="leading-relaxed mt-4">
                  Your agreement with us includes these Terms and our Privacy Policy (&quot;Agreements&quot;).
                </p>
                <p className="leading-relaxed mt-4">
                  You acknowledge that you have read and understood the Agreements and agree to be bound by them. If you do not agree with the Agreements, you may not use the Service. Please let us know by emailing support@knowtly.app so we can try to find a solution.
                </p>
                <p className="leading-relaxed mt-4">
                  These Terms apply to all visitors, users, and others who wish to access or use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Communications</h2>
                <p className="leading-relaxed">
                  By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials, and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing support@knowtly.app
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Purchases</h2>
                <p className="leading-relaxed">
                  If you wish to purchase any product or service made available through the Service (&quot;Purchase&quot;), you may be asked to supply certain information relevant to your Purchase, including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
                </p>
                <p className="leading-relaxed mt-4">
                  You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct, and complete.
                </p>
                <p className="leading-relaxed mt-4">
                  We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties, subject to our Privacy Policy.
                </p>
                <p className="leading-relaxed mt-4">
                  We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, errors in your order, or other reasons.
                </p>
                <p className="leading-relaxed mt-4">
                  We reserve the right to modify the number of queries, API calls, or usage restrictions, regardless of what was previously committed at the time of subscription. These changes will be made according to our service capacity to safeguard the interests of all users and to ensure uniform access to the service.
                </p>
                <p className="leading-relaxed mt-4">
                  We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contests, Sweepstakes, and Promotions</h2>
                <p className="leading-relaxed">
                  Any contests, sweepstakes, or other promotions (collectively, &quot;Promotions&quot;) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Subscriptions</h2>
                <p className="leading-relaxed">
                  Some parts of the Service are billed on a subscription basis (&quot;Subscription(s)&quot;). You will be billed in advance on a recurring and periodic basis (&quot;Billing Cycle&quot;). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p className="leading-relaxed mt-4">
                  At the end of each Billing Cycle, your Subscription will automatically renew under the same conditions unless you cancel it or Knowtly cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting our customer support team.
                </p>
                <p className="leading-relaxed mt-4">
                  A valid payment method, including credit card or PayPal, is required to process the payment for your subscription. You shall provide Knowthly with accurate and complete billing information, including full name, address, state, zip code, telephone number, and a valid payment method. By submitting such payment information, you automatically authorize Knowtly to charge all Subscription fees incurred through your account to any such payment instruments.
                </p>
                <p className="leading-relaxed mt-4">
                  Should automatic billing fail to occur for any reason, we will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Free Trial</h2>
                <p className="leading-relaxed">
                  Knowtly may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (&quot;Free Trial&quot;).
                </p>
                <p className="leading-relaxed mt-4">
                  You may be required to enter your billing information to sign up for a Free Trial.
                </p>
                <p className="leading-relaxed mt-4">
                  If you do enter your billing information when signing up for a Free Trial, you will not be charged by us until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
                </p>
                <p className="leading-relaxed mt-4">
                  At any time and without notice, Knowtly reserves the right to (i) modify the Terms of Service of the Free Trial offer, or (ii) cancel such Free Trial offer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Fee Changes</h2>
                <p className="leading-relaxed">
                  Knowtly, in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
                </p>
                <p className="leading-relaxed mt-4">
                  Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Fair Usage Policy (FUP)</h2>
                <p className="leading-relaxed">
                  Knowtly is committed to providing high-quality, reliable service for all users. We expect all our users to avoid misuse or overuse of our services. Overuse by one user may impact the quality of service for others. Users are encouraged to select plans that align with their professional needs and business size. High-usage users should consider upgrading to a more robust plan or requesting a custom plan.
                </p>
                <p className="leading-relaxed mt-4">
                  The vast majority of users (over 95%) consistently operate within the defined parameters. Exceeding these parameters could lead to restricted or reduced service access, with or without prior warning.
                </p>
                <p className="leading-relaxed mt-4">
                  Our system diligently monitors for automated or robotic behavior to maintain service safety and quality. Please be aware that sharing login details of unlimited accounts for monetary gains is considered illegal. Each seat is intended for one individual user only, and multiple users sharing one account are not permitted.
                </p>
                <p className="leading-relaxed mt-4">
                  <strong>Warning:</strong> Please note that unusually high usage or sharing of login details could lead to account suspension or deletion without prior notice, with no possibility for refunds.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prohibited Uses</h2>
                <p className="leading-relaxed mb-4">You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
                  <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service, or expose them to liability.</li>
                </ul>
                <p className="leading-relaxed mt-4">Additionally, you agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party&apos;s use of Service, including their ability to engage in real-time activities through Service.</li>
                  <li>Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</li>
                  <li>Use any manual process to monitor or copy any of the material on the Service or for any other unauthorized purpose without our prior written consent.</li>
                  <li>Use any device, software, or routine that interferes with the proper working of Service.</li>
                  <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                  <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</li>
                  <li>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
                  <li>Take any action that may damage or falsify the Company rating.</li>
                  <li>Otherwise, attempt to interfere with the proper working of the Service.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Analytics</h2>
                <p className="leading-relaxed">
                  We may use third-party Service Providers to monitor and analyze the use of our Service. You can check our Privacy Policy to know what tools we use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">No Use By Minors</h2>
                <p className="leading-relaxed">
                  Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using the Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of these Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and using of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Accounts</h2>
                <p className="leading-relaxed">
                  When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                </p>
                <p className="leading-relaxed mt-4">
                  You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
                <p className="leading-relaxed mt-4">
                  You may not use as a username the name of another person or entity or trademark that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar, or obscene.
                </p>
                <p className="leading-relaxed mt-4">
                  We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                  Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Knowtly and its licensors. Service is protected by copyright, trademark, and other laws of India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Knowtly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Copyright Policy</h2>
                <p className="leading-relaxed">
                  We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights (&quot;Infringement&quot;) of any person or entity.
                </p>
                <p className="leading-relaxed mt-4">
                  If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to support@knowtly.app, with the subject line: &quot;Copyright Infringement&quot; and include in your claim a detailed description of the alleged Infringement.
                </p>
                <p className="leading-relaxed mt-4">
                  You may be held accountable for damages (including costs and attorneys&apos; fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">DMCA Notice and Procedure for Copyright Infringement Claims</h2>
                <p className="leading-relaxed mb-4">You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) principles by providing our team with the following information in writing:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright&apos;s interest;</li>
                  <li>a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</li>
                  <li>identification of the URL or other specific location on the Service where the material that you claim is infringing is located;</li>
                  <li>your address, telephone number, and email address;</li>
                  <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                  <li>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner&apos;s behalf.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can contact our team via email at support@knowtly.app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Error Reporting and Feedback</h2>
                <p className="leading-relaxed">
                  You may provide us either directly at support@knowtly.app or via third-party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (&quot;Feedback&quot;).
                </p>
                <p className="leading-relaxed mt-4">
                  You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback.
                </p>
                <p className="leading-relaxed mt-4">
                  In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited, and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Links To Other Websites</h2>
                <p className="leading-relaxed">
                  Our Service may contain links to third-party websites or services that are not owned or controlled by Knowtly.
                </p>
                <p className="leading-relaxed mt-4">
                  We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                </p>
                <p className="leading-relaxed mt-4">
                  You acknowledge and agree that Knowtly shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.
                </p>
                <p className="leading-relaxed mt-4">
                  We strongly advise you to read the Terms of Service and Privacy Policies of any third-party websites or services that you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Disclaimer Of Warranty</h2>
                <p className="leading-relaxed">
                  These services are provided by the Company on an &quot;as is&quot; and &quot;as available&quot; basis. The company makes no representations or warranties of any kind, express or implied, as to the operation of its services, or the information, content, or materials included therein. You expressly agree that your use of these services, their content, and any services or items obtained from us is at your sole risk.
                </p>
                <p className="leading-relaxed mt-4">
                  Neither Company nor any person associated with Company makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the services. Without limiting the foregoing, neither Company nor anyone associated with Company represents or warrants that the services, their content, or any services or items obtained through the services will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that the services or the server that makes it available are free of viruses or other harmful components or that the services or any services or items obtained through the services will otherwise meet your needs or expectations.
                </p>
                <p className="leading-relaxed mt-4">
                  Company hereby disclaims all warranties of any kind, whether express or implied, statutory, or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for a particular purpose.
                </p>
                <p className="leading-relaxed mt-4">
                  The foregoing does not affect any warranties that cannot be excluded or limited under applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Limitation Of Liability</h2>
                <p className="leading-relaxed">
                  Except as prohibited by law, you will hold us and our officers, directors, employees, and agents harmless for any indirect, punitive, special, incidental, or consequential damage, however it arises (including attorneys&apos; fees and all related costs and expenses of litigation and arbitration, or at trial or on appeal, if any, whether or not litigation or arbitration is instituted), whether in an action of contract, negligence, or other tortious action, or arising out of or in connection with this agreement, including without limitation any claim for personal injury or property damage, arising from this agreement and any violation by you of any federal, state, or local laws, statutes, rules, or regulations, even if Company has been previously advised of the possibility of such damage.
                </p>
                <p className="leading-relaxed mt-4">
                  Except as prohibited by law, if there is liability found on the part of Company, it will be limited to the amount paid for the products and/or services, and under no circumstances will there be consequential or punitive damages. Some jurisdictions do not allow the exclusion or limitation of punitive, incidental or consequential damages, so the prior limitation or exclusion may not apply to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Termination</h2>
                <p className="leading-relaxed">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p className="leading-relaxed mt-4">
                  If you wish to terminate your account, you may simply discontinue using the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p className="leading-relaxed mt-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
                </p>
                <p className="leading-relaxed mt-4">
                  You agree to submit to the exclusive jurisdiction of the courts located in Uttarakhand, India, to resolve any legal matter arising from the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes To Service</h2>
                <p className="leading-relaxed">
                  We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion, without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts ofthe Service, or the entire Service, to users, including registered users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Amendments To Terms</h2>
                <p className="leading-relaxed">
                  We may amend these Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
                </p>
                <p className="leading-relaxed mt-4">
                  Your continued use of the platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
                </p>
                <p className="leading-relaxed mt-4">
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Waiver And Severability</h2>
                <p className="leading-relaxed">
                  No waiver by Company of any term or condition outlined in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.
                </p>
                <p className="leading-relaxed mt-4">
                  If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Acknowledgement</h2>
                <p className="leading-relaxed">
                  By using the Service or other services provided by us, you acknowledge that you have read these Terms of Service and agree to be bound by them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  For any questions about these Terms, you can contact us by emailing: support@knowtly.app.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
