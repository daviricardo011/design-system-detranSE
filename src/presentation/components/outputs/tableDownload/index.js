import React from 'react'
import { Link } from 'react-router-dom'

export default function TableDownload(props) {

    return (
        <div>
            <table id={props.id} className="table table-bordered table-hover">
                <thead>
                    <tr>
                        {
                            props.title.map((item, index) => (
                                <th>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.item.map((item) => (
                            <tr>
                                <td>
                                    <Link onClick={() => props.f(item.anexoArquivo)} to="#">{item.nomeArquivo}</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
