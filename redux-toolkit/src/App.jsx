import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './redux/store'
import { decrement, increment } from './redux/counterSlice';
import UserList from './components/UserList';

function App() {

  //const { value } = useSelector((store) => store.counter); //SADECE STATE OLARAK TANIMLANAN INITIAL STATE DEĞERİ DÖNER ! 
  //const dispatch = useDispatch(); //Slice'ın içindeki fonksiyonları dispatch'e atar. Daha sonra dispatch(fonksiyonAdi()) şeklinde kullanılır.

  return (
    <>
      {
        /*
              <div>{value}</div>
              <div>
                <button onClick={() => dispatch(increment())}>Arttır</button>
                <button onClick={() => dispatch(decrement())}>Azalt</button>
              </div>
          */
      }
      <UserList />
    </>
  )
}

export default App
