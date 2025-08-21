import React, { useState } from 'react'
import '../css/currency.css'
import { SlArrowRight } from "react-icons/sl";
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = "fca_live_pJ5LeBvuB7ud19tfKD7al8QfexvX1Y4TbAeB68";
//eB

function Currency() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);

    }

    return (
        <div className='currency-div'>
            <div className='currency-title'>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div className='content-div'>
                <input type='number' className='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <div className='select-div'>
                    <select
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className='from-currency-option'>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                    </select>
                    <SlArrowRight />
                    <select
                        onChange={(e) => setToCurrency(e.target.value)}
                        className='to-currency-option'>
                        <option>TRY</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type='number' className='result' />
                <button
                    onClick={exchange}
                    className='exchange-button'>ÇEVİR</button>
            </div>

        </div>
    )
}

export default Currency