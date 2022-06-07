import { faCoins, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
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
                        <SettingsSidebar active="Token Creation"></SettingsSidebar>
                    </div>
                    <div className='col-lg-6 vstack gap-4' style={{'marginTop': '7.5px'}}>
                        <div className='tab-content py-0 mb-0'>
                            <div className='tab-pane show active fade'>
                                <div className='card'>
                                    <div className="card-header border-0 mb-0">
                                        <h1 className="h5 card-title my-0">Create a new token</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <a href="/settings/ens" className="btn btn-primary text-center">
                                                <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
                                                <p className="mb-0">ERC-20</p>
                                            </a>
                                            <a href="/settings/new_safe" className="btn btn-primary-soft text-center ml-1">
                                                <FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon>
                                                <p className="mb-0">Mint a NFT</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='card mt-4'>
                                <div className="card-header border-0 mb-0">
                                    <h1 className="h5 card-title my-0">Existing Tokens</h1>

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