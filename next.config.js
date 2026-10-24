/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site used to have one route per section; send old links to the matching anchor.
  async redirects() {
    return ['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: true,
    }))
  },
}

module.exports = nextConfig
