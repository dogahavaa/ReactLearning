import React from 'react'
import Container from './Container';

function Product(props) { //props yerine {productName, price} şeklinde de yazılabilirdi.
    const { productName, price } = props;
    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>
            <hr></hr>
            <div>
                <div>İsim   : {productName}</div>
                <div>Fiyat  : {price} TL</div>
            </div>
        </div>
    )
}

export default Product