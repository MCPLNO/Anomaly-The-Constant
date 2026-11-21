ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/oxidizing'

    const oxidizing = (input, output, amount, id) => {
        event.custom({
            type: 'mekanism:oxidizing',
            input: { item: input },
            output: { id: output, amount: amount }
        }).id(`${NS}/${id}`)
    }

    oxidizing(  "ae2:certus_quartz_dust",     "kubejs:certus_gas",    40  , "certus_gas_from_dust"    )
    oxidizing(  "ae2:fluix_dust",             "kubejs:fluix_gas",     40  , "fluix_gas_from_dust"     )
})
