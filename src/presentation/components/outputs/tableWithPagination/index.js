import React, { useState } from 'react'
import useTable from '../../../../main/hooks/useTable'
import './styles.css';
import TableFooter from './components/tableFooter';

export default function TableWithPagination({ id, title, item, rowsPerPage }) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(item, page, rowsPerPage);

    return (
        <div>
            <table id={id} className='table table-bordered table-striped table-action'>
                <thead>
                    <tr>
                        {
                            title.map((item) => (
                                <th>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        slice.map((content) => (
                            <tr>
                                {
                                    Object.keys(slice[0]).map((_, index) => (
                                        <td>{content[Object.keys(slice[0])[index]]}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </div >
    )
}
