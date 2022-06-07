import type { NextPage } from 'next'
import Head from 'next/head'

const Create: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create community</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <div className='container'>
              <div className='row justify-content-center align-items-center vh-100 py-5'>
                  <div className='col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5'>
                      
                      <div className='card card-body rounded-3 p-4 p-sm-5'>
                          <div className='text-center'>
                          <img className="light-mode-item navbar-brand-item mb-5" src="/images/coinhook.png" alt="logo" width="166"></img>
                            <h1 className='h3'>Create community</h1>
                            <form className='mt-4' id="create-community-form">
                                <div className='mb-3 input-group'>
                                    
                                        <div className="input-group-prepend">
                                        <div className="input-group-text" style={{'height':'45px'}}>@</div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Community Name" style={{'height':'45px'}}></input>
                                
                                </div>
                                <div className='mb-3 input-group-lg'>
                                    <input className='form-control' placeholder='Mission'></input>
                                </div>
                                <div className='mb-3 input-group-lg'>
                                    <select className="form-control custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>Choose community type</option>
                                        <option value="1">NFT DAO</option>
                                        <option value="2">Community DAO</option>
                                        <option value="3">Investment DAO</option>
                                    </select>
                                </div>
                                <div className='mb-3 input-group-lg'>
                                    <select className="form-control custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>Choose chain</option>
                                        <option value="1">Ethereum</option>
                                        <option value="2">Polygon</option>
                                        <option value="3">Fantom</option>
                                    </select>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-lg btn-primary">Create</button>
                                </div>
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Create