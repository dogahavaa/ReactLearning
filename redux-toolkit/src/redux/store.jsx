import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../redux/counterSlice'; //counterSlice bizim verdiğimiz bir isim
import userSlice from '../redux/userSlice';
//ProductSlice
//ApplicationSlice
//...


//Store, slicelarımızı topladığımız ve daha sonra burdan çağırdığımız yer
export const store = configureStore({
    reducer: {
        //counter: ismini biz verdik murtaza da yazılabilir. Onun karşısına yukarıda import ettiğimiz sliceımızı veriyoruz
        counter: counterSlice,
        users: userSlice
    },
})