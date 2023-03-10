import { graphql, useStaticQuery } from 'gatsby'

type QueryResultType = Pick<Queries.Query, 'site'>

/**
 * @see siteMetadata in gatsby-config.ts
 */
function useSiteMetadata() {
  const data = useStaticQuery<QueryResultType>(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          packageVersion
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
