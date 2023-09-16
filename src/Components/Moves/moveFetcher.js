import axios from "axios"

export const moveFetcher = async (id) => {
    const url = `https://pokeapi.co/api/v2/move/${id}/`

    try {
        const data = await axios.get(url).then((response) => response.data)

        let name = ""
        data.name.split('-').map((element) => { name += element.charAt(0).toUpperCase() + element.slice(1) + " " })

        let pokemon = []
        data.learned_by_pokemon.map((element) => {
            let pname = ""
            element.name.split('-').map((ename) => { pname += ename.charAt(0).toUpperCase() + ename.slice(1) + " " })
            let pid = element.url.split('/')[6]
            pokemon.push({ name: pname.trim(), id: pid })
        })

        let target = ""
        data.target.name.split('-').map((element) => { target += element.charAt(0).toUpperCase() + element.slice(1) + " " })

        let effectEntries = []
        data.effect_entries.map((element) => {
            if (element.language.name == "en") {
                effectEntries.push({ effect: element.effect, shortEffect: element.short_effect })
            }
        })

        let effectChanges = []
        data.effect_changes.map((element) => {
            element.effect_entries.map((eEffect) => {
                if (eEffect.language.name == "en") {
                    if (!effectChanges.includes(eEffect.effect, 0)) {
                        effectChanges.push(eEffect.effect)
                    }
                }
            })
        })

        let flavorText = []
        data.flavor_text_entries.map((element) => {
            if (element.language.name == "en") {
                if (!flavorText.includes(element.flavor_text.replace("\n", " "))) {
                    flavorText.push(element.flavor_text.replace("\n", " "))
                }
            }
        })

        let metaCategory = ""
        data.meta.category.name.split('+').map((element) => {
            metaCategory += element.charAt(0).toUpperCase() + element.slice(1) + " "
        })
        let metaData = {
            ailmentName: data.meta.ailment.name.charAt(0).toUpperCase() + data.meta.ailment.name.slice(1),
            categoryName: metaCategory,
            ailmentChance: data.meta.ailment_chance,
            critRate: data.meta.crit_rate,
            drain: data.meta.drain,
            flinchChance: data.meta.flinch_chance,
            healing: data.meta.healing,
            maxTurns: data.meta.max_turns,
            maxHits: data.meta.max_hits,
            minTurns: data.meta.min_turns,
            minHits: data.meta.min_hits,
            statChance: data.meta.stat_chance
        }


















        const move = {
            name: name.trim(),
            type: data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1),
            pokemons: pokemon,
            accuracy: data.accuracy,
            flavorText: flavorText,
            contestType: data.contest_type.name.charAt(0).toUpperCase() + data.contest_type.name.slice(1),
            damageClass: data.damage_class.name.charAt(0).toUpperCase() + data.damage_class.name.slice(1),
            power: data.power,
            pp: data.pp,
            effectChanges: effectChanges,
            targetName: target.trim(),
            effectEntries: effectEntries,
            metaData: metaData
        }
        return move
    }
    catch (error) {
        console.log(error)
    }

}