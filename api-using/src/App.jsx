import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const base_url = "http://localhost:3000";

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(base_url + "/users")
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${base_url}/users`, newUser);
    console.log(response.data)
  }

  const updateUser = async (userID, updatedUser) => {
    //PUT: Veri güncellemek için kullanılır.
    await axios.put(`${base_url}/users/${userID}`, updatedUser);
  }

  const deleteByID = async (userID) => {
    await axios.delete(`${base_url}/users/${userID}`, userID)
  }

  const getUserByID = async (userID) => {
    const user = await axios.get(base_url + "/users/" + userID);
    return user.data.postID
  }
  const getPostByUserID = async (postID) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postID)
    return response.data
  }


  const getPost = async () => {
    const userID = await getUserByID(1);
    const postData = await getPostByUserID(userID);
    console.log(postData)
  }




  useEffect(() => {

    getPost();

    const update = {
      "password": "23245",
      "username": "fatma"
    }
    const newUser = {
      "username": "ayşe",
      "password": "2a22"
    }

    //getAllUsers();
    //getUserByID(1);
    //createUser(newUser)
    //updateUser("149b", update)
    //deleteByID("7375")

  }, [])

  return (
    <>
      <div>sa</div>
    </>
  )
}

export default App
