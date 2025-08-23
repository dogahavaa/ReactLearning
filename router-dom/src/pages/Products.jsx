import React from 'react'
import Product from '../components/Product'
import { productList } from '../data/product'

function Products() {
    return (
        <div>
            {
                productList && productList.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Products