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
        <div className='container pt-5 mb-10'>
          <div className='text-center'>
            <img src="/images/placeholders/consensys.svg" width="350px"></img>
            <input type="text" className="form-control bg-transparent border-0 fs-3x text-center fw-normal form-control-search mt-3" name="query" placeholder="Search..."></input>
          </div>
          <div className='row py-10'>
            <div className='col-sm-6'>
              <div className='card card-custom bg-light-primary hoverable min-h-125px shadow-none mb-5'>
                <div className='card-body d-flex flex-column flex-center text-center'>
                  <h3 className=" h6 fs-3 mb-2 text-dark fw-bolder">Members Directory</h3>
                  <p className='mb-0 text-gray-600'>Check out our awesome community</p>
                </div>
              </div>
              <div className='row g-4'>
                <div className='col-sm-6'>
                <div className='card card-custom bg-light-success hoverable min-h-125px shadow-none mb-5'>
                <div className='card-body d-flex flex-column flex-center text-center'>
                  <h3 className="h6 fs-3 mb-2 text-dark fw-bolder">Proposals</h3>
                  <p className='mb-0 text-gray-600'>Proposals by our community</p>
                </div>
              </div>
                </div>
                <div className='col-sm-6'>
                <div className='card card-custom bg-light-danger hoverable min-h-125px shadow-none mb-5'>
                <div className='card-body d-flex flex-column flex-center text-center'>
                  <h3 className=" h6 fs-3 mb-2 text-dark fw-bolder">Activity</h3>
                  <p className='mb-0 text-gray-600'>Check what we have been up to</p>
                </div>
              </div>
                  </div>
              </div>
            </div>
            <div className='col-sm-6'>
            <div className='card card-custom bg-light-info hoverable min-h-125px shadow-none mb-5'>
                <div className='card-body d-flex flex-column flex-center text-center'>
                  <h3 className=" h6 fs-3 mb-2 text-dark fw-bolder">Contributors</h3>
                  <p className='mb-0 text-gray-600'>Coming Soon!</p>
                </div>
              </div>
              <div className='row g-4'>
                <div className='col-sm-6'>
                  <div className='card card-custom bg-light hoverable min-h-125px shadow-none mb-5'>
                      <div className='card-body d-flex flex-column flex-center text-center'>
                        <h3 className=" h6 fs-3 mb-2 text-dark fw-bolder">NFT's</h3>
                        <p className='mb-0 text-gray-600'>Check out our NFT's</p>
                      </div>
                      </div>
                      
                      </div>
                      <div className='col-sm-6'>
                      <div className='card card-custom bg-light-warning hoverable min-h-125px shadow-none mb-5'>
                    <div className='card-body d-flex flex-column flex-center text-center'>
                      <h3 className=" h6 fs-3 mb-2 text-dark fw-bolder">Tokens</h3>
                      <p className='mb-0 text-gray-600'>Check out our NFT's</p>
                    </div>
                    </div>
                      </div>
                </div>
            </div>
          </div>

          <div className='mb-10 mt-10'>
            <h3 className='text-center mb-10'>My Collectibles</h3>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='card card-custom card-stretch overlay mb-5 shadow-none min-h-250px'>
                    <div className='card-body d-flex flex-column p-0'>
                      <img src="/images/placeholders/nft1.jpg" className='overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded'></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-10 mt-10'>
            <h3 className='text-center mb-4'>Top Contributors</h3>
            <div className='row mt-10'>
              <div className='col-md-3 text-center'>
                  <img src="/images/placeholders/person1.jpeg" className="d-block rounded-circle mb-3 person-image" width="162" alt="Darrell Steward" />
                  
                    <h5 className="fw-medium fs-lg mb-1">Darrell Steward</h5>
                    <p className="fs-sm mb-3">Lead Developer</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-icon btn-outline-secondary btn-facebook btn-sm me-2">
                        <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                      </a>
                      <a href="#" className="btn btn-icon btn-outline-secondary btn-stack-overflow btn-sm me-2">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                      </a>         
                </div>
              </div>
              <div className='col-md-3 text-center'>
                  <img src="/images/placeholders/person2.jpeg" className="d-block rounded-circle mb-3 person-image" width="162" alt="Darrell Steward" />
                  
                    <h5 className="fw-medium fs-lg mb-1">Lisa Newman</h5>
                    <p className="fs-sm mb-3">Binance</p>
                    <div className="text-center">
                      <a href="#" className="btn btn-icon btn-outline-secondary btn-facebook btn-sm me-2">
                        <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                      </a>
                      <a href="#" className="btn btn-icon btn-outline-secondary btn-stack-overflow btn-sm me-2">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                      </a>         
                </div>
              </div>
            </div>
          </div>
          
            <div className='row g-3'>
              <div className='col-md-6'>
              <div className='card card-alt bg-gradient-primary mt-4 p-3'>
              <h3 className='card-title text-white h5 mb-3 text-center'>About</h3>
              <p className='text-alt'>In a world where <span className='fw-bold fst-italic'>founders, customers, and capital</span> are collapsing into each other, the opportunity for a more successful and virtuous startup building mode is becoming more participant-focused. <br></br><br></br>That’s why we’re building the next iteration of Tachyon - a Networked Global Startup Ecosystem of participant-contributors, de-risking and opening the surface area for startup success so that every startup begins with the network it needs.</p>
          </div>
          <div className='card card-alt bg-gradient-primary mt-4 p-3 mb-5'>
                        <h3 className='card-title text-white h5 mb-3 text-center'>Mission</h3>
                        <p className='text-alt'>- Build a <span className='fw-bold fst-italic'>co-owned and operated networked ecosystem</span> of the most value-add members of the web3 community, across the key domains that startups need to succeed (tech, product, fundraising, hiring, g2m, etc).<br/>
- Do so at a <span className='fw-bold fst-italic'>significant scale</span>, while removing the barriers of participation between founders, mentors, investors, and the various key stakeholders of our community. <br></br>
- Create an <span className='fw-bold fst-italic'>incentive mechanism</span> that allows startups to tap the expertise of mentors in a particular domain, at scale, while remaining consistent with our <a href="nav-link">Tachyon First Principles</a></p>
                    </div>
                    </div>
                    <div className='col-md-6'>
            <div className='card card-alt bg-gradient-primary mt-4 p-3'>
              <h3 className='card-title text-white h5 mb-3 text-center'>Useful Links</h3>
              <p><aside>
📝 [**Apply**](https://prdpjz4zqoq.typeform.com/to/RxQSZ9dq?typeform-source=mesh.xyz) for Tachyon Accelerator to get funded. We’d love to support you!

</aside>

<aside>
🏁 Complete [**Bounties**](https://www.notion.so/Tachyon-Ecosystem-DAO-Bounty-Board-cdfd2c895fc3429c87929d429ded674e) to earn rewards, reputation, and swag!

</aside>

<aside>
🤺 Let us know what are your best skills and onboard as a [**Contributor**](https://airtable.com/shru6R289MZWpNK1U).

</aside>

<aside>
🙆🏼 Help founders in our accelerator by joining as a [**Mentor](https://airtable.com/shrr6pctM4D4qbGKE?utm_medium=email&_hsmi=209525074&_hsenc=p2ANqtz-8lY72TtLoT3UUDyfaJVmlW5OXPMvAIhueM3tal4M7V63iWuUGM6_OMlqATQvfXPEft4VOnx0ct5XOVBDdjaFF6wXFQ1A&utm_content=209525074&utm_source=hs_email).**

</aside>

<aside>
🗣 Create topics, Participate in open discussions, & support new initiatives at [**Tachyon Discord**](https://discord.gg/KeCEetKDAA).

</aside></p>
              </div>
          </div>
          </div>
          
        </div>
        
      </main>
    </div>
  )
}

export default Directory