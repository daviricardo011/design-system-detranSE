/* eslint-disable no-loop-func */
import { useState, useEffect } from 'react'
import { IconButton } from '../../presentation/components'
import { Link } from 'react-router-dom'

const getIndex = (table, id) => {
    var index = null;
    table.find(item => {
        if (item.nomeArquivo === id) index = table.indexOf(item)
    })
    return index
}

const add = (values, removeItem, openFile) => {
    var dataWithAction = {
        nomeArquivo: <Link onClick={() => openFile(values.anexoArquivo)} to="#">{values.nomeArquivo}</Link>,
        excluir:
            <IconButton icon="far fa-trash-alt"
                onClick={() => {
                    removeItem(values.nomeArquivo)
                }}
            />
    }
    return dataWithAction
}

const useTableActions = (data, getPartialState, openFile) => {
    const [initial, setInitial] = useState(true)
    const [table, setTable] = useState([])
    const [completeData, setCompleteData] = useState([])

    useEffect(() => {
        if (initial) {
            for (var i = 0; i < data.length; i++) {
                var aux = data[i]
                addList(aux)
            }
            setInitial(false)
        }
    }, [])

    const addList = (values) => {
        const res = add(values, removeItem, openFile)
        table.push(res)
        setTable(table)
        completeData.push(values)
        setCompleteData(completeData)
        getPartialState()
    }

    const removeItem = (id) => {
        const index = getIndex(table, id)
        table.splice(index, 1)
        setTable(table)
        completeData.splice(index, 1)
        setCompleteData(completeData)
        getPartialState()
    }

    const resetTable = (values) => {
        var aux = ''
        var i = 0
        for (i = 0; i < values.length; i++) {
            aux = values[i].nomeArquivo
            removeItem(aux)
        }
        for (i = 0; i < values.length; i++) {
            aux = values[i]
            addList(aux)
        }
    }

    return { table, completeData, addList, removeItem, resetTable }
};

export default useTableActions