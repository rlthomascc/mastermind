import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Form from '../src/components/Form.jsx';
import SignUp from '../src/components/SignUp.jsx';
import Navbar from '../src/components/Navbar.jsx';
import Clients from '../src/components/Clients.jsx';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        formVisible: false,
        userFormVisible: false,
        currentAdmin: [1, 2],
        currentClients: [1, 2],
        view: 'home'
        }
    }

    componentDidMount(e) {
        $.ajax({
            method: "GET",
            url: '/admin',
            error: function(err) {
                console.log(err)
            },
            success: function(data) {
                this.changeCurrentAdmin(data);
            }.bind(this)
        });

        $.ajax({
            method: "GET",
            url: 'clients',
            error: function(err) {
                console.log(err);
            },
            success: function(data) {
                this.changeCurrentClients(data);
            }.bind(this)
        })
    }

    changeCurrentClients(data) {
        this.setState({
            currentClients: data
        })
    }

    changeCurrentAdmin(data) {
        this.setState({
            currentAdmin: data
        });
    }


    //For CRM Form
    newClientBtn() {
        this.setState({
            formVisible: true
        });
    }

    //For CRM Form
    formClose() {
        this.setState({
            formVisible: false,
        });
    }

    newUserBtn() {
        this.setState({
            userFormVisible: true
        });
    }

    userFormClose() {
        this.setState({
            userFormVisible: false
        })
    }

    changeView(e) {
        this.setState({
            view: e
        });
    }



    renderView() {
        if (this.state.view === 'home') {
            return (
                <section>

            <Navbar changeView={this.changeView.bind(this)}/>

            {this.componentDidMount.bind(this)}
            <br></br>
            {/* NEW CLIENT BUTTON */}

            <div id="container">

            <button className="clientButton btn btn-primary" onClick={this.newClientBtn.bind(this)}>New Client</button>
            <button className="adminButton btn btn-primary" onClick={this.newUserBtn.bind(this)}>New Admin</button>

            <Modal
                visible={this.state.formVisible}
                width="90%"
                height="94%"
                effect="fadeInLeft"
                onClickAway={this.formClose.bind(this)}
                >
                <Form admin={this.state.currentAdmin}/>
                </Modal>

            {/* NEW ADMIN BUTTON */}
            <Modal
                visible={this.state.userFormVisible}
                width="50%"
                height="47%"
                effect="fadeInRight"
                onClickAway={this.userFormClose.bind(this)}
                >
                <SignUp />
                </Modal>
            </div>
            </section>
            );

        } else if (this.state.view === 'clients') {
                return (
                    <div>
                        <Navbar changeView={this.changeView.bind(this)} />
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Client Rank</th>
                                    <th scope="col">Assigned To</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Preferred Art</th>
                                </tr>
                            </thead>
                        </table>
                        {this.state.currentClients.map((elem, i) => {
                            return <Clients key={i} inc={i} clients={elem} />
                        })}
                    </div>
                );
        } else if (this.state.view === 'admin') {
            return (
                <div>
                    <Navbar changeView={this.changeView.bind(this)}/>
                </div>
            );
        }

    }



    render() {
        return (
            this.renderView()
        );
    };
};

export default App;