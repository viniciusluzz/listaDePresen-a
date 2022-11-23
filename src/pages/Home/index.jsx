import React, { useState, useEffect } from 'react';
import './style.css'
import { List } from '../../components'

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name:"", avatar:""})
  let [identify] = useState(0);

  useEffect(()=>{

    async function userData(){
      let t = await fetch('https://api.github.com/users/viniciusluzz');
      let data = await t.json();
      setUser({name: data.name, avatar: data.avatar_url})
    }
    userData();
    
  }, []);

  function addNewStudent() {

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
      })
    }
    setStudents(prevstate => [...prevstate, newStudent]);
  }

  return (
    <div className="Home">

      <header>
        <h1>Lista de presença</h1>
        <div>
          <img src={user.avatar} alt="foto de perfil" />
          <p>{user.name}</p>
        </div>
      </header>

      <input type="text"
        placeholder='Digite seu nome'
        onChange={v => setStudentName(v.target.value)}
      />
      <button onClick={addNewStudent}>Confirmar</button>

      {students.map(students => <List key={identify++} name={students.name} time={students.time} />)}

    </div>
  )
}
