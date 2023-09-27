import { useEffect, useState } from "react";

export const UserFunciton = (props) => {
    const{name, location, contact} = props;
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(1);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("yeah");
        }, 1000);
        console.log("useEffect");
        return ()=>{
            clearInterval(timer);
            console.log("useEffect-return")
        }
        
    },[])
    console.log("Functional-Render");
    return(
       
        <div className="m-4 p-4 w-[600px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <div className="user-card-y">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <button onClick={()=>{
                setCount(count+1)
                setCount2(count2+1)
            }}>Change Count</button>
            <h1>Name: {name} (Functional Component)</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
            </div>
            
        </div>)
}