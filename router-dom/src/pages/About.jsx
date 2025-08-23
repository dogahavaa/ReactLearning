import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About</h1>
            <hr></hr>
            <div>
                <Link style={{ marginRight: "10px" }} to={"employee"}>Çalışanlar</Link>
                <Link to={"company"}>Şirket</Link>
            </div>
            <Outlet />
            {
                //Outlet componenti parent componentte alta yazılır.
            }
        </div>
    )
}

export default About