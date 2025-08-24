import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';

function RouterConfig() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<NotFoundPage />} />


            </Routes>
        </div>
    )
}

export default RouterConfig