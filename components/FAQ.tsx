export default function FAQ() {
  const faqs = [
    {
      question: 'Is my data safe?',
      answer:
        'Absolutely. We use enterprise-grade encryption for all stored data. We are SOC-2 Type II compliant and never train our public models on your private data.',
    },
    {
      question: 'How long does training take?',
      answer:
        'For most knowledge bases (under 500 pages), training is complete within 2-5 minutes. Larger datasets may take up to 15 minutes.',
    },
    {
      question: 'Can I customize the chatbot appearance?',
      answer:
        'Yes, you can fully customize the colors, logo, welcome message, and avatar to match your brand identity perfectly.',
    },
    {
      question: 'What happens if I exceed the message limit?',
      answer:
        'We will notify you when you approach the limit. You can easily upgrade your plan or purchase an add-on pack. We won\'t shut off your bot abruptly.',
    },
  ]

  return (
    <section className="py-24 bg-background-light" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-surface-dark rounded-xl p-5 cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-white/5 open:border-primary/50 open:bg-surface-dark/80 transition-all hover:border-white/10"
            >
              <summary className="flex justify-between items-center font-bold text-gray-200 list-none">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180 text-gray-400">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <div className="text-gray-400 mt-4 text-sm leading-relaxed pl-1">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

