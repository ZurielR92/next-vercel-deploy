import { FC } from "react"
import { Navbar } from "../Navbar"
import Head from "next/head"

interface props {
  children: React.ReactNode
}

const MainLayout: FC<props> = ( { children } ) => {
  return (
    <div className={'container'}>
      <Head>
        <title>Home - Zuriel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={'main'}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout