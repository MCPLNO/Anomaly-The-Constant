ServerEvents.recipes(event => {
        const prefix = "anomaly:recipes/ae2cs/aggregator/"
    event.custom({
        type: "ae2cs:crystal_aggregator_recipe_serializer",
        result: {
            count: 1,
            id: "kubejs:liquid_unknown_bucket"
        },
        input_a: {
            item: "kubejs:fluix_fluid_bucket",
            count: 1
        },
        input_b: {
            item: "ae2cs:purified_energized_fluix_crystal",
            count: 16
        },
        input_c: {
            item: "ae2cs:purified_certus_quartz_crystal",
            count: 8
        },
        energy_cost: 11451.0
    }).id(prefix + "liquid_unknown")
    event.custom({
        type: "ae2cs:crystal_aggregator_recipe_serializer",
        result: {
            count: 1,
            id: "ae2:mysterious_cube"
        },
        input_a: {
            item: "ae2:fluix_dust",
            count: 64
        },
        input_b: {
            item: "ae2cs:purified_energized_fluix_crystal",
            count: 16
        },
        input_c: {
            item: "extendedcrafting:luminessence",
            count: 64
        },
        energy_cost: 10086.0
    }).id(prefix + "mysterious_cube")

})