import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Pokemon (props) {
    const [pokemon, setPokemon] = useState([]);
    const [fetch, setFectch] = useState(0);
    
    useEffect(()=>{
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokemon(response.data.results))
    }, [fetch]);
     
    const clickFetch = () =>{
        setFectch(fetch);
    };
        
    return (
        <div>
            <button onClick={clickFetch}>Fectch Pokemon</button>
            {pokemon.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}
        </div>
    );
}
export default Pokemon;