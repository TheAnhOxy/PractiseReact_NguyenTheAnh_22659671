import React, { Component } from "react";
import '../App.css';

const Contact = ({contact, onDelete}) => {
    return (
        <div className="card">
            <div className="fname"><h2>{contact.firstName}</h2></div>
            <div className="lname"><h2>{contact.lastName}</h2></div>
            <hr/>
            <div className="phone">Phone: <b>{contact.phone}</b></div>
            <hr/>
            <div className="address">Address: <b>{contact.address}</b></div>
            <hr/>
            <div style={{display:"flex", justifyContent : "flex-end"}}>
                <button style={{backgroundColor: "red", cursor:"pointer", border:"None", color: "white"}} onClick={() => onDelete(contact.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Contact;
