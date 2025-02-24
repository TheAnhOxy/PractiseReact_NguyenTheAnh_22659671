import React, { useState } from "react";
import ContactList from "./ContactList";
import { INITIAL_CONTACTS } from "./data";
import '../App.css';

const App = () =>{
    const [contacts, setContacts] = useState(INITIAL_CONTACTS);

    return(
        <div>
            <h1>Contact List</h1>
            <ContactList contacts = {contacts}></ContactList>
        </div>
    )
}

export default App;
