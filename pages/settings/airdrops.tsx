import { faQrcode, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import { GovernanceSettings } from '../../src/components/governance_settings'
import { Navbar } from '../../src/components/navbar'
import { SettingsSidebar } from '../../src/components/settings_sidebar'

const Airdops: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coinhook Settings</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Navbar></Navbar>
      </div>
      <main>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-3'>
                      <SettingsSidebar active="Airdrops"></SettingsSidebar>
                  </div>
                  <div className='col-lg-6 vstack gap-4' style={{'marginTop': '7.5px'}}>
                      <div className='tab-content py-0 mb-0'>
                          <div className='tab-pane show active fade'>
                              <div className='card'>
                                <div className="card-header border-0 mb-0">
                                    <h1 className="h5 card-title my-0">New Airdrop</h1>
                                    <div className="card-body">
                                      <div className="text-center mb-2">
                                          <a href="/settings/ens" className="btn btn-primary text-center">
                                              <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
                                              <p className="mb-0">By Unique Link</p>
                                          </a>
                                          <a href="/settings/new_safe" className="btn btn-primary-soft ml-2 text-center">
                                              <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                                              <p className="mb-0">By Wallet Address</p>
                                          </a>
                                      </div>
                                </div>
                              </div>
                              
                          </div>
                          <div className='card mt-4'>
                                <div className="card-header border-0 mb-0">
                                    <h1 className="h5 card-title my-0">Previous Airdrops</h1>

                                </div>
                              </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
      </main>
    </div>
  )
}

export default Airdops