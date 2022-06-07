import React from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../../src/components/navbar'
import { SettingsSidebar } from '../../src/components/settings_sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const ENS: NextPage = () =>  {
    return(
        <div>
            <Head>
            <title>Coinhook Settings</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <SettingsSidebar active="Governance"></SettingsSidebar>
                        </div>
                        <div className='col-lg-6 vstack gap-4' style={{'marginTop': '7.5px'}}>
                            <div className='tab-content py-0 mb-0'>
                                <div className='tab-pane show active fade'>
                                    <a className="nav-link" href="/settings/governance">
                                        <FontAwesomeIcon icon={faArrowCircleLeft} className="" />
                                        <span className="">&nbsp;back</span>
                                    </a>
                                    <div className="card">
                                        <div className="card-header border-0 mb-0">
                                            <h1 className="h5 card-title my-0">Create or register ENS</h1>
                                            <p>Looks like you don't have any free ens available to create a space with.</p>
                                            <div className="text-center my-4">
                                                <a href="/settings/new_safe" className="btn btn-primary text-center">
                                                    <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                                                    <p className="mb-0">Register ENS</p>
                                                </a>
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

export default ENS