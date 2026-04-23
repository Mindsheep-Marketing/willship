/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    googleApiKey: 'AIzaSyBUUgkwAe-5U4lTvVu62AURxkC3goGxwAw',
    siteTitle: 'Willship International',
    tawkToPropertyId: '5d416db6e5ae967ef80daebf',
  },
  async redirects() {
    return [
      {
        source: '/instantquote',
        destination: '/instant-quote',
        permanent: true,
      },
      {
        source: '/instant-quote.',
        destination: '/instant-quote',
        permanent: true
      },
      {
        source: '/whereweship',
        destination: '/where-we-ship',
        permanent: true,
      },
      {
        source: '/general-freight',
        destination: '/commercial-freight',
        permanent: true,
      },
      {
        source: '/general-freight-quote',
        destination: '/commercial-freight-quote',
        permanent: true,
      },
      {
        source: '/commercial-freight',
        destination: '/freight-forwarder',
        permanent: true
      },
      {
        source: '/freight_services/importing-into-australia',
        destination: '/freight-forwarder/importing-into-australia',
        permanent: true
      },
      {
        source: '/freight_services/exporting-from-australia',
        destination: '/freight-forwarder/exporting-from-australia',
        permanent: true
      },
      {
        source: '/freight_services/customs-clearance',
        destination: '/freight-forwarder/customs-clearance',
        permanent: true
      },
      {
        source: '/freight_services/ware-housing',
        destination: '/freight-forwarder/ware-housing',
        permanent: true
      },
      {
        source: '/freight_services/project-logistics',
        destination: '/freight-forwarder/freight-logistics',
        permanent: true
      },
      {
        source: '/commercial-freight-quote',
        destination: '/freight-forwarder/commercial-freight-quote',
        permanent: true
      },
      {
        source: '/freight-faq',
        destination: '/freight-forwarder/interational-freight-faq',
        permanent: true
      },
      {
        source: '/freight-blog',
        destination: 'freight-forwarder/freight-blog',
        permanent: true
      },
      {
        source: '/automotive',
        destination: '/import-vehicle',
        permanent: true
      },
      {
        source: '/what-we-ship/vehicles',
        destination: '/import-vehicle/import-car-to-australia',
        permanent: true
      },
      {
        source: '/what-we-ship/trailer-boats',
        destination: '/import-vehicle/import-boat-to-australia',
        permanent: true
      },
      {
        source: '/what-we-ship/motorcycles',
        destination: '/import-vehicle/import-motorcycle-to-australia',
        permanent: true
      },
      {
        source: '/what-we-ship/caravans',
        destination: '/import-vehicle/import-caravan-to-australia',
        permanent: true
      },
      {
        source: '/what-we-ship/motorhomes',
        destination: '/import-vehicle/import-motorhomes-to-australia',
        permanent: true
      },
      {
        source: '/what-we-ship/machinery-projects',
        destination: '/import-vehicle/import-machinery-to-australia',
        permanent: true
      },
      {
        source: '/whereweship/new-zealand',
        destination: '/import-vehicle/import-car-to-nz',
        permanent: true
      },
      {
        source: '/whereweship/united-kingdom',
        destination: '/import-vehicle/import-car-to-uk',
        permanent: true
      },
      {
        source: '/whereweship/ireland',
        destination: '/import-vehicle/import-car-to-ireland',
        permanent: true
      },
      {
        source: '/whereweship/new-zealand-to-australia',
        destination: '/import-vehicle/import-car-nz-to-australia',
        permanent: true
      },
      {
        source: '/whereweship/australia',
        destination: '/import-vehicle/import-car-to-australia',
        permanent: true
      }
    ]
  },
}

module.exports = nextConfig
