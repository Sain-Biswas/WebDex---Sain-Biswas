import React, { useState } from 'react';
import './PokeDetailCard.css';
import { Fetch_Card } from '../../Utilities/fetch_Card'
import OnePokemonCard from "./OnePokemonCard";
import Loading from '../Loading/Loading';

const FetchCards = (props) => {
    const [loading, setLoading] = useState(true)
    const [loadingB, setLoadingB] = useState("Next")
    const [data, setData] = useState(null)
    const [limits, setLimits] = useState({
        idStart: props.nameIdInitial,
        idEnd: props.nameIdFinal
    })

    const firstFetch = async () => {
        let apidata = await Fetch_Card(props.nameIdInitial, props.nameIdFinal)
        setData(apidata)
        setLoading(false)
    }
    if (!data) {
        firstFetch();
    }

    const nextFetch = async () => {
        setLoadingB("Loading")
        const [lower, upper] = [limits.idStart + 20, limits.idEnd + 20]
        const newData = await Fetch_Card(lower, upper)
        setData(data.concat(newData))
        setLimits({
            idStart: lower,
            idEnd: upper
        })
        setLoadingB("Next")
    }


    if (loading) {
        document.title = `Loading - WebDex`
        return (
            <Loading />
        )
    }
    document.title = `Home - WebDex`
    return (
        <>
            <div className='container-pokecards'>
                {
                    data.map((pokeDetails) => {
                        return <OnePokemonCard pokeid={pokeDetails.pokeid} name={pokeDetails.name}
                            types={pokeDetails.types} />
                    })
                }
            </div>
            <button className="loading-Button" onClick={nextFetch}> {loadingB} </button>

        </>
    );

}

export default FetchCards;
