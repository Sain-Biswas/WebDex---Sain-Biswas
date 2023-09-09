import axios from "axios";

const PKMNfetch = async (pokeid) => {
    const PKMNspecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeid}`).then((res) => res.data)
    const PKMNdata = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}`).then((res) => res.data)
    return await PKMNfetchProcessor(PKMNdata, PKMNspecies);
}

const PKMNfetchProcessor = async (PKMNdata, PKMNspecies) => {
    let namelist = PKMNdata.name.split("-")
    let name = ""
    namelist.map((ele) => {
        name += (ele.charAt(0).toUpperCase() + ele.slice(1) + " ")
    })

    let types = []
    PKMNdata.types.map((ele) => {
        types.push(ele.type.name)
    })

    let abilities = []
    let hidAbilities = []
    PKMNdata.abilities.map((ele) => {
        let namelist = ele.ability.name.split("-")
        let name = ""
        namelist.map((ele) => {
            name += (ele.charAt(0).toUpperCase() + ele.slice(1) + " ")
        })
        if (ele.is_hidden) hidAbilities.push(name)
        else abilities.push(name)
    })

    let baseStats = []
    PKMNdata.stats.map((ele) => {
        baseStats.push({
            name: ele.stat.name,
            value: ele.base_stat
        })
    })

    let megaEvolution = false
    let gMax = false
    let varieties = []
    PKMNspecies.varieties.map((ele) => {
        if (!ele.is_default) {
            let varnamelist = ele.pokemon.name.split("-")
            let varname = ""
            varnamelist.map((ele) => {
                if (ele == 'mega') megaEvolution = true;
                if (ele == 'gmax') gMax = true;
                varname += (ele.charAt(0).toUpperCase() + ele.slice(1) + " ")
            })
            let idvar = ele.pokemon.url.split("/")[6]
            let types = []
            fetch(`https://pokeapi.co/api/v2/pokemon/${idvar}/`).then((res) => res.json()).then((res) => res.types.map((ele) => {
                types.push(ele.type.name)
            }))
            varieties.push({
                varname: varname.trim(),
                varid: Number.parseInt(idvar),
                types: types
            })
        }
    })

    let egg = []
    PKMNspecies.egg_groups.map((ele) => {
        egg.push(ele.name)
    })

    let flavourText = []
    PKMNspecies.flavor_text_entries.map((ele) => {
        if (ele.language.name == "en") {
            flavourText.push(ele.flavor_text.replace('\\n', ' '))
        }
    })

    let genus = []
    PKMNspecies.genera.map((ele) => {
        if (ele.language.name == "en") {
            genus.push(ele.genus)
        }
    })


    let moves = []
    PKMNdata.moves.map((ele) => {
        let tempname = ele.move.name.split("-")
        let movename = ""
        tempname.map((ele) => {
            movename += (ele.charAt(0).toUpperCase() + ele.slice(1) + " ")
        })
        let moveid = (ele.move.url.split("/"))[6]
        moves.push({
            id: moveid,
            name: movename
        })
    })

    let pokemon = {
        id: PKMNdata.id,
        name: name.trim(),
        color: PKMNspecies.color.name,
        shape: PKMNspecies.shape.name.charAt(0).toUpperCase() + PKMNspecies.shape.name.slice(1),/**/
        types: types,
        genderRate: ((PKMNspecies.gender_rate) / 8) * 100,
        formSwitch: PKMNspecies.forms_switchable,
        genderDiff: PKMNspecies.has_gender_differences,
        megaEvolution: megaEvolution,
        gMax: gMax,
        evolutionChain: await EvolutionChain(PKMNspecies.evolution_chain.url),
        abilities: abilities,
        hidAbilities: hidAbilities,
        baseStats: baseStats,
        varieties: varieties,
        height: PKMNdata.height,
        weigth: PKMNdata.weight,
        mythical: PKMNspecies.is_mythical,
        legendary: PKMNspecies.is_legendary,
        eggGroups: egg,
        happiness: PKMNspecies.base_happiness,
        flavourText: [...new Set(flavourText)],
        genus: genus,
        moves: moves
    }

    return pokemon
}

const EvolutionChain = async (url) => {
    const data = await axios.get(url).then((res) => res.data)

    let evolutionChain = []
    evolutionChain = await evolutionChainProcessor(evolutionChain, data.chain)

    return evolutionChain

}

const evolutionChainProcessor = async (arr, path) => {
    let time = []
    let lvl = []
    path.evolution_details.map((ele) => time.push(ele.time_of_day.charAt(0).toUpperCase() + ele.time_of_day.slice(1)))
    path.evolution_details.map((ele) => lvl.push(ele.min_level))
    arr.push({
        name: path.species.name.charAt(0).toUpperCase() + path.species.name.slice(1),
        id: path.species.url.split('/')[6],
        level: lvl,
        time: time
    })
    if (path.evolves_to.length) {
        await evolutionChainProcessor(arr, path.evolves_to[0])
    }
    return arr
}

export default PKMNfetch