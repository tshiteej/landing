'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const pricing = {
    monthly: {
      price: 15,
      period: '/month',
      conversations: '4,000',
    },
    yearly: {
      price: 144,
      period: '/year',
      conversations: '40,00',
      savings: 'Save $36/year'
    }
  }

  const currentPlan = isYearly ? pricing.yearly : pricing.monthly

  return (
    <section className="py-24 bg-background-dark border-t border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="text-gray-400 mt-4 text-lg">Start for free, upgrade as you grow.</p>
          
          {/* Monthly/Yearly Toggle */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex items-center justify-center gap-4">
              <span className={`text-base font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 rounded-full bg-surface-dark border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
                aria-label="Toggle pricing period"
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-primary transition-transform duration-300 ease-in-out shadow-lg ${
                    isYearly ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-base font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>
                Yearly
              </span>
            </div>
            {isYearly && (
              <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
        <div className="max-w-lg mx-auto bg-surface-dark rounded-3xl shadow-2xl border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
          <div className="p-10 text-center border-b border-white/5">
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Basic Plan</h3>
            <div className="flex items-baseline justify-center gap-1 mt-6">
              <span className="text-6xl font-black text-white">${currentPlan.price}</span>
              <span className="text-gray-400 text-lg">{currentPlan.period}</span>
            </div>
            {isYearly && (
              <p className="text-sm text-green-400 font-semibold mt-2">{pricing.yearly.savings}</p>
            )}
            <p className="text-sm text-gray-400 mt-4">Everything you need to automate support</p>
          </div>
          <div className="p-10 bg-black/30">
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="text-gray-300 font-medium">1 chatbot</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="text-gray-300 font-medium">Train on uploaded files (PDF, DOC, TXT)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="text-gray-300 font-medium">Sitemap ingestion for full-site training</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="text-gray-300 font-medium">Up to {currentPlan.conversations} messages per month</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="text-gray-300 font-medium">Ongoing access to your trained bot</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="text-gray-300 font-medium">Embeddable chat widget</span>
              </li>
            </ul>
            <Link
              className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.7)] hover:scale-[1.02] flex items-center justify-center"
              href="https://app.knowtly.app/register"
            >
              Start 7-Day Free Trial
            </Link>
            {/* <p className="text-center text-xs text-gray-500 mt-6">No credit card required</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

