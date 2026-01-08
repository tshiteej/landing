import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import ProblemSolution from '@/components/ProblemSolution'
import Comparison from '@/components/Comparison'
import HowItWorks from '@/components/HowItWorks'
import Differentiator from '@/components/Differentiator'
import UseCases from '@/components/UseCases'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Header />
      <Hero />
      <TrustBadges />
      <ProblemSolution />
      {/* <Comparison /> */}
      <HowItWorks />
      <Differentiator />
      <UseCases />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

