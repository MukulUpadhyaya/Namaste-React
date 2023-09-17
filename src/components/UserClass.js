import React from "react";

export class UserClass extends React.Component{
    constructor(props){
        console.log("Child-Class-Constructor");
        super(props);
        this.state = {
            count: 0,
            count2: 1
        }
    }
        componentDidMount(){
            console.log("Child-Class-componentDidMount");
        }
        componentDidUpdate(){
            console.log("Child-Class-componentDidUpdate");
        }
        componentWillUnmount(){
            console.log("Child-Class-componentWillUnmount");
        }
    render(){
        console.log("Child-Class-render");
        const {count, count2} = this.state;
        return(<div className="user-card">
            <div className="user-card-y">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                    count2: this.state.count2+1
                })
            }}>Change Count</button>
            <h1>Name: {this.props.name} (Class Based Component)</h1>
            <h2>Location: {this.props.location}</h2>
            <h3>Contact: {this.props.contact}</h3>
            </div>
            
        </div>)
    }
}
