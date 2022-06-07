import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { SSRProvider } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faW } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (

      <div>
         <header className='navbar py-3 navbar-dark sticky-top bg-dark rounded-3'>
        <div className='container px-3 py-2'>
          <div className='navbar-brand'>
           <img className='navbar-brand-item' src="/images/placeholders/consensys.webp" alt="Coinhook" width="180px" />
          </div>
          <div className='d-flex align-items-center order-lg-2 ms-auto my-3'>
            <a className='btn btn-primary rounded my-lg-0 text-truncate btn-funky-moon' style={{'maxWidth': '150px'}}>
              Connect Wallet
            </a>
          </div>
        </div>
      </header>
          <main>
              <div className='container'>
                  <div className='row'>
                      <div className='col-md-6'>
                            <div className=''>
                                <img className='' src="/images/placeholders/nft1.jpg" width="500px"></img>
                            </div> 
                      </div>
                      <div className='col-md-6'>
                          <div className=''>
                                <img src="/images/placeholders/person1.jpeg" className="d-block rounded-circle mb-3 member-image" width="192" alt="Darrell Steward" />
                                <h3 className="fw-bold fs-2 mb-1">Darrell Steward</h3>
                                <p className='badge badge-light fs-6'>@darrell</p>
                                <div className="mt-1">
                                    <a href="#" className="btn btn-icon btn-outline-secondary btn-facebook btn-sm me-2">
                                        <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-outline-secondary btn-stack-overflow btn-sm me-2">
                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-outline-secondary btn-facebook btn-sm me-2">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                    </a>
                                    <a href="#" className="btn btn-icon btn-outline-secondary btn-stack-overflow btn-sm me-2">
                                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                    </a>           
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-6'>
                                    <div className='card card-custom bg-light-info hoverable shadow-none mb-5'>
                                            <div className='card-body d-flex flex-column flex-center text-center'>
                                            <p className="fs-6 mb-2 text-dark">Member Since</p>
                                            <h3 className='mb-0 fs-3 text-gray-600 fw-bolder'>December 2015</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className='card card-custom bg-light-info hoverable shadow-none mb-5'>
                                            <div className='card-body d-flex flex-column flex-center text-center'>
                                            <p className="fs-6 mb-2 text-dark">Role</p>
                                            <h3 className='mb-0 fs-3 text-gray-600 fw-bolder'>Product</h3>
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

export default Home
