import { useState } from 'react'

const useForm = (callback) => {
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        const auxValues = { ...values }
        auxValues[event.target.name] = event.target.value
        setValues(auxValues)
    }

    const handleSubmit = (callback) => (event) => {
        event.preventDefault();
        setLoading(true);
        callback();
        setLoading(false);
    }

    const handleChangeData = ({ name, data }) => {
        const auxValues = { ...values }
        auxValues[name] = data
        setValues(auxValues)
    }

    const handleChangePackData = ({ packValues }) => {
        const auxValues = { ...values }

        Object.keys(packValues).forEach((key) => {
            auxValues[key] = packValues[key]
            setValues(auxValues)
        })
    }

    return [{ values, loading, handleChangeData }, handleChange, handleSubmit, handleChangePackData]
}

export default useForm