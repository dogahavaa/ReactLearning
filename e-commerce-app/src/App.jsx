import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from './redux/slices/cartSlice'


function App() {

  const { cartProducts, drawer } = useSelector((store) => store.cart)
  const dispatch = useDispatch();

  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer
          anchor='right'
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          <h2 style={{ padding: '20px' }}>Sepetim</h2>
          {
            cartProducts && cartProducts.map((products) => {
              return (
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center', gap: '20px', padding: '20px' }}>
                  <img src={products.image} width={50} height={50}></img>
                  <p>{products.title} ({products.count}) </p>
                  <p><b>{products.price} TL</b></p>
                  <button style={{ border: '1px solid red', color: 'red', fontWeight: 'bold', padding: '1px 10px', cursor: 'pointer' }}>Sil</button>
                </div>
              )
            })
          }
        </Drawer>
      </PageContainer>

    </div>
  )
}

export default App
