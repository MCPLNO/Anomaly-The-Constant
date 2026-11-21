ServerEvents.recipes(event => {
    event.remove({ id: 'extendedae:assembler/ex_pattern_provider' })
    event.remove({ id: 'mekanism:processing/steel/enriched_iron_to_dust' })
    const itemsToRemove = [
"minecraft:diamond_pickaxe",
"minecraft:diamond_block",
"minecraft:crafting_table",
"minecraft:furnace",
"mekanismgenerators:heat_generator",
"minecraft:bucket",
'ae2cs:crystal_growth_chamber',
"ae2cs:crystal_pulverizer",
"minecraft:composter",
"ae2:condenser",
"mekmm:large_heat_generator",
"mekanism:metallurgic_infuser",
"minecraft:anvil",
"ae2:pattern_provider",
"ae2cs:simple_pattern_provider",
"ae2:molecular_assembler",
"ae2cs:crystal_aggregator",
"ae2:energy_acceptor",
"ae2:vibration_chamber",
"advanced_ae:reaction_chamber",
"mekanism:pressurized_reaction_chamber",
"extendedae:infinity_cobblestone_cell",
"extendedae:infinity_water_cell",
"mekmm:large_wind_generator",
"extendedae:entro_seed",
"mekanism:upgrade_speed",
"mekanism:upgrade_energy",
"actuallyadditions:atomic_reconstructor",
"actuallyadditions:iron_casing",
"minecraft:piston",
"ae2:inscriber",
"ae2omnicells:quantum_crafting_unit_block",
"justdirethings:gooblock_tier1",
"powah:dielectric_paste",
"powah:capacitor_basic",
"merequester:requester",
"tiab:time_in_a_bottle",
"powah:energizing_rod_starter",
"mekanism:chemical_infuser",
"mekanism:electrolytic_separator",
"mekanism:chemical_oxidizer"


    ]

    itemsToRemove.forEach(item => {
        try {
            Item.of(item)
            event.remove({ output: item })
        } catch (e) {
            console.log(`物品 ${item} 不存在，跳过移除`)
        }
    })
})
