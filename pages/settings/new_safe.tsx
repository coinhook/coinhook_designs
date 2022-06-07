import React from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../../src/components/navbar'
import { SettingsSidebar } from '../../src/components/settings_sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

const NewSafe: NextPage = () =>  {
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
                                        <h1 className="h5 card-title mt-2">New Gnosis Safe</h1>
                                    </div>
                                    <div className="card-body">
                                        <form id="create-safe-form">
                                            <div className='mb-3 input-group-lg'>
                                                <label className="form-label">Chain</label>
                                                <select className="form-control custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                    <option selected>Choose chain</option>
                                                    <option value="1">Ethereum</option>
                                                    <option value="2">Polygon</option>
                                                    <option value="3">Fantom</option>
                                                </select>
                                            </div>
                                            <div className='mb-3 input-group-lg'>
                                                <label className="form-label">Valult Name</label>
                                                <input className='form-control' placeholder='ABC Vault'></input>
                                            </div>
                                            <label className="form-label">Owners</label>
                                            <div className='mb-3 input-group'>
                                                <input className='form-control' placeholder='ABC Vault'></input>
                                                <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                            </div>
                                            <div className='mb-3 input-group'>
                                                <input className='form-control' placeholder='ABC Vault'></input>
                                                <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                            </div>
                                            <a className="mb-3 btn btn-sm btn-dashed rounded mt-2 p-2">
                                                <FontAwesomeIcon className="ml-1" icon={faPlusCircle}></FontAwesomeIcon>
                                                &nbsp; &nbsp;Add a new owner
                                            </a>
                                            <div className='mb-3 input-group-lg'>
                                                <label className="form-label">Any transaction requires the confirmation of:</label>
                                                <select className="form-control custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                                <label className="form-label">1 out of 2 owner(s)</label>
                                            </div>
                                            <div className="col-12 text-end">
                                                <button type="submit" className="btn btn btn-primary mb-0">Create Vault</button>
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

export default NewSafe