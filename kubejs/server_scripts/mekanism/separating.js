ServerEvents.recipes(event => {
    const prefix = "anomaly:mekanism/separating/"
    event.recipes.mekanism.separating(
        '5x kubejs:fluix_gas',
        "5x kubejs:quantum",
        "10x kubejs:fluix_fluid"
    ).id(prefix + "quantum_and_fluix_gas")
})