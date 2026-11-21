ServerEvents.recipes(event => {
    const prefix = "anomaly:recipes/lychee/"
    event.recipes.mekanism.chemical_conversion(
        "40x kubejs:fluix_gas",
        "ae2:fluix_dust"
    ).id(prefix + "fluix_gas_from_dust")
    event.recipes.mekanism.chemical_conversion(
        "40x kubejs:certus_gas",
        "ae2:certus_quartz_dust"
    ).id(prefix + "certus_gas_from_dust")
})