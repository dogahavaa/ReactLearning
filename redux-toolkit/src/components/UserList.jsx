import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/userSlice';
import User from './User';

function UserList() {
    const dispatch = useDispatch();
    const { users } = useSelector((store) => store.users)
    console.log(users)

    useEffect(() => {
        dispatch(getAllUsers())
    }, []) //Sayfa ilk açıldığında çalışsın.

    return (
        <div>
            {
                users && users.map((user) => (
                    <User user={user} />
                ))
            }

        </div>
    )
}

export default UserList