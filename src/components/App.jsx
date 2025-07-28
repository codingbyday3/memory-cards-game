import { useState, useEffect } from "react"
import Cards from "./cards"
import Score from "./Score"



function App() {
    const [score, setScore] = useState(0)
    const [highestScore, setHighesScore] = useState(0)

    const resetGame = ()=>{
        if(score > highestScore){
            setHighesScore(score)
        }
        setScore(0)
    }

    const handleScore = ()=>{
        setScore(score + 1)
    }

    return(
        <>
        <header>
            <h1>POKEMONE MEMORY GAME</h1>
        </header>
        <main> 
            <Score score={score} highestScore={highestScore}/>
            <Cards resetGame={resetGame} handleScore={handleScore}/>
        </main>
        </>
    )
}

export default App
