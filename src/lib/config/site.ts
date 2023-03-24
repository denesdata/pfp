import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'data.csaladen.es/',
  title: 'Romanian Economic Monitor',
  subtitle: 'Overview of the Romanian economy: facts and forecasts',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/pfp.png',
    name: 'Power for Planet',
    status: '',
    bio: 'Power for Planet'
  },
  themeColor: '#3D4451',
  category: {
    "highlights": {
      "name": "Highlights",
      "description": "",
      "img": "/assets/logo/blue-globe.png"
    },
    "blog": {
      "name": "Blog",
      "description": "",
      "img": "/assets/logo/y.png"
    },
    "modelling": {
      "name": "Modelling & Analysis",
      "description": "",
      "img": "/assets/logo/r.png"
    },
    "explorables": {
      "name": "Explorables",
      "description": "This is a very long category description that spans over two lines",
      "img": "/assets/logo/v.png"
    },
    "about": {
      "name": "About",
      "description": "",
      "img": "/assets/logo/a.png"
    }
  }
}
