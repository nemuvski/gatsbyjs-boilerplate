import type { HeadFC, PageProps } from 'gatsby'
import type { FC } from 'react'
import Meta from '~/components/Meta'

const NotFoundPage: FC<PageProps> = () => {
  return <main>Not found</main>
}

export const Head: HeadFC = () => <Meta title='Not found' />

export default NotFoundPage
