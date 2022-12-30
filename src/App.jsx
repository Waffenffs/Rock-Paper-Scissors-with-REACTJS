import React, {useEffect} from "react"
import { useState } from "react"
import './App.css'
import ScoreCard from './components/ScoreCard'

const App = () => {

  const [winLossData, setWinLossData] = useState({
    player1: {
      wins: 0,
      loses: 0,
    },
    player2: {
      wins: 0,
      loses: 0,
    }
  })

  const [playersData, setPlayersData] = useState({
    player1: {
      answer: "",
    },
    player2: {
      answer: "",
    }
  })

  // update `winLossData` according to the victor, which is passed as a prop (name)
  const determineVictor = (name) => {
    if(name==="player1"){
      setWinLossData(prevData => ({
        ...prevData,
        player1: {
          wins: prevData.player1.wins+1,
          loses: prevData.player1.loses
        },
        player2: {
          wins: prevData.player2.wins,
          loses: prevData.player2.loses+1
        }
      }))
    } else if(name==="player2"){
      setWinLossData(prevData => ({
        ...prevData,
        player1: {
          wins: prevData.player1.wins,
          loses: prevData.player1.loses+1
        },
        player2: {
          wins: prevData.player2.wins+1,
          loses: prevData.player2.loses
        }
      }))
    }
  }

  // determine which player won based on their inputs
  const algorithmVictor = (value1, value2) => {
    value1 = value1.toLowerCase()
    value2 = value2.toLowerCase()
    
    if(value1 === "scissors" && value2 === "paper"){
      return "player1"
    } else if (value1 === "paper" && value2 === "rock"){
      return "player1"
    } else if (value1 === "rock" && value2 === "scissors"){
      return "player1"
    }

    if(value2==="scissors" && value1 === "paper"){
      return "player2"
    } else if (value2==="paper" && value1 === "rock"){
      return "player2"
    } else if (value2 === "rock" && value1 === "scissors"){
      return "player2"
    }
  }

  // makes it so that the inputs/boxes are controlled components
  const handleChange = (event) => {
    const {value, name} = event.target
    setPlayersData(prevData => ({
      ...prevData,
      [name]: {
        answer: value,
      }
    }))
  }

  const handleClick = () => {
    let winner = algorithmVictor(playersData.player1.answer, playersData.player2.answer)
    determineVictor(winner)

    // resets the playersdata
    setPlayersData(prevData => ({
      ...prevData,
      player1: {
        answer: "",
      },
      player2: {
        answer: "",
      }
    }))
  }

  useEffect(()=>{
    console.log(winLossData)
  }, [winLossData])

  return(
    <main>
      <div className="headerContainer">
      <h1>rock paper scissors</h1>
      </div>
      <div className="recordContainer">
        <ScoreCard 
          winLossData={winLossData}
          playersData={playersData}
          handleChange={handleChange}
          player="player1"
        />
        <ScoreCard 
          winLossData={winLossData}
          playersData={playersData}
          handleChange={handleChange}
          player="player2"
        />
      </div>
      <div className="submitButton">
        <button
            onClick={handleClick}
        >
            Submit
        </button>
      </div>
    </main>
  )
}

export default App