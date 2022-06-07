import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../../src/components/navbar'
import { SettingsSidebar } from '../../src/components/settings_sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faArrowCircleLeft, faCopy } from '@fortawesome/free-solid-svg-icons'
import { Legend, Line, LineChart, Pie, PieChart } from "recharts";
import { SSRProvider } from "react-bootstrap";

const ViewSafe: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coinhook Settings</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Navbar></Navbar>
        </div>
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <SettingsSidebar active="Treasury"></SettingsSidebar>
                    </div>
                    <div className='col-lg-6 vstack gap-4' style={{'marginTop': '7.5px'}}>
                        <div className='tab-content py-0 mb-0'>
                            <div className='tab-pane show active fade'>
                                <a className="nav-link" href="/settings/treasury">
                                            <FontAwesomeIcon icon={faArrowCircleLeft} className="" />
                                            <span className="">&nbsp;back</span>
                                </a>
                                <div className='card my-3'>
                                    <div className='card-header border-0 mb-0'>
                                        <h2 className='h4 mb-0'>Friend with benefits Vault</h2>
                                        <p className='label fw-light text-secondary'>21iuhe32ovf18y32vfd9632re21fe155e193new
                                        <span>&nbsp;&nbsp;<FontAwesomeIcon icon={faCopy} className=""></FontAwesomeIcon></span></p>
                                    </div>
                                    <div className='card-body my-0 px-0 py-0 pb-4'>
                                        <div className='mb-2'>
                                            <h2 className='h3 my-0'>$100,000</h2>
                                            <p className='label fw-light'>Total Value</p>
                                        </div>
                                        <div className='row'>
                                        <div className='col-md-6'>
                                                <SSRProvider>
                                                        <PieChart height={180} width={280}>
                                                            <Pie dataKey="value" data={[{type: 'ETH', value: 2}, {type: 'MATIC', value: 3}]} cx="50%" cy="50%" outerRadius={70} fill="#82ca9d"></Pie>
                                                            <Legend></Legend>
                                                        </PieChart>
                                                </SSRProvider>
                                            </div>
                                            <div className='col-md-6'>
                                                <SSRProvider>
                                                        <LineChart height={180} width={280}>
                                                            <Line dataKey="value" data={[{type: 'ETH', value: 2}, {type: 'ETH', value: 6}, {type: 'ETH', value: 18}]} cx="50%" cy="50%" fill="#82ca9d"></Line>
                                                            <Line dataKey="value" data={[{type: 'MATIC', value: 2}, {type: 'MATIC', value: 3}, {type: 'MATIC', value: 7}]} cx="50%" cy="50%" fill="#82ca9d"></Line>
                                                            <Legend></Legend>
                                                        </LineChart>
                                                </SSRProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card mb-4'>
                                    <div className='card-header border-0 mb-0'>
                                        <h2 className='h5 mb-0'>Assets</h2>
                                    </div>
                                    <div className='card-body pt-0 mt-1'>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>Asset</th>
                                                    <th>Balance</th>
                                                    <th>Price</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Matic</td>
                                                    <td>200 Matic</td>
                                                    <td>10$</td>
                                                    <td>2000$</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='card-header border-0 mb-0'>
                                        <h2 className='h5 mb-0'>Top Balances</h2>
                                    </div>
                                    <div className='card-body pt-0 mt-1'>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Balance</th>
                                                    <th>% Ownership</th>
                                                    <th>Sent</th>
                                                    <th>Received</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mohak</td>
                                                    <td>2 ETH</td>
                                                    <td>60%</td>
                                                    <td>1 ETH</td>
                                                    <td>11 ETH</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='card my-4'>
                                    <div className='card-header border-0 mb-0'>
                                        <h2 className='h5 mb-0'>Transactions</h2>
                                    </div>
                                    <div className='card-body pt-0 mt-1'>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>Transaction Hash</th>
                                                    <th>Type</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>11hiu21e72193u13213qsbdiuwe30i3109</td>
                                                    <td>Contract Execution</td>
                                                    <td>12:20 pm UTC</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default ViewSafe
