import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig'


function App() {

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
      </PageContainer>

    </div>
  )
}

export default App
