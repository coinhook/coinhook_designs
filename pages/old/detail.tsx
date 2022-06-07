import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../src/components/navbar'

const Detail: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coinhook</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Navbar></Navbar>
        
      </div>
    </div>
  )
}

export default Detail
