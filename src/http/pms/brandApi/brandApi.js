import { post, get } from "../index"

const BASE_URL = 'pms-brand/'

const add = (data) => {
    return post(BASE_URL + 'add', data)
}


const edit = (data) => {
    return post(BASE_URL + 'edit', data)
}

const one = (params) => {
    return get(BASE_URL + 'one/' + params.id)
}

const page = (data) => {
    return post(BASE_URL + 'page',data)
}

const del = (params) => {
    return get(BASE_URL + 'del/' + params.id)
}

export {
    edit,  
    add,
    one,
    page,
    del
}