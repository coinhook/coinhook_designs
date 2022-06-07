import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Tab, Tabs } from 'react-bootstrap'
import { Navbar } from '../../src/components/navbar'
import styles from '../styles/Home.module.css'
import { Sidebar } from '../../src/components/sidebar'

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coinhook</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-3'>
                      <Sidebar active="Overview"></Sidebar>
                  </div>
                  <div className='col-lg-9'>

                  </div>
              </div>
          </div>
      </main>
    </div>
  )
}

export default Profile
