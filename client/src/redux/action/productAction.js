import axios from 'axios'
import { ALL_PRODUCT, ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCES } from '../type/productType'



export const getProducts = (products)=> async(dispatch)=> {
    dispatch({
        type: ALL_PRODUCT
    })
    try {
        const res = await axios.get('/api/products',products)
        console.log(res)
        dispatch({
            type: ALL_PRODUCT_SUCCES,
            payload: res.data.products
        })
    } catch (error) {
dispatch({
    type:ALL_PRODUCT_FAIL,
    payload: error.response.data
})
    }
}


