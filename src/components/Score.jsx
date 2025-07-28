export default function Score({score, highestScore}){
    return(
        <section className="score-container">
            <p>Score: {score}</p>
            <p>Highest score: {highestScore}</p>
        </section>
    )
}