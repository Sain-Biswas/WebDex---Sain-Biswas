import iconType1 from '../../svg/icon_type_1.svg'
import iconType2 from '../../svg/icon_type_2.svg'
import iconType3 from '../../svg/icon_type_3.svg'
import iconType4 from '../../svg/icon_type_4.svg'
import iconType5 from '../../svg/icon_type_5.svg'
import iconType6 from '../../svg/icon_type_6.svg'
import iconType7 from '../../svg/icon_type_7.svg'
import iconType8 from '../../svg/icon_type_8.svg'
import iconType9 from '../../svg/icon_type_9.svg'
import iconType10 from '../../svg/icon_type_10.svg'
import iconType11 from '../../svg/icon_type_11.svg'
import iconType12 from '../../svg/icon_type_12.svg'
import iconType13 from '../../svg/icon_type_13.svg'
import iconType14 from '../../svg/icon_type_14.svg'
import iconType15 from '../../svg/icon_type_15.svg'
import iconType16 from '../../svg/icon_type_16.svg'
import iconType17 from '../../svg/icon_type_17.svg'
import iconType18 from '../../svg/icon_type_18.svg'
import { Link } from 'react-router-dom'
import iconShiny from '../../svg/icon_shiny.svg'


export function TypeCodeReturner(props) {
    switch (props.Value) {
        case "fire":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#e56c3e" }}>

                    <img src={iconType2} className="icon-type-svg" />
                    <p>FIRE</p>

                </div>
            </Link>);

        case "dark":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#212020" }}>

                    <img src={iconType16} className="icon-type-svg" />
                    <p>DARK</p>

                </div>
            </Link>);

        case "bug":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#9fa244" }}>

                    <img src={iconType12} className="icon-type-svg" />
                    <p>BUG</p>

                </div>
            </Link>);

        case "dragon":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#535ca8" }}>

                    <img src={iconType15} className="icon-type-svg" />
                    <p>DRAGON</p>

                </div>
            </Link>);

        case "electric":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#f6d851" }}>

                    <img src={iconType5} className="icon-type-svg" />
                    <p>ELECTRIC</p>

                </div>
            </Link>);

        case "fairy":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#dab4d4" }}>

                    <img src={iconType18} className="icon-type-svg" />
                    <p>FAIRY</p>

                </div>
            </Link>);

        case "fighting":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#730e0f" }}>

                    <img src={iconType7} className="icon-type-svg" />
                    <p>FIGHTING</p>

                </div>
            </Link>);

        case "flying":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#a2c3e7" }}>

                    <img src={iconType10} className="icon-type-svg" />
                    <p>FLYING</p>

                </div>
            </Link>);

        case "ghost":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#684870" }}>

                    <img src={iconType14} className="icon-type-svg" />
                    <p>GHOST</p>

                </div>
            </Link>);

        case "grass":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#66a945" }}>

                    <img src={iconType4} className="icon-type-svg" />
                    <p>GRASS</p>

                </div>
            </Link>);

        case "ground":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#9c7743" }}>

                    <img src={iconType9} className="icon-type-svg" />
                    <p>GROUND</p>

                </div>
            </Link>);

        case "ice":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#6dc8eb" }}>

                    <img src={iconType6} className="icon-type-svg" />
                    <p>ICE</p>

                </div>
            </Link>);

        case "normal":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#949495" }}>

                    <img src={iconType1} className="icon-type-svg" />
                    <p>NORMAL</p>

                </div>
            </Link>);

        case "poison":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#8f61bf" }}>

                    <img src={iconType8} className="icon-type-svg" />
                    <p>POISON</p>

                </div>
            </Link>);

        case "psychic":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#dd6b7b" }}>

                    <img src={iconType11} className="icon-type-svg" />
                    <p>PSYCHIC</p>

                </div>
            </Link>);

        case "rock":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#bfb889" }}>

                    <img src={iconType13} className="icon-type-svg" />
                    <p>ROCK</p>

                </div>
            </Link>);

        case "steel":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#535252" }}>

                    <img src={iconType17} className="icon-type-svg" />
                    <p>STEEL</p>

                </div>
            </Link>);

        case "water":
            return (<Link to={`/type/${props.Value}`} key={props.Value}>
                <div className="container-type" style={{ backgroundColor: "#5185c5" }}>

                    <img src={iconType3} className="icon-type-svg" />
                    <p>WATER</p>

                </div>
            </Link>);
        default:
            return;
    }
}


export function EvoChainCodeReturner({ Value: PKMN }) {
    return (
        <div className="box-poke-evo" key={PKMN.id}>
            <Link to={`/pokemon/${PKMN.id}`} >
                <p className="box-poke-name-evo">{PKMN.name}</p>
                <img
                    style={{ width: "23.5vw", height: "23.5vw" }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PKMN.id}.png`}
                />
                <p className="box-poke-det">At Lvl. : {(PKMN.level[0]) ? PKMN.level[0] : 'Variable'} </p>
                <p className="box-poke-det">Time: {PKMN.level[0] ? PKMN.time.join('/') : 'Any Time'}</p>
            </Link>
        </div>
    )
}



export function OtherFormsCodeReturnes({ Value: Info }) {
    return (
        <div className="box-poke" key={Info.varid}>
            <img className="Shiny-star" src={iconShiny} />
            <div className="box-poke-imgs">
                <img
                    className="box-poke-img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Info.varid}.png`}
                />
                <img
                    id="imgShiny"
                    className="box-poke-img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${Info.varid}.png`}
                    onError={(event) => event.target.style.display = 'none'}
                />
            </div>
            <p className="box-poke-name">{Info.varname}</p>
            <div className="box-poke-type">
                {Info.types.map((e) => <TypeCodeReturner Value={e} />)}
            </div>
        </div>
    )
}

export function MoveCodeReturner({ Value: move }) {
    return (
        <div className="box-move" key={move.id}>
            <Link to={`/move/${move.id}`} >
                {move.name}
            </Link>
        </div>
    )
}