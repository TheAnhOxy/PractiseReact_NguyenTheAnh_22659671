import React, { Component } from "react";
import Contact from "./Contact";
import '../App.css';

class ContactList extends Component {
    render() {
        const { contacts, onDeleteContact, onDeleteAll } = this.props;

        return (
            <>
                <div className="row">
                    <h2>Contacts</h2>
                </div>
                <ul className="contact-list">
                    {contacts.map(contact => (
                        <Contact 
                            key={contact.id} 
                            {...contact} 
                            onDelete={() => onDeleteContact(contact.id)} 
                        />
                    ))}
                </ul>
                <div className="row mb-3">
                    <div className="col text-end" style={{display : "flex", justifyContent : "flex-end"}}>
                        <button className="btn btn-danger btn-lg"  style={{padding : "10px", backgroundColor : "red", color : "white", cursor : "pointer"}} onClick={onDeleteAll}>
                            Delete All
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactList;
