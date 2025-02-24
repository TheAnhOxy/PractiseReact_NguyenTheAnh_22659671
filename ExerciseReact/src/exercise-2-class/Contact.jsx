import React from "react";
import '../App.css';

class Contact extends React.Component {
    render() {
        const { firstName, lastName, phone, address } = this.props;

        return (
            <div className="card">
                <div className="fname"><h2>{firstName}</h2></div>
                <div className="lname">{lastName}</div>
                <hr />
                <div className="phone">Phone: <b>{phone}</b></div>
                <hr />
                <div className="address">Address: <b>{address}</b></div>
            </div>
        );
    }
}

export default Contact;
