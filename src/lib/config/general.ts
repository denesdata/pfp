import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'pfp_dark',
    text: '🟤 PFP Dark'
  },
  {
    name: 'pfp_light',
    text: '🟢 PFP Light'
  },
  {
    name: 'night',
    text: '🔵 Blue'
  },
  {
    name: 'dracula',
    text: '⚫ Dark'
  },
  {
    name: 'winter',
    text: '⚪ Light'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  search: {
    provider: 'google'
  },
  nav: [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Why PFP',
      children: [
        {
          text: 'Benefits of Investing in Green Energy',
          link: '/why/benefits'
        },
        {
          text: 'Collaboration Partners',
          link: '/why/partners'
        },
        {
          text: 'Customer Testimonials',
          link: '/why/testimonials'
        },
        {
          text: 'FAQ',
          link: '/why/FAQ'
        }
      ]
    },
    {
      text: 'About us',
      children: [
        {
          text: 'Our story',
          link: '/about/story'
        },
        {
          text: 'Our Mission',
          link: '/about/mission'
        },
        {
          text: 'Meet the team',
          link: '/about/team'
        }
      ]
    },
    {
      text: 'Explore',
      link: '/explore'
    },
    {
      text: 'Green energy',
      children: [
        {
          text: 'Waste into energy | The New Renewable',
          link: '/green-energy/waste-into-energy'
        },
        {
          text: 'Solar',
          link: '/green-energy/solar'
        },
        {
          text: 'Wind',
          link: '/green-energy/wind'
        },
        {
          text: 'Energy Storage',
          link: '/green-energy/energy-storage'
        },
        {
          text: 'Financial Options',
          link: '/green-energy/financial-options'
        }
      ]
    },
    {
      text: 'Resources',
      children: [
        {
          text: 'Grants & Loans',
          link: '/resources/grants'
        },
        {
          text: 'Government Subsidies',
          link: '/resources/subsidies'
        },
        {
          text: 'Renewable Energy Certificates',
          link: '/resources/certificates'
        },
        {
          text: 'Research Articles',
          link: '/resources/articles'
        },
        {
          text: 'Case studies & Success stories',
          link: '/resources/reports'
        },
        {
          text: 'Policy Landscape',
          link: '/resources/policy'
        },
        {
          text: 'Sustainable Development Goals',
          link: '/resources/sustainable-development-goals'
        },
      ]
    },
    {
      text: 'News',
      link: '/news'
    },
    {
      text: 'Contact Us',
      link: '/contact'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ],
  img: '/assets/pfp.png'
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
