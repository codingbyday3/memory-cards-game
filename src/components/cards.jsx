import { useState, useEffect } from "react"

export default function Cards(){

    const [pokemonList, setPokemonList] = useState([])
    const [displayedPokemons, setDisplayedPokemons] = useState([])
    const POKEMON_LIMIT = 40
    const POKEMON_COUNT = 1017

    useEffect(() => {
        const getPokemonInfo = async () => {
            const randomIds = [];
            while (randomIds.length < POKEMON_LIMIT) {
                const id = Math.floor(Math.random() * POKEMON_COUNT) + 1;
                if (!randomIds.includes(id)) {
                randomIds.push(id);
                }
            }

            try {
                const promises = randomIds.map(async (id) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await res.json();
                return {
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                };
                });

                const results = await Promise.all(promises);
                setPokemonList(results);
            } catch (error) {
                console.error("Error fetching Pokémon data", error);
            }
        };

        getPokemonInfo();
    }, []);

    useEffect(()=>{
        if(pokemonList.length >= POKEMON_LIMIT){
            const randomIndex = []
            const randomPokemons = []
            while(randomPokemons.length < 8){
                const randomNum = Math.floor(Math.random()*pokemonList.length)
                if(!randomIndex.includes(randomNum)){
                    randomPokemons.push(pokemonList[randomNum])
                    randomIndex.push(randomNum)
                }

            }
            setDisplayedPokemons(randomPokemons)           
        }

    },[pokemonList])


    return(
        <section className="cards-container">
            {displayedPokemons.map((pokemon, index)=>{
                return(
                    <button key= {index} className="invisible-box">
                        <div className="pokemon-card">
                            <div className="front-card">
                                <h2>{pokemon.name}</h2>
                                <img src={pokemon.image} alt={pokemon.name} />
                            </div>
                            <div className="back-card">
                                <p>Click your guess</p>
                            </div>
                        </div>
                    </button>
                )

            })}
            
        </section>
    )
}