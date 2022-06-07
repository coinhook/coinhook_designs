import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../src/components/navbar'

const Explore: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coinhook</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Navbar></Navbar>
        <main className='p-5'>
            <h1 className='h4 mt-3 text-center fw-bold'>Explore communities</h1>
            <div className='row mt-3 g-4'>
              <div className='col-sm-6 col-md-3'>
                <div className='card'>
                  <div className="h-140px rounded-top card-00"></div>
                </div>
                <div className='card-body text-center pt-0'>
                  <div className='avatar avatar-lg mt-n5 mb-3'>
                    <a href="#">
                      <img className="avatar-img rounded-circle border border-white border-3 bg-white" src="/images/placeholders/fwv.jpeg"></img>
                    </a>
                  </div>
                  <h5 className='mb-0'>Friends with benefits</h5>
                  <p className='badge rounded-pill text-bg-light'>@fwb</p>
                  <p className='my-0 fs-6'><small>Friends With Benefits is a worldwide group of cultural creators, thinkers, and builders who convene digitally and IRL to collaboratively shape Web3's future.</small></p>
                  <div className="hstack my-2 gap-4 gap-xl-3 justify-content-center mt-3">      
                      <div>
                        <h6 className="mb-0">32k</h6>
                        <small>Members</small>
                      </div>
                  
                      <div className="vr"></div>
                    
                      <div>
                        <h6 className="mb-0">20</h6>
                        <small>Proposals</small>
                      </div>
                    </div>
                </div>
                <div className='card-footer text-center'>
                  <a className="btn btn-success-soft btn-sm" href="#!"> Join group </a>
                </div>
              </div>
            </div>
        </main>
      </div>
      
    </div>
  )
}

export default Explore
