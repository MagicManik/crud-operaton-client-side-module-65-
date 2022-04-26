import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    // 2222222.
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])




    // 3333333
    const handleUserDelete = id => {
        const procced = window.confirm('Are you sure want to delete?')
        if (procced) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })


                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h1>Total Users: {users.length}</h1>
            {
                users.map(user =>
                    <ul key={user._id}>
                        <li>Name: {user.name} Email: {user.email}
                            <Link to={`/update/${user._id}`}>Update</Link>
                            <button onClick={() => handleUserDelete(user._id)}>X</button>
                        </li>
                    </ul>)
            }
        </div>
    );
};

export default Home;