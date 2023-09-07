import React, { useEffect } from 'react'
import { useState } from 'react'
import './SinglePokeDetails.css'
import '../../Utilities/ColorScheme.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import Fetcher from './SinglePokeDetails_Functions'
import { EvoChainCodeReturner, MoveCodeReturner, OtherFormsCodeReturnes, TypeCodeReturner } from './SinglePokeDetails_Utilities'
import iconShiny from '../../svg/icon_shiny.svg'
import iconInfo from '../../svg/icons_info.svg'
import Loading from '../Loading/Loading'


function SinglePokeDetails() {
    const [Pokemon, setPokemon] = useState({});
    const [loading, setloading] = useState(true);
    const { id: PokemonId } = useParams();
    let Url = useLocation()

    useEffect(() => {
        async function FetchData() {
            setloading(true)
            await Fetcher(PokemonId).then((response) => {
                setPokemon(response)
            })
            setloading(false)
        }
        FetchData()
    }, [Url])



    if (loading) {
        document.title = `Loading - WebDex`
        return (
            <Loading />
        )
    }
    document.title = `(${Pokemon.id}) ${Pokemon.name} - WebDex`
    return (
        <div className={Pokemon.types[0]} key={Pokemon.id}>
            <>
                <div style={{ height: "44vw" }}>
                    <div>
                        <div className="category left-div sk-plus">
                            <div className="category-text sk-minus">
                                <strong>Category </strong>: {Pokemon.genus}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--cat-type-border)" }}
                            />
                        </div>
                        <div style={{ height: "5.55vw" }}>
                            <div className="pokename-bg-upper-name left-div sk-plus">
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "#242424" }}
                                />
                            </div>
                            <div className="pokename-bg-name left-div sk-plus">
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "white", width: "4vw" }}
                                />
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "#3d3d3d" }}
                                />
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "#242424" }}
                                />
                            </div>
                            <div className="pokename-bg-name left-div sk-minus">
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "white", width: "4vw" }}
                                />
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "#3d3d3d" }}
                                />
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "#242424" }}
                                />
                            </div>
                            <div
                                className="pokename-bg-upper-name left-div sk-minus"
                                style={{ top: "-0.05vw" }}
                            >
                                <div
                                    className="border-broad-design"
                                    style={{ backgroundColor: "#242424" }}
                                />
                            </div>
                            <div className="pokeid-name">
                                <strong>{Pokemon.name}</strong>
                            </div>
                            <div
                                className="nameid-hexagon"
                                style={{ transform: "translate(22vw,-8.6vw) skew(-40deg)" }}
                            />
                            <div
                                className="nameid-hexagon"
                                style={{ transform: "translate(22vw,-8.6vw) skew(40deg)" }}
                            />
                            <div className="pokeid-num">{Pokemon.id}</div>
                        </div>
                        <div className="pokemon-type sk-minus left-div">
                            <div className="pokemon-type-text sk-plus">
                                <strong>Type:</strong>
                                {Pokemon.types.map((e) => <TypeCodeReturner Value={e} />)}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--cat-type-border)" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="ability left-div sk-minus">
                            <div className="sk-plus" style={{ width: "21.5vw", marginLeft: "1vw" }}>
                                <strong>Ability: </strong>{Pokemon.abilities.join('/')}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--ability-border)" }}
                            />
                        </div>
                        <div className="hid-ability left-div sk-minus">
                            <div
                                className="sk-plus"
                                style={{ width: "20.25vw", marginLeft: "1vw" }}
                            >
                                <strong>Hidden Ability:</strong> {Pokemon.hidAbilities.join('/')}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--hid-ability-border)" }}
                            />
                        </div>
                        <div className="height left-div sk-minus">
                            <div
                                className="sk-plus"
                                style={{ width: "18.75vw", marginLeft: "1vw" }}
                            >
                                <strong>Height: </strong>  {Pokemon.height}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--height-border)" }}
                            />
                        </div>
                        <div className="weight left-div sk-minus">
                            <div className="sk-plus" style={{ width: "17.5vw", marginLeft: "1vw" }}>
                                <strong>Weight: </strong> {Pokemon.weigth}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--weight-border)" }}
                            />
                        </div>
                        <div className="gender left-div sk-plus">
                            <div
                                className="sk-minus"
                                style={{ width: "16.5vw", marginLeft: "1vw" }}
                            >
                                <strong>Gender: </strong>{" "}
                                <span style={{ color: "blue", fontWeight: 1000 }}>♂</span> {100 - Pokemon.genderRate}%{" "}
                                <span style={{ color: "magenta", fontWeight: "bolder" }}>♀</span> {Pokemon.genderRate}%
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--gender-border)" }}
                            />
                        </div>
                        <div className="egg left-div sk-plus" style={{ top: "-0.05vw" }}>
                            <div
                                className="sk-minus"
                                style={{ width: "18.5vw", marginLeft: "1vw" }}
                            >
                                <strong>Egg type:</strong> {Pokemon.eggGroups.join('/')}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--egg-border)" }}
                            />
                        </div>
                    </div>
                    <div style={{ height: "16vw" }}>
                        <div className="base-stat-top left-div sk-plus">
                            <div
                                className="sk-minus"
                                style={{ width: "18.25vw", marginLeft: "1vw" }}
                            >
                                <strong
                                    style={{
                                        position: "absolute",
                                        transform: "translate(-1.5vw,-1vw)"
                                    }}
                                >
                                    Base Stats
                                </strong>
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--base-stats-main-border)" }}
                            />
                        </div>
                        <div className="base-stat-mid-top left-div sk-plus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--base-stats-second-border)" }}
                            />
                        </div>
                        <div className="base-stat-mid-bot left-div sk-minus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--base-stats-second-border)" }}
                            />
                        </div>
                        <div className="statstext">
                            <h1>
                                <strong>
                                    <span>Hit Points</span>:{" "}
                                    <div className="status-bar">
                                        <div className="status-bar-rel" style={{ width: `${(Pokemon.baseStats[0].value / 255) * 100}%` }} />
                                    </div>
                                    {" " + Pokemon.baseStats[0].value}
                                    <br />
                                    <span>Attack</span>:{" "}
                                    <div className="status-bar">
                                        <div className="status-bar-rel" style={{ width: `${(Pokemon.baseStats[1].value / 255) * 100}%` }} />
                                    </div>
                                    {" " + Pokemon.baseStats[1].value}
                                    <br />
                                    <span>Defence</span>:{" "}
                                    <div className="status-bar">
                                        <div className="status-bar-rel" style={{ width: `${(Pokemon.baseStats[2].value / 255) * 100}%` }} />
                                    </div>
                                    {" " + Pokemon.baseStats[2].value}
                                    <br />
                                    <span>Sp. Attack</span>:{" "}
                                    <div className="status-bar">
                                        <div className="status-bar-rel" style={{ width: `${(Pokemon.baseStats[3].value / 255) * 100}%` }} />
                                    </div>
                                    {" " + Pokemon.baseStats[3].value}
                                    <br />
                                    <span>Sp. Defence</span>:{" "}
                                    <div className="status-bar">
                                        <div className="status-bar-rel" style={{ width: `${(Pokemon.baseStats[4].value / 255) * 100}%` }} />
                                    </div>
                                    {" " + Pokemon.baseStats[4].value}
                                    <br />
                                    <span>Speed</span>:{" "}
                                    <div className="status-bar">
                                        <div className="status-bar-rel" style={{ width: `${(Pokemon.baseStats[5].value / 255) * 100}%` }} />
                                    </div>
                                    {" " + Pokemon.baseStats[5].value}
                                    <br />
                                    <span>Happiness</span>:{" "}
                                    <div className="status-bar">
                                        <div className="status-bar-rel" style={{ width: `${(Pokemon.happiness / 255) * 100}%` }} />
                                    </div>
                                    {" " + Pokemon.happiness}
                                </strong>
                            </h1>
                        </div>
                        <div className="base-stat-bot left-div sk-minus">
                            <div
                                className="sk-plus"
                                style={{ width: "19.25vw" }}
                            >
                                <strong>Total : </strong> {(Pokemon.happiness + Pokemon.baseStats[0].value + Pokemon.baseStats[1].value + Pokemon.baseStats[2].value + Pokemon.baseStats[3].value + Pokemon.baseStats[4].value + Pokemon.baseStats[5].value) / 7}
                            </div>
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--base-stats-main-border)" }}
                            />
                        </div>
                    </div>
                    <div className="right-div-whole" style={{ top: "7vw" }}>
                        <div className="right-div right-border sk-minus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                        </div>
                        <div className="right-div right-mid sk-minus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-light)" }}
                            />
                        </div>
                        <div className="right-div right-mid sk-plus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-light)" }}
                            />
                        </div>
                        <div className="right-div right-border sk-plus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                        </div>
                    </div>
                    <div className="right-top-det">
                        <span>Shape : {Pokemon.shape}</span>
                        <span>No. of Forms : {Pokemon.varieties.length}</span>
                        <div className="box-formswitch" style={{ backgroundImage: Pokemon.formSwitch ? 'linear-gradient(to right, #3ee07f, #ebba48, #e45a5e)' : 'linear-gradient(to right, #808080 , #808080)' }}>Form Switchable</div>
                        <div className="box-gendiff" style={{ backgroundImage: Pokemon.genderGiff ? 'linear-gradient(120deg, #3f3cfa 0%, #ff586e 100%)' : 'linear-gradient(to right, #808080 , #808080)' }}>Gender Difference</div>
                        <div className="box-legend" style={{ backgroundImage: Pokemon.legendary ? 'linear-gradient(to right, #c6ea8d, #fe90af)' : 'linear-gradient(to right, #808080 , #808080)' }}>Legendary</div>
                        <div className="box-myth" style={{ backgroundImage: Pokemon.mythical ? 'linear-gradient(to right, #9796f0, #fbc7d4)' : 'linear-gradient(to right, #808080 , #808080)' }}>Mythical</div>
                        <div className="box-megaevo" style={{ backgroundImage: Pokemon.megaEvolution ? 'linear-gradient(to right, #d8b5ff, #1eae98)' : 'linear-gradient(to right, #808080 , #808080)' }}>Mega Evolution</div>
                        <div className="box-gmax" style={{ backgroundImage: Pokemon.gMax ? "linear-gradient(to right, #ff61d2, #fe9090)" : 'linear-gradient(to right, #808080 , #808080)' }}>G Max</div>
                    </div>
                    <div className="right-div-whole" style={{ top: "27vw" }}>
                        <div className="right-div right-border sk-minus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                        </div>
                        <div className="right-div right-mid sk-minus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-light)" }}
                            />
                        </div>
                        <div className="right-div right-mid sk-plus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-light)" }}
                            />
                        </div>
                        <div className="right-div right-border sk-plus">
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                            <div
                                className="border-broad-design"
                                style={{ backgroundColor: "var(--right-border-out-dark)" }}
                            />
                        </div>
                    </div>
                    <object
                        className="sk-plus"
                        style={{
                            width: "2vw",
                            height: "2vw",
                            transform: "translate(76vw,-12.5vw)"
                        }}
                        data={iconShiny}
                        type="image/svg+xml"
                    />
                    <div className="img-shiny">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${Pokemon.id}.png`}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="poke-image">
                        <img
                            className="poke-image-main"
                            style={{ filter: `drop-shadow(10px 10px 10px ${Pokemon.color}) contrast(120%)` }}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Pokemon.id}.png`}
                        />
                    </div>
                    <img src={iconInfo} className="icon-info" />
                </div>
                <div style={{ marginBottom: "2vw" }}>
                    <div className="border-up-down" />
                    <div className="main-content-wrapper">
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div className="main-content">
                            <h1>Pokemon Description</h1>
                            <div className="pok-descp">
                                {Pokemon.flavourText.map((ele) => {
                                    return (<p style={{ fontSize: "2vw" }}> {"-" + ele} </p>)
                                })}
                            </div>
                        </div>
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                    </div>
                    <div className="border-up-down" />
                </div>
                <div style={{ marginBottom: "2vw" }}>
                    <div className="border-up-down" />
                    <div className="main-content-wrapper">
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div className="main-content">
                            <h1>Evolution Chain</h1>
                            <div className="reciprocer">
                                {Pokemon.evolutionChain.map((ele) => { return < EvoChainCodeReturner Value={ele} /> })}
                            </div>
                        </div>
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                    </div>
                    <div className="border-up-down" />
                </div>
                <div style={{ marginBottom: "2vw" }}>
                    <div className="border-up-down" />
                    <div className="main-content-wrapper">
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div className="main-content">
                            <h1>Other Forms</h1>
                            <div className="reciprocer">
                                {(Pokemon.varieties.length) ? Pokemon.varieties.map((ele) => { return < OtherFormsCodeReturnes Value={ele} /> }) : "No Other From Present"}
                            </div>
                        </div>
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                    </div>
                    <div className="border-up-down" />
                </div>
                <div style={{ marginBottom: "2vw" }}>
                    <div className="border-up-down" />
                    <div className="main-content-wrapper">
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div className="main-content">
                            <h1>Moves</h1>
                            <div className="reciprocer">
                                {Pokemon.moves.map((ele) => { return < MoveCodeReturner Value={ele} /> })}
                            </div>
                        </div>
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-out-light)" }}
                        />
                        <div
                            className="mar-left-right"
                            style={{ backgroundColor: "var(--right-border-top-bott)" }}
                        />
                    </div>
                    <div className="border-up-down" />
                </div>
            </>

        </div >
    )
}

export default SinglePokeDetails