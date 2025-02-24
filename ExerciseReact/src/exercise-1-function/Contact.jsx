import React from "react";
import '../App.css';

const Contact = ({ firstName, lastName, phone, address }) => {
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

export default Contact;
