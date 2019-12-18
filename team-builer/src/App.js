import React, { useState } from 'react';
import './App.css';

import TeamMembers from "./components/TeamMembers";
import Form from "./components/Form";

function App() {
  
  const [team, setTeam] = useState ([
    {
      name: "Nic",
      email: "nic@nic.com",
      role: "student",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
      name: "Bob",
      email: "Bob@Bob.com",
      role: "Builder",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"

    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
      desc: member.desc      
    }
    setTeam([...team, newMember])
  }



  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <Form addNEWMEMBER={addNewMember}/>
        <TeamMembers TEAM={team} />
        

      </header>
    </div>
  );
}

export default App;
