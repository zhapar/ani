import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from 'features/Navigation'
import Footer from 'features/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const getAbsoluteURL = (path) => {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
  return baseURL + path
}

const Layout = ({title = 'Ani - watch anime anywhere', children}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        property="og:title"
        key="title"
        content="Ani — an anime website"
      />
      <meta
        property="og:description"
        key="description"
        content="Ani is a website of anime lovers."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aniapi.com/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="w-full flex flex-col">
      <Navbar className="flex-shrink-0" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout

export const getLayout = (page) => <Layout>{page}</Layout>

