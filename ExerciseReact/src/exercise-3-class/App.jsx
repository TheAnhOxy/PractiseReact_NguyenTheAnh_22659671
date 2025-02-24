import React, { Component } from "react";
import ContactList from "./ContactList";
import { INITIAL_CONTACTS } from "./data";
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: INITIAL_CONTACTS,
        };
    }


    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    deleteAllContacts = () => {
        this.setState({ contacts: [] });
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center my-4">Contact List</h1>
                <ContactList 
                    contacts={this.state.contacts} 
                    onDeleteContact={this.deleteContact} 
                    onDeleteAll={this.deleteAllContacts} 
                />
            </div>
        );
    }
}

export default App;
