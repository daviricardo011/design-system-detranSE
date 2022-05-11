import React from 'react'
import { Link } from 'react-router-dom'

export default function header(props) {
    return (
        <div>
            <section className='content-header'>
                <div className='container-fluid'>
                    <div className='row mb-2'>
                        <div className='col-sm-6'>
                            <h1>{props.title}</h1>
                        </div>
                        <div className='col-sm-6'>
                            <ol className='breadcrumb float-sm-right'>
                                <li className='breadcrumb-item'><Link to='/'>Início</Link></li>
                                {
                                    props.steps.map((item, index) => (
                                        <li className='breadcrumb-item active'>{item}</li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
