import React from "react";
import Contact from "./Contact";

const ContactList = ({contacts}) =>{
    return (
        <div className="contact-list">
            {contacts.map(contact =>(
                <Contact key={contact.id} {...contact}></Contact>
            ))}
        </div>
    )

}

export default ContactList;