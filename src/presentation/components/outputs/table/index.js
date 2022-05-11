import React from 'react'
import './styles.css'
export default function Table(props) {
    return (
        <div>
            <table id={props.id} className='table table-bordered table-striped table-action'>
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
                        props.item != ''
                            ?
                            props.item.map((content) => (
                                <tr>
                                    {
                                        Object.keys(props.item[0]).map((itemColumn, index) => (
                                            <td>{content[Object.keys(props.item[0])[index]]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                            :
                            <tr>
                                <td colspan={props.title.length} className="text-center">Nenhum registro encontrado</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div >
    )
}