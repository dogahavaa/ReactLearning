import { createSlice } from '@reduxjs/toolkit'

const initialState = { //STATE
    value: 26
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: { // reducers -> fonksiyonlarımızı burada tutuyoruz

        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
    },
})

export const { increment, decrement } = counterSlice.actions //Fonksiyon isimlerini burada belirtmeliyiz
export default counterSlice.reducer
