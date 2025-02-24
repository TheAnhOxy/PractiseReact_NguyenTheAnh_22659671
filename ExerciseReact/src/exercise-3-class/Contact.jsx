import React, { Component } from "react";
import '../App.css';

class Contact extends Component {
    render() {
        const { firstName, lastName, phone, address, onDelete } = this.props;

        return (
            
                <div className="card">
                    <div className="fname"><h2>{firstName}</h2></div>
                    <div className="lname">{lastName}</div>
                    <hr />
                    <div className="phone">📞Phone: <b>{phone}</b></div>
                    <hr />
                    <div className="address">🏠Address: <b>{address}</b></div>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <button 
                            style={{ 
                                padding: "10px", 
                                backgroundColor: "red", 
                                color: "white", 
                                border: "none", 
                                cursor: "pointer" 
                            }} 
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                    </div>

                    
               
                </div>
            );
          
        
    }
}

export default Contact;
