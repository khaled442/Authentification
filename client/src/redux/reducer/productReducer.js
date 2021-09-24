import { ALL_PRODUCT, ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCES } from "../type/productType";

const initialState ={
    products:[]
}

export const productReducer = (state =initialState , {type,payload}) =>{
    switch (type) {
        case ALL_PRODUCT:
            return {...state, loading:true}
        case ALL_PRODUCT_SUCCES:
            return {...state,loading:false,products:payload }    
        case ALL_PRODUCT_FAIL:
            return{...state, loading:false, error:payload}
    
        default:return state
            
    }
}