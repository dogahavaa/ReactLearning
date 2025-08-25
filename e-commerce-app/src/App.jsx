import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'


function App() {

  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
      </PageContainer>

    </div>
  )
}

export default App
