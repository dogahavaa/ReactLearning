import React from 'react'
import { Link } from 'react-router-dom'



function Header() {

    return (
        <div className='header'>
            <Link to="/">Anasayfa</Link>
            <Link to="/products">Ürünler</Link>
            <Link to="/about">Hakkında</Link>
            <Link to="/contact">İletişim</Link>
        </div>
    )
}

export default Header