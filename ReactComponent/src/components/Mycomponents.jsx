import React from "react";
// import Childcomponent from "./Childcomponents";
import DisplayInfo from "./DisplayInfo"
import AddUserInfo from "./AddUserInfo"
class Mycomponent extends React.Component {
    state = {
        listUser: [
            {id: 1, Name: "Nguyễn Hải Anh", Age: 29},
            {id: 2, Name: "Nguyễn Thái An", Age: 18},
            {id: 3, Name: "Bùi Thế Cường", Age: 19},
        ]
    }

    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userID)
        this.setState({
            listUser: listUserClone
        })
    }

    handleOnchangeInput = (event) => {
        this.setState({
            Name: <event className="target value"></event>
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)
        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        })
    }

    render(){

        return (
            <div>
         
                <div>My name: Nguyễn Thế Anh</div>
                <div>Address: QB</div>
                <div>My Age: 21</div>
                <hr />
                <div>
                    <AddUserInfo handleAddnewUser={this.handleAddnewUser}></AddUserInfo>
                </div>
                <hr />
                <DisplayInfo listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}></DisplayInfo>
            </div>
        )
    }
}

export default Mycomponent