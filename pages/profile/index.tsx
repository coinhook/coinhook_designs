import { faCog, faCheck, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Tab, Tabs } from 'react-bootstrap'
import { Navbar } from '../../src/components/navbar'
import styles from '../styles/Home.module.css'

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
                <div className='card'>
                    <div className="h-200px rounded-top profile-cover"></div>
                    <div className='card-body py-0'>
                        <div className='d-sm-flex align-items-start text-center text-sm-start'>
                            <div className='avatar avatar-xxl mt-n5 mb-3'>
                                <img className="avatar-img rounded-circle border border-white border-3" src="/images/placeholders/fwv.jpeg" alt="" />
                            </div>
                            <div className='ms-sm-4 mt-sm-3'>
                                <h1 className="mb-0 h5 fw-bold">Friends With Benefits</h1>
                                <p>This is our mission</p>
                            </div>
                            <div className='d-flex mt-3 justify-content-center ms-sm-auto'>
                                <button className="btn btn-danger-soft me-2" type="button"> <FontAwesomeIcon className="pe-1" icon={faCog}></FontAwesomeIcon> Settings </button>
                                <button className="btn btn-sm btn-primary-soft me-2" type="button"> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Joined</button>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <a className="btn btn-outline-primary">
                                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                    </a>
                                    <a className="btn btn-outline-primary">
                                        <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                                    </a>
                                    <a className="btn btn-outline-primary">
                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mb-0 text-sm-start mt-3 mt-sm-0 p-2'>
                            <p className='mb-0'>Friends With Benefits is a worldwide group of cultural creators, thinkers, and builders who convene digitally and IRL to collaboratively shape Web3's future.</p>
                        </div>
                    </div>
                    <div className='card-footer mt-3 pt-2 pb-0'>
                        <ul className='nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0'>
                            <li className='nav-item'>
                                <a className='nav-link active'>Overview</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Proposals</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Members</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Members</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Tokens</a>
                            </li>
                        </ul>
                    </div>
                </div>
          </div>
      </main>
    </div>
  )
}

export default Profile
