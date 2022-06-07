import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCog, faCheck, faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Sidebar: React.FC<{active: string}> = ({active}) => {
    return(
        <div>
            <nav className='navbar navbar-light navbar-expand-lg mx-0'>
                <div className='offcanvas offcanvas-start'>
                    <div className='card w-100'>
                        
                        <div className="h-80px rounded-top card-00"></div>
                       
                        <div className='card-body pt-0'>
                            <div className="text-center">
                                <div className='avatar avatar-lg mt-n5 mb-3'>
                                    <a href="#">
                                    <img className="avatar-img rounded border border-white border-3" src="/images/placeholders/fwv.jpeg"></img>
                                    </a>
                                </div>
                                
                                <h5 className='mb-0'>Friends with benefits</h5>
                                <p className='badge rounded-pill text-bg-light'>@fwb</p>
                                <p className='my-0 mb-1 fs-6'><small>Friends With Benefits is a worldwide group of cultural creators, thinkers, and builders.</small></p>

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
                           
                            <hr></hr>
                            <ul className='nav nav-tabs nav-pills nav-pills-soft flex-column fw-bold gap-2 border-0'>
                                <li className='nav-item'>
                                    <a href="/settings" className={`nav-link d-flex mb-0 ${active == 'Overview'? 'active': ''}`}>
                                        <img src="/images/home.png" className="me-2 h-20px fa-fw"></img>
                                        Overview
                                    </a>
                                    <a href="/settings/treasury" className={`nav-link d-flex mb-0 ${active == 'Treasury'? 'active': ''}`}>
                                        <img src="/images/contract.png" className="me-2 h-20px fa-fw"></img>
                                        Proposals
                                    </a>
                                    <a href="/settings/governance" className={`nav-link d-flex mb-0 ${active == 'Governance'? 'active': ''}`}>
                                        <img src="/images/team.png" className="me-2 h-20px fa-fw"></img>
                                        Members
                                    </a>
                                    <a href="/settings/airdrops" className={`nav-link d-flex mb-0 ${active == 'Airdrops'? 'active': ''}`}>
                                        <img src="/images/token.png" className="me-2 h-20px fa-fw"></img>
                                        Tokens & NFT's
                                    </a>
                                    <a href="/settings/airdrops" className={`nav-link d-flex mb-0 ${active == 'Airdrops'? 'active': ''}`}>
                                        <img src="/images/gear.png" className="me-2 h-20px fa-fw"></img>
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <div className='d-flex justify-content-center ms-sm-auto'>
                                <div className="" data-toggle="buttons">
                                    <a className="btn btn-primary-soft">
                                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                    </a>
                                    <a className="btn btn-primary-soft ml-1 mr-1">
                                        <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                                    </a>
                                    <a className="btn btn-primary-soft">
                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
