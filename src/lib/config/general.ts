import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'dracula',
    text: '🟦 Default'
  },
  {
    name: 'night',
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
      link: '/highlights'
    },
    {
      text: 'About us',
      children: [
        {
          text: 'Team',
          link: '/about/team'
        },
        {
          text: 'Data',
          link: '/about/data'
        },
        {
          text: 'Careers',
          link: '/about/careers'
        }
      ]
    },
    {
      text: 'Exploration station',
      link: '/explorables'
    },
    {
      text: 'Green energy',
      link: '/modelling'
    },
    {
      text: 'Resources',
      link: '/resources'
    },
    {
      text: 'News',
      link: '/blog'
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
