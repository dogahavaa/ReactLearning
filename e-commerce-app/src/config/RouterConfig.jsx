import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetails from '../components/ProductDetails';

function RouterConfig() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product-details/:id' element={<ProductDetails />} />

                <Route path='/*' element={<NotFoundPage />} />


            </Routes>
        </div>
    )
}

export default RouterConfig