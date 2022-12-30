import React from "react"
import '../App.css'

const ScoreCard = ({winLossData, playersData, handleChange, player}) => {
    console.log(typeof player, player)
    
    let wins;
    let loses;

    switch(player){
        case "player1":
            wins = <p>W: {winLossData.player1.wins}</p>
            loses = <p>L: {winLossData.player1.loses}</p>
            break;
        case "player2":
            wins = <p>W: {winLossData.player2.wins}</p>
            loses = <p>L: {winLossData.player2.loses}</p>
            break;
    }
    
    return(
        <div className="scoreContainer">
            <h2>{player}</h2>
            {wins}
            {loses}
            <input 
                type="text"
                name={player}
                value={player === "player1" ? playersData.player1.answer : playersData.player2.answer}
                placeholder={player}
                onChange={handleChange}
            />
        </div>
    )
}

export default ScoreCard;