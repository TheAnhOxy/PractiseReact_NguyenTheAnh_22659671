import React, { Component } from "react";
import Contact from "./Contact";
import '../App.css';

const ContactList = ({contacts, onDelete, onDeleteAll}) =>{
    return (
        <>
         
         <div className="row">
             <h2>Contact</h2>
         </div>
         <div className="contact-list">
           
            {contacts.map(contact => (
                <Contact  contact={contact} key={contact.id} onDelete={onDelete} ></Contact>
            ))}
         </div>

        <div className="row mb-3">
                    <div className="col text-end" style={{display : "flex", justifyContent : "flex-end"}}>
                        <button className="btn btn-danger btn-lg"  style={{padding : "10px", backgroundColor : "red", color : "white", cursor : "pointer"}} onClick={onDeleteAll}>
                            Delete All
                        </button>
                    </div>
                </div>

        
        </>
    )
}

export default ContactList;
