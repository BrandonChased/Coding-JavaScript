import React, { useState } from "react"

const PersonCard = (props) => {
    const {firstName, lastName, hairColor} = props

    const [age, setAge] = useState(props.age)

    const handleClick = () => {
        setAge(age+1)
    }
    
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <h2>{age}</h2>
            <h2>{hairColor}</h2>
            <button onClick={handleClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
} 

export default PersonCard