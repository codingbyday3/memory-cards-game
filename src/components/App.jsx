
function Score(){
    return(
        <section>
            <p>Score: 12</p>
            <p>Highest score: 20</p>
        </section>
    )
}

function Cards(){
    return(
        <section className="cards-container">
            <div className="pokemo-card">
                <h2>Pikachu</h2>
                <img src="" alt="" />
            </div>
            <div className="pokemo-card">
                <h2>Pikachu</h2>
                <img src="" alt="" />
            </div>
            <div className="pokemo-card">
                <h2>Pikachu</h2>
                <img src="" alt="" />
            </div>
        </section>
    )
}

function App() {
    return(
        <>
        <header>
            <h1>Pokemone memory game</h1>
        </header>
        <main> 
            <Score/>
            <Cards/>
        </main>
        </>
    )
}

export default App
