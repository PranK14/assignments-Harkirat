import { useState } from 'react'

import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState([
    {
      name:"pavd", 
      description: "asad", 
      interests:["asd", "asda"], 
      linkedin: "dafdfsd", 
      twitter:"saddsa"
    },])


  return (
    <div>
   { count.map((cnt)=> {
      return <Card name={cnt.name} description={cnt.description} interests={cnt.interests} linkedin={cnt.linkedin} twitter={cnt.twitter}></Card>
    })
     }
     </div>
  )
}

export default App
