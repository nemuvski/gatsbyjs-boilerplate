/**
 * Config APIs
 *
 * @see {@link https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/}
 */

import type { GatsbyConfig } from 'gatsby'

// FIXME: Rewrite your web site content
const siteBaseInfo = {
  baseUrl: 'https://www.your-website-domain.tld',
  title: 'Gatsby App',
  defaultDescription: '',
} as const

const isProductionMode = process.env.NODE_ENV === 'production'
const packageVersion = isProductionMode
  ? process.env.npm_package_version
  : `${process.env.npm_package_version}-${process.env.NODE_ENV}`

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',
  trailingSlash: 'always',
  polyfill: false,
  graphqlTypegen: {
    typesOutputPath: 'src/__generated__/gatsby-types.d.ts',
    generateOnBuild: false,
  },
  flags: {
    DEV_SSR: true,
  },

  siteMetadata: {
    title: siteBaseInfo.title,
    siteUrl: siteBaseInfo.baseUrl,
    description: siteBaseInfo.defaultDescription,
    packageVersion,
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      /**
       * @see {@link https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap}
       */
      options: {
        output: '/',
        createLinkInHead: true,
        excludes: [],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      /**
       * @see {import('gatsby-source-filesystem').FileSystemOptions}
       * @see {@link https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/}
       */
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
        // Ignore files starting with a dot
        ignore: ['**/.*'],
      },
    },
  ],
}

export default config
