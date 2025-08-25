import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from '@mui/material/Button';
import { addToCart } from '../redux/slices/cartSlice';


function ProductDetails() {

    const { id } = useParams(); //Gönderilen id'yi yakalamak için
    const { products, selectedProduct } = useSelector((store) => store.product)
    const dispatch = useDispatch(); //Reducer'daki fonksiyonları yakalamak için
    const { price, image, title, description } = selectedProduct;
    const [count, setCount] = useState(0);


    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        const product = products.find((product) => product.id === parseInt(id));
        if (product) {
            dispatch(setSelectedProduct(product))
        }
    }

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const addCart = () => {
        const payload = {
            id,
            price,
            title,
            description,
            count: count
        }

        dispatch(addToCart(payload))
    }

    return (
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row' }} >
            <div style={{ marginRight: '50px' }} >
                <img src={image} width={300} height={400}></img>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p style={{ color: 'orangered', fontWeight: 'bold', fontSize: '25pt' }}>{price} TL</p>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                    <FaMinus onClick={decrement} style={{ fontSize: '30px' }} />
                    <span style={{ fontSize: '45px' }}  >{count}</span>
                    <FaPlus onClick={increment} style={{ fontSize: '30px' }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Button onClick={addCart} sx={{ backgroundColor: 'orangered' }} variant="contained">Sepete Ekle</Button>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails