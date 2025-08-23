import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, name, price } = product;

    const navigate = useNavigate(); //Bir yere yönlendirme yapmak için kullanılır.

    return (
        <div style={{ marginTop: '40px' }}>
            <div>Ürün Detayı</div>
            <h3>İsim  : {name}</h3>
            <h3>Fiyat : {price}</h3>
            <button onClick={() => navigate("/product-details/" + id)}>Detay</button>
        </div>
    )
}

export default Product