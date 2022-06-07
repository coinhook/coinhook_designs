import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    }
    }, []);
useEffect(() => {
    const script = document.createElement('script');
    
    script.src = "/js/blinds.js";
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
        document.body.removeChild(script);
    }
    }, []);
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
          <div className='container py-4'>
              <div className='row'>
                <div className='col-md-8'>
                    <div className="sticky-bottom">
                        <div className='v_blinds'>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='card card-alt p-2'>
                    <div className='card-header'>
              <h3 className='card-title text-white h5 text-center'>About</h3>
              </div>
              <div className='card-body'>
              <p className='text-alt'>In a world where <span className='fw-bold fst-italic'>founders, customers, and capital</span> are collapsing into each other, the opportunity for a more successful and virtuous startup building mode is becoming more participant-focused. <br></br><br></br>That’s why we’re building the next iteration of Tachyon - a Networked Global Startup Ecosystem of participant-contributors, de-risking and opening the surface area for startup success so that every startup begins with the network it needs.</p>
              </div>
          </div>
          <div className='card card-alt bg-gradient-primary mt-4 p-3 mb-5'>
                <div className='card-header'>
                        <h3 className='card-title text-white h5 mb-3 text-center'>Mission</h3>
                        </div>
                        <div className='card-body'>
                        <p className='text-alt'>- Build a <span className='fw-bold fst-italic'>co-owned and operated networked ecosystem</span> of the most value-add members of the web3 community, across the key domains that startups need to succeed (tech, product, fundraising, hiring, g2m, etc).<br/>
- Do so at a <span className='fw-bold fst-italic'>significant scale</span>, while removing the barriers of participation between founders, mentors, investors, and the various key stakeholders of our community. <br></br>
- Create an <span className='fw-bold fst-italic'>incentive mechanism</span> that allows startups to tap the expertise of mentors in a particular domain, at scale, while remaining consistent with our <a href="nav-link">Tachyon First Principles</a></p>
                    </div>
                    </div>
                    <div className='card card-alt bg-gradient-primary mt-4 p-3'>
              <h3 className='card-title text-white h5 mb-3 text-center'>Useful Links</h3>
              
              </div>
          
                </div>
            </div>
          </div>
      </main>
      <footer className='display-flex mt-10 mb-3'>
          <div className='container text-center'>
              <a>Powered with <img width="150" src="/images/coinhook.svg"></img></a>
          </div>
      </footer>
    </div>
  )
}

export default Home
