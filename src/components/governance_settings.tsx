import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export const GovernanceSettings: React.FC = () => {
    return(
        <div>
            <div className="card">
                <div className="card-header border-0 mb-0">
                    <h1 className="h5 card-title my-0">Governance Settings</h1>
                </div>
                <div className="card-body">
                    <div className="text-center mb-4">
                        <a href="/settings/ens" className="btn btn-primary text-center">
                            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            <p className="mb-0">Connect to Snapshot</p>
                        </a>
                    </div>
                    <div className="text-center mb-4">
                        <a href="/settings/new_safe" className="btn btn-success-soft text-center">
                            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            <p className="mb-0">Connected to Snapshot</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header border-0 mb-0">
                    <h1 className="h5 card-title my-0">Strategies</h1>
                </div>
                <div className="card-body">
                    <h3 className="h6">Select strategies (upto 8)</h3>
                    <form>
                        <div className="row p-3">
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-check-reverse">
                                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                                    <label className="form-check-label">
                                        erc20-balance-of
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-start">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}