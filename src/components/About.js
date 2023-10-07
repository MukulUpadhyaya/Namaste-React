import { UserClass } from "./UserClass";
import { UserFunciton } from "./UserFunction";
import React from "react";
import UserContext from "../utils/UserContext";
export class About extends React.Component{
    constructor(){
        super();
        console.log("Parent-Class-Constructor");
    }
    componentDidMount(){
        console.log("Parent-Class-componentDidMount");
        this.timer = setInterval(()=>{
            console.log("cndjc");
        }, 1000);
    }
    componentDidUpdate(){
        console.log("Parent-Class-componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("Parent-Class-componentWillUnmount");
        clearInterval(this.timer);
    }
    render(){
        console.log("Parent-Class-render");
    return(
        <div>
           <UserClass name={"Mukul Upadhyaya"} location={"Meerut"} contact = {"mukulfb49@gmail.com"}/>
           <UserContext.Consumer>
            {({loggedInUser}) => (
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
           </UserContext.Consumer>
           <UserFunciton name={"Mukul Upadhyaya"} location={"Meerut"} contact = {"mukulfb49@gmail.com"}/>
        </div>
    );
    }
}