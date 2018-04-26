export default function products(state = []) {
    return state; // nothing to do here, but we need products node in redux store
}

// selectors
export function getProducts(state, props) {
    return state.products;
}