import {useState} from "react"

export default function About(){
    const[userName, setUserName] = useState("John")
    const[userAge, setUserAge] = useState(24) 
    const[userCity, setUserCity] = useState("Jaipur") 
    const[userActive, setUserActive] = useState("active")
    const[count, setCount] = useState(0)

    let name = "smith";
    const changeName = () =>{
        name = "john smith";

        setUserName("Hello John Smith")
    }

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }


    return (
        <>
            <h1>Hello About</h1>
            <h1>{userName}</h1>
            <h2>{userAge}</h2>
            <h2>{userCity}</h2>
            <h2>{(userActive) ? true:false}</h2>
            <button onClick={changeName}>Change</button>
            <br/><br/>

            <button onClick={increment}>Increment</button>
            <span>{count}</span>
            <button onClick={decrement}>Decrement</button>
        </>

    )
}
