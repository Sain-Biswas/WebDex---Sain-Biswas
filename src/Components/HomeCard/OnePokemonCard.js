import React from 'react';
import { colorArrayProvider, TypeCodeReturner } from "../../Utilities/fetch_Card";
import './PokeDetailCard.css'
import { Link } from 'react-router-dom';

const OnePokemonCard = (props) => {

    let colorArray = colorArrayProvider(props);

    return (
        <div className="card" key={props.pokeid}>
            <Link to={`/pokemon/${props.pokeid}`} >
                <div className="card-img" style={{ background: `linear-gradient(135deg, ${colorArray[0]} 25%, ${colorArray[1]} 75%)` }}>
                    <p className="card-num">#{props.pokeid}</p>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokeid}.png`}
                        className="img-card"
                    />
                    <p className="card-name">{props.name}</p>
                    <p className="card-type">
                        {props.types.map((e) => <TypeCodeReturner Value={e} />)}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default OnePokemonCard;
