import Image from 'next/image'

export default function TrustBadges() {
  return (
    <section className="py-12 bg-background-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-widest">
          Trusted by forward-thinking SaaS teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 hover:opacity-90 transition-opacity duration-500">
          <div className="flex items-center justify-center h-12 w-auto">
            <Image
              src="/brandemic.svg"
              alt="Brandemic"
              width={150}
              height={48}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-auto">
            <Image
              src="/hmvr.png"
              alt="HMVR"
              width={150}
              height={48}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-auto">
            <Image
              src="/didi-bhula-logo.png"
              alt="Didi Bhula"
              width={150}
              height={48}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

