export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'S3 documentation',
    url: 'docs.owino.xyz',
    image: '/social-card-preview.png',
    socials: {
      twitter: '@mikeyhodl',
      github: 'weknow-io/weknow',
    },
    github: {
      root: 'content',
      edit: true,
      contributors: false
    },
    aside: {
      level: 1,
      filter: [],
    },
    header: {
      title: false,
      logo: true,
      showLinkIcon: false
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'By Mikey',
        href: 'https://mikeowino.com',
      },
      // icons: [
      //   {
      //     label: 'NuxtJS',
      //     href: 'https://nuxtjs.org',
      //     component: 'IconNuxtLabs',
      //   },
      //   {
      //     label: 'Vue Telescope',
      //     href: 'https://vuetelescope.com',
      //     component: 'IconVueTelescope',
      //   },
      // ],
    }
  }
})