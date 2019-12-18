import React from "react"


const TeamMembers = props => {
   
    console.log(props)
    console.log(props.name)

    return (

        <div>
            {props.TEAM.map((person, index) => 
            <div key={index}>
                <h4>{person.name}</h4>
                <p>{person.role}</p>
                <p>{person.email}</p>                
                <p>{person.desc}</p>
            </div>
            )}
        </div>
     
    )
}

export default TeamMembers