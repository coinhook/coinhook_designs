import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCog, faCheck, faGlobe } from '@fortawesome/free-solid-svg-icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Tab, Tabs } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Directory: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coinhook</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='navbar py-0 navbar-dark bg-dark rounded-3'>
        <div className='container px-3 py-2'>
          <div className='navbar-brand'>
           <img src="/images/coinhook.svg" alt="Coinhook" width="180px" />
          </div>
            <a className='btn btn-primary btn-sm fs-sm rounded my-3 my-lg-0 text-truncate btn-funky-moon' style={{'maxWidth': '100px'}}>
              019321989ybasyvstagasdadasd1231321
            </a>
        </div>
      </header>
      <main>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='card p-3 mt-4'>
                        <div className='text-center'>
                            <img src="/images/placeholders/consensys.webp" width="200px" className='mt-3'></img>
                            <div className='badge badge-light mt-4'>Investment DAO</div>
                            <p className='mt-3 fs-6 '><small>Friends With Benefits is a worldwide group of cultural creators, thinkers, and builders.</small></p>
                            <hr></hr>
                            <ul className='nav nav-tabs nav-pills nav-pills-soft flex-column mt-4 fw-bold gap-2 border-0'>
                                <li className='nav-item'>
                                    <a href="/settings" className={`nav-link link-white d-flex mb-2 active`}>
                                        <img src="/images/home.png" className="me-2 h-20px fa-fw"></img>
                                        Overview
                                    </a>
                                    <a href="/settings/treasury" className={`nav-link link-white d-flex mb-2`}>
                                        <img src="/images/contract.png" className="me-2 h-20px fa-fw"></img>
                                        Proposals
                                    </a>
                                    <a href="/settings/governance" className={`nav-link link-white d-flex mb-2`}>
                                        <img src="/images/team.png" className="me-2 h-20px fa-fw"></img>
                                        Members
                                    </a>
                                    <a href="/settings/airdrops" className={`nav-link link-white d-flex mb-2`}>
                                        <img src="/images/token.png" className="me-2 h-20px fa-fw"></img>
                                        Tokens & NFT's
                                    </a>
                                    <a href="/settings/airdrops" className={`nav-link link-white d-flex mb-2`}>
                                        <img src="/images/gear.png" className="me-2 h-20px fa-fw"></img>
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 pl-1'>
                    <div className='card card-alt mt-4 p-3'>
                        <h3 className='h5 mb-3'>About</h3>
                        <p className='text-alt'>In a world where <span className='fw-bold fst-italic'>founders, customers, and capital</span> are collapsing into each other, the opportunity for a more successful and virtuous startup building mode is becoming more participant-focused. <br></br><br></br>That’s why we’re building the next iteration of Tachyon - a Networked Global Startup Ecosystem of participant-contributors, de-risking and opening the surface area for startup success so that every startup begins with the network it needs.</p>
                        <p className='mt-3'>Follow our Journey</p>
                        <div className='display-flex'>
                            <a href="#" className="btn btn-icon btn-light-twitter me-5 "><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon></a>
                            <a href="#" className="btn btn-icon btn-light-twitter me-5 "><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                            <a href="#" className="btn btn-icon btn-light-twitter me-5 "><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                        </div>
                        
                    </div>
                    <div className='card card-alt mt-4 p-3'>
                        <h3 className='h5 mb-3'>Mission</h3>
                        <p className='text-alt'>- Build a <span className='fw-bold fst-italic'>co-owned and operated networked ecosystem</span> of the most value-add members of the web3 community, across the key domains that startups need to succeed (tech, product, fundraising, hiring, g2m, etc).<br/>
- Do so at a <span className='fw-bold fst-italic'>significant scale</span>, while removing the barriers of participation between founders, mentors, investors, and the various key stakeholders of our community. <br></br>
- Create an <span className='fw-bold fst-italic'>incentive mechanism</span> that allows startups to tap the expertise of mentors in a particular domain, at scale, while remaining consistent with our <a href="nav-link">Tachyon First Principles</a></p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Directory