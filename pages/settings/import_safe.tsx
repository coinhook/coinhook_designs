import React from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../../src/components/navbar'
import { SettingsSidebar } from '../../src/components/settings_sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

const ImportSafe: NextPage = () =>  {
    return(
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
                          <SettingsSidebar active="Treasury"></SettingsSidebar>
                      </div>
                      <div className='col-lg-6 vstack gap-4' style={{'marginTop': '7.5px'}}>
                          <div className='tab-content py-0 mb-0'>
                              <div className='tab-pane show active fade'>
                              <div>
                                <div className="card mb-4">
                                    <div className="card-header border-0">
                                        <a className="nav-link" href="/settings/treasury">
                                            <FontAwesomeIcon icon={faArrowCircleLeft} className="" />
                                            <span className="">&nbsp;back</span>
                                        </a>
                                        <h1 className="h5 card-title mt-2">Import Existing Gnosis Safe</h1>
                                    </div>
                                    <div className="card-body">
                                    <form id="create-safe-form">
                                           
                                            <div className='mb-3 input-group-lg'>
                                                <label className="form-label">Valult Name</label>
                                                <input className='form-control' placeholder='ABC Vault'></input>
                                            </div>
                                            <div className='mb-3 input-group-lg'>
                                                <label className="form-label">Valult Address</label>
                                                <input className='form-control'></input>
                                            </div>
                                            <div className="col-12 text-end">
                                                <button type="submit" className="btn btn btn-primary mb-0">Import Vault</button>
                                            </div>
                                        </form>
                                    </div>
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

export default ImportSafe