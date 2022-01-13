import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(baseUrl)

    return request.then(res => res.data)
}

const addPhone = (newPhone) => {
    const request = axios.post(baseUrl, newPhone)

    return request.then(res => res.data)
}

const editPhone = (id, newPhone) => {
    const request = axios.put(`${baseUrl}/${id}`, newPhone)
    
    return request.then(res => res.data)
}

const deletePhone = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)

    return request.then(res => res.data)
}

export default {
    getAll, 
    addPhone,
    editPhone,
    deletePhone
}