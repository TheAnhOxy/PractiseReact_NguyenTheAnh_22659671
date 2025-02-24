import React from "react";
import Contact from "./Contact";

class ContactList extends React.Component {
    render() {
        return (
            <div className="contact-list">
                {this.props.contacts.map(contact => (
                    <Contact key={contact.id} {...contact} />
                ))}
            </div>
        );
    }
}

export default ContactList;
