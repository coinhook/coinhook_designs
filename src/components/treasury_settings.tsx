import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faAdd, faArrowsUpToLine, faArrowUpFromBracket, faLongArrowAltUp, faPersonArrowUpFromLine, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Legend, Pie, PieChart } from "recharts";
import { SSRProvider } from "react-bootstrap";

export const TreasurySettings: React.FC = () => {
    return(
        <div>
            <div className="card mb-4">
                <div className="card-header border-0">
                    <h1 className="h5 card-title mb-4">New Gnosis Safe</h1>
                    <a href="/settings/new_safe" className="btn btn-primary">
                        <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        <p className="mb-0">New Gnosis Safe</p>
                    </a>
                    <a href="/settings/import_safe" className="btn btn-primary-soft ml-2">
                        <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                        <p className="mb-0">Import Gnosis Safe</p>
                    </a>
                </div>
                <div className="card-body">

                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header border-0">
                    
                    <h1 className="h5 card-title">Existing Safes</h1>
                </div>
                <div className="card-body" style={{'paddingTop':0}}> 
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <SSRProvider>
                                        <PieChart height={180} width={280}>
                                            <Pie dataKey="value" data={[{type: 'ETH', value: 2}, {type: 'MATIC', value: 3}]} cx="50%" cy="50%" outerRadius={70} fill="#82ca9d"></Pie>
                                        </PieChart>
                                   </SSRProvider>
                                   <h2 className="text-center h5">18 ETH</h2>
                                   <p className="label-sm text-center mb-0 fw-light">Vault Name:</p>
                                   <p className="text-center mb-1">FWB main vault</p>
                                   <p className="label-sm text-center mb-0 fw-light">Vault Address:</p>
                                   <p className="text-center mb-1">asiodhew8o7fg27vfq968c215e16f</p>
                                   <p className="label-sm text-center mb-0 fw-light">Created By:</p>
                                   <p className="text-center mb-1">asiodhew8o7fg27vfq968c215e16f</p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="/settings/view_safe" className="btn btn-primary-soft">View Vault</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

