import React from "react"
import $ from 'jquery';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    // SIGNS UP A NEW CLIENT


    form() {
        return (
            <form className="needs-validation" onSubmit={this.submitForm.bind(this)}>

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label id="assign">Who is this client assigned to?</label>
                        <select id="assign" className="form-control form-control-sm">
                            <option defaultValue>Choose...</option>
                            {this.props.admin.map((elem, i) => {
                                return <option key={i}>{elem}</option>;
                            })}
                        </select>
                    </div>
                </div>


                <div className="form-row">
                    <div className="col-sm-4 mb-3">
                        <label id="firstName">First Name</label>
                        <input type="text" className="form-control form-control-sm" id="firstName" placeholder="John" required />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label id="lastName">Last Name</label>
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="Doe" required/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-sm-4 mb-3">
                        <label id="phoneNumber">Phone Number</label>
                        <input type="phone" className="form-control form-control-sm" id="phoneNumber" placeholder="(555) 555-5555" />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label id="birthday">Birthday</label>
                        <input type="text" className="form-control form-control-sm" id="birthday" placeholder="01/11/2011" />
                    </div>
                </div>

                <div className="form-group ">
                    <label id="email">Email</label>
                    <input type="email" className="form-control form-control-sm" id="email" placeholder="name@email.com" required/>
                </div>

                <div className="form-group ">
                    <label id="address">Address</label>
                    <input type="text" className="form-control form-control-sm" id="address" placeholder="1234 Main St." required/>
                </div>

                <div className="form-group ">
                    <label id="address2">Address 2</label>
                    <input type="text" className="form-control form-control-sm" id="address2" placeholder="Apartment, studio, or floor" />
                </div>

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label id="city">City</label>
                        <input type="text" className="form-control form-control-sm" id="city" placeholder="Enter city" required/>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label id="state">State</label>
                        <select id="state" className="form-control form-control-sm" required> {/* list of 50 states under*/}
                            <option defaultValue>Choose...</option>
                            <option>AL</option>
                            <option>AK</option>
                            <option>AZ</option>
                            <option>AR</option>
                            <option>CA</option>
                            <option>CO</option>
                            <option>CT</option>
                            <option>DE</option>
                            <option>FL</option>
                            <option>GA</option>
                            <option>HI</option>
                            <option>ID</option>
                            <option>IL</option>
                            <option>IN</option>
                            <option>IA</option>
                            <option>KS</option>
                            <option>KY</option>
                            <option>LA</option>
                            <option>ME</option>
                            <option>MD</option>
                            <option>MA</option>
                            <option>MI</option>
                            <option>MN</option>
                            <option>MS</option>
                            <option>MO</option>
                            <option>MT</option>
                            <option>NE</option>
                            <option>NV</option>
                            <option>NH</option>
                            <option>NJ</option>
                            <option>NM</option>
                            <option>NY</option>
                            <option>NC</option>
                            <option>ND</option>
                            <option>OH</option>
                            <option>OK</option>
                            <option>OR</option>
                            <option>PA</option>
                            <option>RI</option>
                            <option>SC</option>
                            <option>SD</option>
                            <option>TN</option>
                            <option>TX</option>
                            <option>UT</option>
                            <option>VT</option>
                            <option>VA</option>
                            <option>WA</option>
                            <option>WV</option>
                            <option>WI</option>
                            <option>WY</option>
                        </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label id="zipCode">Zip</label>
                        <input type="text" className="form-control form-control-sm" id="zipCode" placeholder="Enter Zip Code" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label id="clientRank">Client Rank</label>
                        <select id="clientRank" className="form-control form-control-sm">
                            <option defaultValue>Choose...</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>F</option>
                        </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label id="preferredArt">Preferred Art</label>
                        <input type="text" className="form-control form-control-sm" id="preferredArt" placeholder="Enter art preference" />
                    </div>
                </div>

                <div className="form-group">
                    <label id="notes">Notes</label>
                    <input type="text" className="form-control form-control" id="notes" placeholder="Enter notes here" />
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>

            </form>
        );
    }


    submitForm(e) {
        e.preventDefault();
        const t = e.target;
        $.ajax({
            method: "POST",
            url: '/newClient',
            data: {
                assign: t.assign.value,
                firstName: t.firstName.value,
                lastName: t.lastName.value,
                phoneNumber: t.phoneNumber.value,
                birthday: t.birthday.value,
                email: t.email.value,
                address: t.address.value,
                address2: t.address2.value,
                city: t.city.value,
                state: t.state.value,
                zipCode: t.zipCode.value,
                clientRank: t.clientRank.value,
                preferredArt: t.preferredArt.value,
                notes: t.notes.value
            },
            success: function() {
                console.log('Data has sent successfully to server')
            },
            error: function(err) {
                console.log(err, "ERROR")
            }
        });
    }

        render() {
            return (
                <div>
                    {this.form()}
                </div>
            );
    };
};



export default Form;