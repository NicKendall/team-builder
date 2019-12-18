import React from "react"
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


const TeamMembers = props => {
   
    console.log(props)
    console.log(props.name)

    return (

        <div >
            {props.TEAM.map((person, index) => 
            <Card className="meber-card"key={index}>
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