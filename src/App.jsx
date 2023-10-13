
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [meals, setMeals] = useState([])
  const [hp, setHp] = useState(null)


  useEffect(()=> {
    axios({
      method: "GET",
      url: "http://localhost:3001/meals"
    }).then((respons)=> {
      setMeals(respons.data)
    })
  }, [])

  const handelClick = ()=> {
    axios("http://localhost:3001/points").then((res)=> {
      setHp(res.data.healthScore)
    })
  }

  return (
    <>
    <h1>My Meals App</h1>
    {/* show meals here */}
    {meals.map((meal)=> {
      return (
        <div key={JSON.stringify(meal)}>
          <div>
            {meal.name}
            {meal.instructions}
          </div>
          <button onClick={handelClick}>Show Health</button>
          {hp && <div>{hp}</div>}
        </div>
      )
    })}


    </>
  )
}

export default App
