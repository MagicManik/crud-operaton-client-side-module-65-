import React from 'react';

const AddUser = () => {

    // 1111111.
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name, email)

        const user = { name, email };

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            // এখানে then then এর কোনো কাজ নাই। জাস্ট ডেটাগুলা ডেটাবেস এ গিয়ে ইউজার তৈরি করছে কিনা তা চেক করার জন্য।
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('User added successfuly');
                event.target.reset();
            })
    }



    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='name' required />
                <br />
                <input type="email" name="email" id="" placeholder='email' required />
                <br />
                <input type="submit" value="User Submit" />
            </form>
        </div>
    );
};

export default AddUser;