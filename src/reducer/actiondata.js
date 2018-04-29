import axios from 'axios';

const api = require('../services/api')

export function loadProdcts() {
    return(dispatch)=>{
        return api.getdata().then((response)=>{
            dispatch(fetchData(response));
        })
    }
}

export function fetchData(data) {
    return{
        type:"getdata",
        product:data
    }

}
