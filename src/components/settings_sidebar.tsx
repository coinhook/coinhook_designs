import React from "react";

export const SettingsSidebar: React.FC<{active: string}> = ({active}) => {
    return(
        <div>
            <nav className='navbar navbar-light navbar-expand-lg mx-0'>
                <div className='offcanvas offcanvas-start'>
                    <div className='card w-100'>
                        <div className='card-body'>
                            <ul className='nav nav-tabs nav-pills nav-pills-soft flex-column fw-bold gap-2 border-0'>
                                <li className='nav-item'>
                                    <a href="/settings" className={`nav-link d-flex mb-0 ${active == 'Account'? 'active': ''}`}>
                                        Account
                                    </a>
                                    <a href="/settings/treasury" className={`nav-link d-flex mb-0 ${active == 'Treasury'? 'active': ''}`}>
                                        Treasury
                                    </a>
                                    <a href="/settings/governance" className={`nav-link d-flex mb-0 ${active == 'Governance'? 'active': ''}`}>
                                        Governance
                                    </a>
                                    <a href="/settings/airdrops" className={`nav-link d-flex mb-0 ${active == 'Airdrops'? 'active': ''}`}>
                                        Airdrops
                                    </a>
                                    <a href="/settings/token_creation" className={`nav-link d-flex mb-0 ${active == 'Token Creation'? 'active': ''}`}>
                                        Tokens
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
