import React from 'react'
import { useParams } from 'react-router-dom'
import { productList } from '../data/product';
import Product from '../components/Product';

function ProductDetails() {

    const { id } = useParams();

    return (
        <div>
            <h1>Ürün Detayı</h1>
            <div>
                {
                    productList && productList.map((product) => {
                        if (product.id === id) return <Product product={product} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductDetails