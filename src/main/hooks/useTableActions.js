/* eslint-disable no-loop-func */
import { useState, useEffect } from 'react'
import { IconButton } from '../../presentation/components'

const getIndex = (table, id) => {
    var index = null;
    table.find(item => {
        if (item.cpf === id) index = table.indexOf(item)
    })
    return index
}

const add = (values, removeItem) => {
    var dataWithAction = {
        cpf: values.cpf,
        nome: values.nome,
        excluir:
            <IconButton icon="far fa-trash-alt"
                onClick={() => {
                    removeItem(values.cpf)
                }}
            />
    }
    return dataWithAction
}

const useTableActions = (data, getPartialState) => {
    const [initial, setInitial] = useState(true);
    const [table, setTable] = useState([]);
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
        const res = add(values, removeItem)
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

    return { table, completeData, addList, removeItem }
};

export default useTableActions