import React, { useState } from 'react'
import '../css/Header.css'
import { IoCartOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";



function Header() {

    const [theme, setTheme] = useState(false)

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


    return (
        <div className='flex-column-spacebetween' style={{ paddingTop: '10px' }}>
            <div className='flex-row' style={{ justifyContent: 'flex-start' }}>
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

                    <IoCartOutline className='icons-item' />
                </div>

            </div>
        </div>
    )
}

export default Header