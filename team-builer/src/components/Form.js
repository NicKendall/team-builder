import React, { useState } from "react"


const Form = props => {

    // sets state template for adding user input
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
        desc: ""
    });

    // function that updates changes to any input fields
    const handleChange = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    }

    // function that submits form, adding data to list
    const submitForm = e => {
        e.preventDefault();
        props.addNEWMEMBER(member);
        setMember({
            name: "",
            email: "",
            role: "",
            desc: ""
        });
    }

    return (
        <div> Join the team!
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="name" 
                    onChange={handleChange}
                    name="name"
                /><br/>
                <label htmlFor="email">eMail: </label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="email" 
                    onChange={handleChange}
                    name="email"
                /><br/>
                <label htmlFor="role">Role: </label>
                <input 
                    type="text" 
                    id="role" 
                    placeholder="your role"
                    onChange={handleChange}
                    name="role" 
                /><br/>
                <label htmlFor="role">Description </label>
                <input 
                    type="textarea" 
                    id="desc" 
                    placeholder="tell us about your role"
                    onChange={handleChange}
                    name="desc" 
                /><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Form