ServerEvents.recipes(event => {
    const prefix = "anomaly:recipes/advanced_ae/reaction/"
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 1000,
            ingredient: { fluid: 'minecraft:water' }
        },
        input_items: [
            { amount: 1, ingredient: { item: 'justdirethings:polymorphic_catalyst' } },
            { amount: 1, ingredient: { item: 'justdirethings:time_crystal' } }
        ],
        output: {
            "#": 1000,
            "#t": "ae2:f",
            "id": "justdirethings:time_fluid_source"
        }
    }).id(prefix + "time_fluid")
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 16000,
            ingredient: { fluid: 'kubejs:liquid_unknown' }
        },
        input_items: [
            { amount: 16, ingredient: { item: "ae2cs:purified_energized_fluix_crystal" } }
        ],
        output: {
            "#": 64,
            "#t": "ae2:i",
            "id": "ae2:advanced_card"
        }
    }).id(prefix + "advanced_card")
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 16000,
            ingredient: { fluid: 'kubejs:liquid_unknown' }
        },
        input_items: [
            { amount: 16, ingredient: { item: "mekanism:ingot_osmium" } }
        ],
        output: {
            "#": 64,
            "#t": "ae2:i",
            "id": "extendedcrafting:luminessence"
        }
    })
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
        amount: 1000,
        ingredient: { fluid: 'minecraft:water' }
        },
        input_items: [
            { amount: 1, ingredient: { item: "mekanism:steel_casing" } }
        ],
        output: {
            "#": 1,
            "#t": "ae2:i",
            "id": "mekanism:enrichment_chamber"
        }
    }).id(prefix + "enrichment_chamber")
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 1000,
            ingredient: { fluid: 'minecraft:water' }
        },
        input_items: [
            { amount: 16, ingredient: { item: "ae2cs:purified_certus_quartz_crystal" } }
        ],
        output: {
            "#": 1,
            "#t": "ae2:i",
            "id": "ae2omnicells:quantum_omni_cell_component_1k"
        }
    }).id(prefix + "quantum_omni_cell_component_1k")
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 4000,
            ingredient: { fluid: 'minecraft:water' }
        },
        input_items: [
            { amount: 32, ingredient: { item: "ae2cs:purified_certus_quartz_crystal" } },
            { amount:64, ingredient: {item: "ae2cs:purified_energized_fluix_crystal"}}
        ],
        output: {
            "#": 4000,
            "#t": "ae2:f",
            "id": "kubejs:liquid_unknown"
        }
    }).id(prefix + "liquid_unknown")
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 2000,
            ingredient: { fluid: 'minecraft:water' }
        },
        input_items: [
            { amount: 50, ingredient: { item: "ae2:fluix_dust" } }
        ],
        output: {
            "#": 2000,
            "#t": "ae2:f",
            "id": "kubejs:fluix_fluid"
        }
    }).id(prefix + "fluix_fluid")
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 10000,
            ingredient: { fluid: 'minecraft:water' }
        },
        input_items: [
            { amount: 50, ingredient: { item: "minecraft:charcoal" } }
        ],
        output: {
            "#": 10000,
            "#t": "ae2:f",
            "id": "minecraft:lava"
        }
    }).id(prefix + "lava")
})