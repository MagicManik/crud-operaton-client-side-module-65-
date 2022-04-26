import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])


    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name, email)

        const UpdatedUser = { name, email };


        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('User added successfuly');
                event.target.reset();
            })
    }



    return (
        <div>
            <h1>Updating User: {user.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" placeholder='name' required />
                <br />
                <input type="email" name="email" id="" placeholder='email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;