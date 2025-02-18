import React from "react";
class DisplayInfo extends React.Component{
    constructor(props){
        console.log("call constructor");
        super(props);
        this.state = {
            isShowHideListUser: true
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowHideListUser: !this.state.isShowHideListUser
        })
    }

    render(){
        // eslint-disable-next-line react/prop-types
        const { listUser, handleDeleteUser } = this.props;
        const { isShowHideListUser } = this.state;
        console.log(listUser)

        return (
            <div>
                <button onClick={this.handleShowHide}>
                    {isShowHideListUser ? "Hide list User" : "Show list User"}
                </button>

                {isShowHideListUser && 
                listUser && listUser.length > 0 &&
                listUser.map((user) => {
                    return (
                        <div key={user.id} className={user.Age > 18 ? "red" : "blue"}>
                            <div>
                                <div>User name is: {user.Name}</div>
                                <div>User age is: {user.Age}</div>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                <hr />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo