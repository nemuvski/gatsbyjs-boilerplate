import type { HeadFC, PageProps } from 'gatsby'
import type { FC } from 'react'
import Meta from '~/components/Meta'

const HomePage: FC<PageProps> = () => {
  return <main>It works!</main>
}

export const Head: HeadFC = ({ location }) => <Meta title='Home page' pathname={location.pathname} />

export default HomePage
