ServerEvents.recipes(event => {
    const NS = 'anomaly:mekanism/reaction'
    const reaction = (itemOut, itemIn, fluidIn, gasIn, gasOut, id, ticks = 200) => {
        let r = event.recipes.mekanism.reaction(itemIn, fluidIn, gasIn).duration(ticks)
        if (itemOut) r.itemOutput(itemOut)
        if (gasOut) r.chemicalOutput(gasOut)
        r.id(`${NS}/${id}`)
    }
    reaction(
        "2x extendedae:entro_seed",
        'mekanism:ingot_osmium',
        '1000x kubejs:liquid_unknown',
        '100x kubejs:fluix_gas',
        '50x kubejs:certus_gas',
        'entro_seed',
        100
    )
    reaction(
        '1x mekanism:elite_control_circuit',
        '1x mekanism:basic_control_circuit',
        '4000x kubejs:liquid_unknown',
        '500x kubejs:phosgene',
        null,
        'elite_circuit_etching',
        300
    )
})