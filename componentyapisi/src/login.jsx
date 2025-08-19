import React from 'react'

export const users = [
    {
        isim: "Doğa",
        soyisim: "Hava"
    },
    {
        isim: "Ali",
        soyisim: "Veli"
    }
]

function Login() {
    return (

        <div>
            <div>
                <p>Kullanıcı Adı</p>
                <input type="text" />
            </div>
            <div>
                <p>Şifre</p>
                <input type="text" />
            </div>
            <br></br>
            <button>Giriş Yap</button>
        </div>

    )
}

export default Login