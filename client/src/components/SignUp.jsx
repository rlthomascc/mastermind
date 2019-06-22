import React from 'react';
import $ from 'jquery';


class SignUp extends React.Component {
    // SIGNS UP A NEW ADMIN



    form() {
        return (
            <form className="needs-validation" onSubmit={this.submitForm.bind(this)} >
                <div className="form-group">
                    <label className="username">Username</label>
                    <input type="text" id="usernameUser" className="form-control form-control-6" placeholder="@Username" required/>
                </div>

                <div className="form-group">
                    <label className="fullName">Full Name</label>
                    <input type="text" id="fullName" className="form-control form-control-6" placeholder="John Doe" required />
                </div>

                <div className="form-row">
                    <div className="col-sm-4 mb-3">
                        <label className="email">Email</label>
                        <input type="email" id="emailUser" className="form-control" placeholder="name@email.com" required />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label className="title">Job Title</label>
                        <input type ="text" id="titleUser" className="form-control" placeholder="Barber/Tattoo artist" required />
                    </div>
                </div>

                <div className="form-group">
                    <label className="password">Password</label>
                    <input type="password" id="passwordUser" className="form-control form-control-sm" required />
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }


    submitForm(e) {
        e.preventDefault();
        const t = e.target;
        console.log(t.fullName.value);
        $.ajax({
            method: "POST",
            url: '/admin',
            data: {
                username: t.usernameUser.value,
                fullName: t.fullName.value,
                email: t.emailUser.value,
                title: t.titleUser.value,
                password: t.passwordUser.value
            },
            success: function() {
                console.log('Data sent successfully to server')
            },
            error: function(err) {
                console.log(err)
            }
        })

    }




    render() {
        return (
            <div>
                {this.form()}
            </div>
        );
    }
}


export default SignUp;