import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

const initialState = {
    cartProducts: getCartFromStorage(),
    drawer: false
}

const writeFromCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.cartProducts.find((product) => product.id === action.payload.id)
            if (findProduct) {
                const extractedProduct = state.cartProducts.filter((product) => product.id != action.payload.id)
                findProduct.count += action.payload.count;
                state.cartProducts = [...extractedProduct, findProduct];
                writeFromCartToStorage(state.cartProducts)
            } else {
                state.cartProducts = [...state.cartProducts, action.payload];
                writeFromCartToStorage(state.cartProducts)
            }
        },
        setDrawer: (state) => {
            console.log("set drawer çalıştı")
            console.log("Drawer durumu : " + state.drawer)
            state.drawer = !state.drawer;
        }
    }
})

export const { addToCart, setDrawer } = cartSlice.actions
export default cartSlice.reducer
