/**
 * Node APIs
 *
 * @see {@link https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/}
 */

import path from 'node:path'
import type { GatsbyNode } from 'gatsby'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions, stage }) => {
  /**
   * @see {@link https://www.npmjs.com/package/gatsby-plugin-no-sourcemaps}
   */
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }

  /**
   * Resolve aliased imports
   *
   * @see compilerOptions.paths in tsconfig.json
   */
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  })
}

// export const createPages: GatsbyNode['createPages'] = async () => {}
