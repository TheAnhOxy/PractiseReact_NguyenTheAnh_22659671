import React from "react";
class Childcomponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valueInput:''
        }
    }

    handleInput = (event) => {
        // console.log(event.target.value)
        this.setState({
            valueInput: event.target.value
        })
    }

    handleClick(event){
        console.log(this.event.target)
    }

    render(){
        console.log("====================");
        console.log(this.props);
        console.log("====================");
        let { valueInput } = this.state
        return (
            <div>
                <div>
                    <input value={this.state.valueInput} onChange={(event) => {this.handleInput(event)}} type="text" />
                </div>
                <div>
                    <span>{this.state.valueInput}</span>
                </div>
            </div>
            
        )
    }
}

export default Childcomponent