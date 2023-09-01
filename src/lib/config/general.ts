import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
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
      text: 'Explore',
      link: '/explore'
    },
    {
      text: 'About us',
      link: '/about'
    },
    {
      text: 'Green energy',
      link: '/green-energy'
    },
    {
      text: 'Resources',
      children: [
        {
          text: 'Financial options',
          link: '/resources/financial-options'
        },
        {
          text: 'FAQ',
          link: '/resources/articles'
        }
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
