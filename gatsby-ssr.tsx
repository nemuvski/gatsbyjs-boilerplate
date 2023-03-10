/**
 * Server Rendering APIs
 *
 * @see {@link https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/}
 */

import type { GatsbySSR } from 'gatsby'
import Layout from '~/components/Layout'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>
}
