import React from "react";
class AddUserInfo extends React.Component {
    state = {
        Name: "",
        Age: "",
    };

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        let newUser = {
            id: Math.floor(Math.random() * 100 + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age,
        }
        // eslint-disable-next-line react/prop-types
        this.props.handleAddnewUser(newUser);
        this.setState({
            Name: "",
            Age: "",
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} action="">
                    <div>
                        <label>Your name: </label>
                        <input type="text" name="Name" value={this.state.Name} onChange={this.handleOnChangeInput}/>
                    </div>
                    <div>
                        <label>Your Age: </label>
                        <input type="number" name="Age" value={this.state.Age} onChange={this.handleOnChangeInput}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfo