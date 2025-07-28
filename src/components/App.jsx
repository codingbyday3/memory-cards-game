import Cards from "./cards"


function Score(){
    return(
        <section className="score-container">
            <p>Score: 12</p>
            <p>Highest score: 20</p>
        </section>
    )
}


function App() {
    return(
        <>
        <header>
            <h1>POKEMONE MEMORY GAME</h1>
        </header>
        <main> 
            <Score/>
            <Cards/>
        </main>
        </>
    )
}

export default App
