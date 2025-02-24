import React, { Component, useState } from "react";
import ContactList from "./ContactList";
import { INITIAL_CONTACTS } from "./data";
import '../App.css';


const App = () => {
    const[contactList, setContactList] = useState(INITIAL_CONTACTS);

    const onDelete = (id) =>{
        setContactList(contactList.filter(contact => contact.id !== id));
    }

    const handleDeleteAll = () =>{
        setContactList([]);
    } 



    return (
        <ContactList contacts={contactList} onDelete={onDelete} onDeleteAll={handleDeleteAll}></ContactList>
    )
}

export default App;
