import React, { useState } from 'react'
import '../css/Header.css'
import { IoCartOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/cartSlice';



function Header() {

    const { cartProducts } = useSelector((store) => store.cart)

    const [theme, setTheme] = useState(false)

    const dispatch = useDispatch();

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);

        if (theme) {
            root.style.backgroundColor = "#F7F7F7";
            root.style.color = "#2D2D2D";
        } else {
            root.style.backgroundColor = "#1A1A1A";
            root.style.color = "#E0E0E0";
        }
    }

    const navigate = useNavigate();

    return (
        <div className='flex-column-spacebetween' style={{ paddingTop: '10px' }}>
            <div onClick={() => navigate('/')} className='flex-row' style={{ justifyContent: 'flex-start', cursor: 'pointer' }}>
                <img className='logo' src='./src/assets/logoo.png' />
                <p className='logo-text'>DOĞA HAVA A.Ş.</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' placeholder='Bir şeyler arayın..' type='text'></input>
                <div className='icons-div'>
                    {
                        theme
                            ? <CiLight className='icons-item' onClick={changeTheme} />
                            : <FaMoon className='icons-item' onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={cartProducts.length} color='error'>
                        <IoCartOutline className='icons-item' />
                    </Badge>

                </div>

            </div>
        </div>
    )
}

export default Header