import React from 'react';


const Login = (props) => {

    let handleSubmit = (e) => {
        console.log(e.target.username.value, e.target.password.value)
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