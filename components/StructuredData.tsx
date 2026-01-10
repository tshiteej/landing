export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Knowtly',
    description:
      'AI-powered support assistant that turns documentation into intelligent support agents. Reduce support tickets by 80% with AI trained on your unique data.',
    url: 'https://knowtly.app',
    logo: 'https://knowtly.app/logo.jpeg',
    sameAs: ['https://twitter.com/knowtly', 'https://github.com/knowtly'],
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Knowtly',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Turn your documentation into an intelligent support agent instantly. Provide instant answers to your customers and teams.',
    offers: {
      '@type': 'Offer',
      price: '49',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Knowtly',
    url: 'https://knowtly.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://knowtly.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

