import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

export const AccountSettings: React.FC = () => {
    return(
        <div>
            <div className="card mb-4">
                <div className="card-header border-0 mb-0">
                    <h1 className="h5 card-title my-0">Account Settings</h1>
                </div>
                <div className="card-body my-0">
                    <form className='' id="create-community-form">
                        <label className="form-label">Community Name</label>
                        <div className='mb-3 input-group'>
                                <div className="input-group-prepend">
                                <div className="input-group-text" style={{'height':'45px'}}>@</div>
                                </div>
                                <input type="text" className="form-control" placeholder="Community Name" style={{'height':'45px'}}></input>
                        </div>
                        <div className='mb-3 input-group-lg'>
                            <label className="form-label">Community Mission</label>
                            <input className='form-control' placeholder='Mission'></input>
                        </div>
                        <div className='mb-3 input-group-lg'>
                            <label className="form-label">Community type</label>
                            <select className="form-control custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Choose community type</option>
                                <option value="1">NFT DAO</option>
                                <option value="2">Community DAO</option>
                                <option value="3">Investment DAO</option>
                            </select>
                        </div>
                        <div className='mb-3 input-group-lg'>
                            <label className="form-label">Chain</label>
                            <select className="form-control custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Choose chain</option>
                                <option value="1">Ethereum</option>
                                <option value="2">Polygon</option>
                                <option value="3">Fantom</option>
                            </select>
                        </div>
                        <div className='mb-3 input-group-lg'>
                            <label className="form-label">Twitter</label>
                            <input className='form-control' placeholder='ww.twitter.com/hola'></input>
                        </div>
                        <div className='mb-3 input-group-lg'>
                            <label className="form-label">Facebook</label>
                            <input className='form-control' placeholder='ww.twitter.com/hola'></input>
                        </div>
                        <div className='mb-3 input-group-lg'>
                            <label className="form-label">Discord</label>
                            <input className='form-control' placeholder='ww.twitter.com/hola'></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Account Logo</label>
                            <input className="form-control" type="file" id="formFile"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Account Cover</label>
                            <input className="form-control" type="file" id="formFile"></input>
                        </div>
                        <div className="col-12 text-START">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header border-0">
                    <h1 className="h5 card-title">Admin Settings</h1>
                        <label className="form-label">Manage the admins of the account</label>
                        <div className='mb-3 input-group'>
                            <input className='form-control' placeholder='ABC Vault'></input>
                            <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                        </div>
                        <div className='mb-3 input-group'>
                            <input className='form-control' placeholder='ABC Vault'></input>
                            <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                        </div>
                        <a className="mb-3 btn btn-sm btn-dashed rounded mt-2 p-2">
                            <FontAwesomeIcon className="ml-1" icon={faPlusCircle}></FontAwesomeIcon>
                            &nbsp; &nbsp;Add a new admin
                        </a>
                        <div className="col-12 text-start">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                </div>
                <div className="card-body">
                    
                </div>
            </div>
        </div>
    )
}