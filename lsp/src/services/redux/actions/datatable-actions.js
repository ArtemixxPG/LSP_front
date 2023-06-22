import {checkResponse} from "../../../utils/utils";

export const REQUEST_DATA = 'REQUEST_DATA'
export const SUCCESS_DATA = 'SUCCESS_DATA'
export const ERROR_REQUEST_DATA = 'ERROR_REQUEST_DATA'

export const requestData = (url) =  dispatch  => {
    dispatch(REQUEST_DATA)
    fetch(url)
        .then(response => checkResponse(response))
        .then(data => data? data : data.then(err=> Promise.reject(err)))
        .then(result => dispatch({type: SUCCESS_DATA, payload: result}))
        .catch(err => dispatch({type: ERROR_REQUEST_DATA, payload: err}))
}