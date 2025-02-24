import React from "react";
import ContactList from "./ContactList";
import { INITIAL_CONTACTS } from "./data";
import '../App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: INITIAL_CONTACTS
        };
    }

    render() {
        return (
            <div>
                <h1>Contact List</h1>
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }
}

export default App;
