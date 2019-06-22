import React from 'react';
import axios from 'axios';


const Login = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = e.target.username.value;
        const pass = e.target.password.value;
        axios.post('/login', {user, pass})
        .then((data) => {
            if (data.data.success === true) {
                console.log(data.data.message)
            } 
            if (data.data.success === false) {
                alert(data.data.message)
            }
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" id="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter Password" />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        </div>
        )
}


export default Login