import React from 'react';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" onClick={() => this.props.changeView('home')}>Tattoo Assistant</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={() => this.props.changeView('home')}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => this.props.changeView('clients')}>Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => this.props.changeView('admin')}>Admin</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-danger my-2 my-sm-0" type="submit">Submit</button>
                </form>
            </nav>
        );
    }
}

export default Navbar;