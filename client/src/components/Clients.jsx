import React from 'react';


class Clients extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <table className="table table-sm">
                <tbody>
                    <tr>
                        <th scope="row">{this.props.inc}</th>
                        <td>{this.props.clients.clientRank}</td>
                        <td>{this.props.clients.assign}</td>
                        <td>{this.props.clients.firstName + ' ' + this.props.clients.lastName}</td>
                        <td>{this.props.clients.phoneNumber}</td>
                        <td>{this.props.clients.birthday}</td>
                        <td>{this.props.clients.email}</td>
                        <td>{this.props.clients.address + ' ' + this.props.clients.address2 + ' ' + this.props.clients.city + ' ' + this.props.clients.state + ' ' + this.props.clients.zipCode}</td>
                        <td>{this.props.clients.prefferedArt}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Clients;