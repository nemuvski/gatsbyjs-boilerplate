import type { FC, PropsWithChildren } from 'react'
import useSiteMetadata from '~/hooks/use-site-metadata'

type Props = {
  title?: string
  description?: string
  pathname?: string
}

const Meta: FC<PropsWithChildren<Props>> = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, packageVersion } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ''}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='format-detection' content='telephone=no, email=no, address=no' />
      <meta name='application-version' content={packageVersion} />
      <link rel='canonical' href={siteUrl} />
      <link
        rel='icon'
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎲</text></svg>"
      />
      {children}
    </>
  )
}

export default Meta
