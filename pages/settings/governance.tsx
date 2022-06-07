import type { NextPage } from 'next'
import Head from 'next/head'
import { GovernanceSettings } from '../../src/components/governance_settings'
import { Navbar } from '../../src/components/navbar'
import { SettingsSidebar } from '../../src/components/settings_sidebar'

const Governance: NextPage = () => {
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
                        <SettingsSidebar active="Governance"></SettingsSidebar>
                    </div>
                    <div className='col-lg-6 vstack gap-4' style={{'marginTop': '7.5px'}}>
                        <div className='tab-content py-0 mb-0'>
                            <div className='tab-pane show active fade'>
                                <GovernanceSettings></GovernanceSettings>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Governance