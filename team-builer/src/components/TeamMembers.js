import React from "react"
import { Card, CardTitle, CardText } from 'reactstrap';
import { findByLabelText } from "@testing-library/react";


const TeamMembers = props => {
   
    console.log(props)
    console.log(props.name)

    return (

        <div style={{      
                width: "92%",
                backgroundColor: 'white',
                border: '1px solid #333',
                margin: '1%',
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center" 
                }}>
            {props.TEAM.map((person, index) => 
            <Card className="meber-card" key={index} body inverse 
            style={{      
                width: "30%",
                backgroundColor: '#333',
                border: '1px solid white',
                margin: '1%'
                }}>
                <CardTitle>{person.name}</CardTitle>
                <CardText>{person.role}</CardText>
                <CardText>{person.email}</CardText>                
                <CardText>{person.desc}</CardText>
                <button>Edit</button>
            </Card>
            )}
        </div>
     
    )
}

export default TeamMembers