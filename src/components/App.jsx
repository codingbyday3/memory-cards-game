import { useState, useEffect } from "react"
import Cards from "./cards"
import Score from "./Score"



function App() {
    const [score, setScore] = useState(0)
    const [highestScore, setHighesScore] = useState(0)

    useEffect(()=>{
        if(score > highestScore){
            setHighesScore(score)
        }
    },[score])
    return(
        <>
        <header>
            <h1>POKEMONE MEMORY GAME</h1>
        </header>
        <main> 
            <Score score={score} highestScore={highestScore}/>
            <Cards score={score}/>
        </main>
        </>
    )
}

export default App
