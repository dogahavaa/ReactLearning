import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}


export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data
})


export const userSlice = createSlice({
    name: "user",
    initialState, //Bu satır aslında; initialState = initialState demektir. Aynı isimli olduğu için bu şekilde bir kısa kullanımı da vardır.
    reducers: {
        //Http isteği olmaz ise kullanılır.
    },
    extraReducers: (builder) => {
        //extraReducers: Http isteklerinde kullanılır
        builder.addCase(getAllUsers.fulfilled, (state, action) => { //getAllUsers fonksiyonu bir yerden çağırılırsa ve başarılı olursa virgülden sonraki fonksiyon çalıştırılsın
            //Parametre olarak verilen state bizim state'imiz, action ise getAllUsers çalıştırıldığında return ile döndürülen değer.
            state.users = action.payload;
        }
        )
    }
})


export const { } = userSlice.actions //Fonksiyon isimlerini burada belirtmeliyiz
export default userSlice.reducer