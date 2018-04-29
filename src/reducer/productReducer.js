let defaultState ={
    product:[]
}

// selectors
const getProducts = (state=defaultState, action) => {
    if(action.type === "getdata"){
        return{
            ...state,
            product:action.product
        }
    }else {
        return{
            ...state
        }
    }
}

export default getProducts;

