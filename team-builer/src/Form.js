import React from "react"


const Form = props => {
    // const [newMember, setNewMember] = useState([
    //     {
    //       name: "",
    //       email: "",
    //       role: ""
    //     }
    //   ]);
    console.log(props)
    console.log(props.name)

    return (

        <div>
            {props.testProps.map(item =>
          <h2>{item.name}</h2>
          )}
        </div>
     
    )
}

export default Form