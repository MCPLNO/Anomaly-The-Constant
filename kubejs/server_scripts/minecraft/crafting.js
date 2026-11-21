//无论如何,我相信祂不会掷骰子
ServerEvents.recipes(event => {
event.shaped('minecraft:diamond_pickaxe', [
    'AAA',
    ' A ',
    ' A '
], {
    'A': 'mekanism:dust_diamond'
})
event.shaped('minecraft:diamond_block', [
    '   ',
    'AA ',
    'AA '
], {
    'A': 'minecraft:diamond'
})
event.shaped('minecraft:crafting_table', [
    '   ',
    'AA ',
    'AA '
], {
    'A': 'minecraft:diamond_block'
})
event.shaped('minecraft:furnace', [
    'AAA',
    'A A',
    'AAA'
], {
    'A': 'minecraft:diamond_block'
})
event.shaped('mekanismgenerators:heat_generator', [
    'ABA',
    'BCB',
    'DBD'
], {
    'A': 'minecraft:diamond',
    'B': 'mekanism:dust_diamond',
    'C': 'minecraft:furnace',
    'D': 'minecraft:diamond_block'
})
event.shaped('minecraft:diamond_pickaxe[minecraft:damage=865]', [
    '   ',
    'AA ',
    'A  '
], {
    'A': 'mekanism:dust_diamond'
})
event.shaped('minecraft:bucket', [
    '   ',
    'A A',
    ' A '
], {
    'A': 'minecraft:diamond'
})
event.shapeless('2x ae2cs:certus_quartz_seed', [
    'mekanism:dust_diamond',
    'minecraft:diamond'
])
event.shaped("ae2cs:crystal_pulverizer", [
    'ABA',
    'CDC',
    'EEE'
], {
    'A': 'ae2cs:purified_certus_quartz_crystal',
    'B': 'minecraft:furnace',
    'C': 'mekanism:dust_diamond',
    'D': 'mekanismgenerators:heat_generator',
    'E': 'minecraft:diamond'
})
event.shaped('ae2cs:crystal_growth_chamber', [
    'AAA',
    'BCB',
    'DED'
], {
    'A': 'ae2cs:purified_certus_quartz_crystal',
    'B': 'appflux:diamond_dust',
    'C': 'minecraft:furnace',
    'D': 'ae2:certus_quartz_dust',
    'E': 'mekanismgenerators:heat_generator'
})
event.shapeless('minecraft:oak_sapling', [
    'minecraft:iron_block',
    'minecraft:iron_block',
    'minecraft:iron_block',
    'minecraft:iron_block',
    'minecraft:iron_block',
    'minecraft:iron_block',
    'minecraft:iron_block',
    'minecraft:iron_block',
    'minecraft:iron_block'
])
event.shaped('minecraft:composter', [
    'A A',
    'A A',
    'AAA'
], {
    'A': 'minecraft:diamond_block'
})
event.shapeless('3x ae2:cell_component_1k', [
    'ae2omnicells:quantum_omni_cell_component_1k'
])
event.shaped('ae2:condenser', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'minecraft:oak_planks',
    'C': 'ae2:certus_quartz_dust'
})
event.shaped('mekmm:large_heat_generator', [
    'AAA',
    'ABA',
    'AAA'
], {
    'A': 'minecraft:diamond_block',
    'B': 'mekanismgenerators:heat_generator'
})
event.shaped('ae2:creative_energy_cell', [
    'AAA',
    'ABA',
    'AAA'
], {
    'A': 'mekanism:ingot_steel',
    'B': 'ae2:controller'
})
event.shaped('mekanism:metallurgic_infuser', [
    'ABA',
    'CDC',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'minecraft:furnace',
    'C': 'minecraft:bone_meal',
    'D': 'mekanism:steel_casing'
})
event.shaped('minecraft:anvil', [
    'AAA',
    ' B ',
    'BBB'
], {
    'A': 'mekanism:block_steel',
    'B': 'mekanism:ingot_steel'
})
event.shapeless('2x minecraft:gunpowder', [
    'minecraft:charcoal',
    'ae2:certus_quartz_dust'
])
event.shaped('mekanism:crusher', [
    'BBB',
    'BCB',
    'BAB'
], {
    'A': 'minecraft:anvil',
    'B': "mekanism:ingot_steel",
    'C': 'mekanism:steel_casing'
})
event.shaped('minecraft:pointed_dripstone', [
    'AAA',
    ' A ',
    ' A '
], {
    'A': 'ae2cs:purified_fluix_crystal'
})
event.shaped('16x modularrouters:blank_module', [
    ' A ',
    'BBB',
    'CCC'
], {
    'A': 'mekanism:dust_diamond',
    'B': 'ae2cs:energized_fluix_crystal_seed',
    'C': 'mekanism:nugget_osmium'
})
event.shaped('4x ae2:pattern_provider', [
    'ABA',
    'C D',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'minecraft:crafting_table',
    'C': 'ae2cs:energized_fluix_crystal_seed',
    'D': 'mekanism:nugget_osmium'
})
event.shaped('4x ae2cs:simple_pattern_provider', [
    'ABA',
    'C C',
    'ABA'
], {
    'A': 'mekanism:dust_diamond',
    'B': 'minecraft:crafting_table',
    'C': 'mekanism:nugget_osmium'
})
event.shaped('4x ae2:molecular_assembler', [
    'ABA',
    'CDE',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'ae2:quartz_glass',
    'C': 'ae2cs:energized_fluix_crystal_seed',
    'D': 'minecraft:crafting_table',
    'E': 'mekanism:nugget_osmium'
})
event.shaped('ae2cs:crystal_aggregator', [
    'ABA',
    'CDC',
    'EFE'
], {
    'A': 'mekanism:nugget_osmium',
    'B': 'ae2:molecular_assembler',
    'C': 'mekanism:dust_diamond',
    'D': 'ae2:pattern_provider',
    'E': 'ae2cs:purified_energized_fluix_crystal',
    'F': 'ae2:condenser'
})
event.shaped('ae2:energy_acceptor', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'ae2:quartz_glass',
    'C': 'mekanism:ingot_osmium'
})
event.shaped('ae2:vibration_chamber', [
    'ABA',
    'CDC',
    'CEC'
], {
    'A': 'mekanism:ingot_osmium',
    'B': 'ae2cs:purified_energized_fluix_crystal',
    'C': 'minecraft:iron_ingot',
    'D': 'minecraft:furnace',
    'E': 'ae2:energy_acceptor'
})
event.shaped('advanced_ae:reaction_chamber', [
    'ABA',
    'ACA',
    'DED'
], {
    'A': 'ae2:fluix_dust',
    'B': 'ae2:condenser',
    'C': 'ae2:vibration_chamber',
    'D': 'mekanism:dust_diamond',
    'E': "kubejs:liquid_unknown_bucket"
})
event.shaped('ae2:formation_core', [
    '   ',
    'ABC',
    '   '
], {
    'A': 'ae2cs:purified_certus_quartz_crystal',
    'B': 'ae2:fluix_dust',
    'C': 'ae2:printed_engineering_processor'
})
event.shaped('ae2:annihilation_core', [
    '   ',
    'ABC',
    '   '
], {
    'A': 'ae2cs:purified_energized_fluix_crystal',
    'B': 'ae2:fluix_dust',
    'C': 'ae2:printed_calculation_processor'
})
event.shaped('mekanism:pressurized_reaction_chamber', [
    'ABA',
    'CDE',
    'FGF'
], {
    'A': 'mekanism:ingot_steel',
    'B': 'ae2cs:purified_energized_fluix_crystal',
    'C': 'ae2:annihilation_core',
    'D': 'mekanism:enrichment_chamber',
    'E': 'ae2:formation_core',
    'F': 'ae2:printed_silicon',
    'G': 'mekanism:dynamic_tank'
})
event.shapeless('extendedae:ex_pattern_provider', [
    'ae2:pattern_provider',
    'ae2:capacity_card'
])
event.shaped('extendedae:ex_pattern_provider', [
    'ABA',
    'CDE',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'minecraft:crafting_table',
    'C': 'ae2cs:energized_fluix_crystal_seed',
    'D': 'ae2:capacity_card',
    'E': 'mekanism:nugget_osmium'
})
event.shapeless('2x ae2:basic_card', [
    'ae2:advanced_card'
])
event.shaped('extendedae:infinity_cobblestone_cell', [
    'ABA',
    'CDE',
    'FGF'
], {
    'A': 'ae2:quartz_glass',
    'B': 'ae2:annihilation_plane',
    'C': 'minecraft:lava_bucket',
    'D': 'ae2omnicells:quantum_omni_cell_component_1k',
    'E': 'minecraft:water_bucket',
    'F': 'minecraft:diamond',
    'G': 'extendedae:mod_storage_bus'
})
event.shaped('extendedae:infinity_water_cell', [
    'ABA',
    'CDC',
    'EEE'
], {
    'A': 'ae2:quartz_glass',
    'B': 'ae2:annihilation_plane',
    'C': 'minecraft:water_bucket',
    'D': 'ae2omnicells:quantum_omni_cell_component_1k',
    'E': 'minecraft:diamond'
})
event.shaped('mekmm:large_wind_generator', [
    'ABA',
    'ACA',
    'ADA'
], {
    'A': 'mekanism:block_steel',
    'B': 'mekmm:large_heat_generator',
    'C': 'extendedae:infinity_cobblestone_cell',
    'D': 'minecraft:lava_bucket'
})
event.shaped('16x mekanism:upgrade_energy', [
    ' A ',
    'BCB',
    ' A '
], {
    'A': 'minecraft:glass',
    'B': 'mekanism:ingot_osmium',
    'C': 'ae2:ender_dust'
})
event.shaped('16x mekanism:upgrade_speed', [
    ' A ',
    'BCB',
    ' A '
], {
    'A': 'minecraft:glass',
    'B': 'mekanism:ingot_osmium',
    'C': 'ae2cs:purified_ender_quartz'
})
event.shaped('actuallyadditions:atomic_reconstructor', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'ae2:ender_dust',
    'C': 'actuallyadditions:iron_casing'
})
event.shaped('actuallyadditions:iron_casing', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'minecraft:glass',
    'C': 'mekanism:ingot_osmium'
})
event.shaped('minecraft:piston', [
    'AAA',
    'BCB',
    'BDB'
], {
    'A': 'minecraft:bone_meal',
    'B': 'minecraft:cobblestone',
    'C': 'mekanism:dust_diamond',
    'D': 'mekanism:ingot_osmium'
})
event.shaped('ae2:inscriber', [
    'ABA',
    'C A',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': 'minecraft:piston',
    'C': 'mekanism:ingot_osmium'
})
event.shaped('ae2omnicells:quantum_crafting_unit_block', [
    'ABA',
    'CDC',
    'AEA'
], {
    'A': 'mekanism:ingot_osmium',
    'B': 'ae2:annihilation_core',
    'C': 'ae2:fluix_glass_cable',
    'D': 'ae2:printed_calculation_processor',
    'E': 'ae2:formation_core'
})
event.shaped('justdirethings:gooblock_tier1', [
    'ABA',
    'CDC',
    'ABA'
], {
    'A': 'minecraft:clay_ball',
    'B': 'extendedae_plus:basic_core',
    'C': 'minecraft:rotten_flesh',
    'D': 'minecraft:dirt'
})
event.shapeless('64x powah:dielectric_paste', [
    'minecraft:charcoal',
    'minecraft:charcoal',
    'minecraft:charcoal',
    'minecraft:clay_ball',
    'minecraft:clay_ball',
    'minecraft:lava_bucket',
    'mekanism:ingot_lead',
    'mekanism:ingot_lead',
    'mekanism:ingot_lead'
])
event.shaped("ae2omnicells:quantum_omni_cell_component_1m", [
    'AAB',
    'ACB',
    'ABB'
], {
    'A': 'ae2:annihilation_core',
    'B': 'ae2:formation_core',
    'C': 'ae2omnicells:quantum_omni_cell_component_1k'
})
event.shaped('merequester:requester', [
    'ABB',
    'ACB',
    'AAB'
], {
    'A': 'ae2:annihilation_core',
    'B': 'ae2:formation_core',
    'C': 'ae2omnicells:quantum_omni_cell_component_1m'
})
event.shaped('tiab:time_in_a_bottle', [
    'ABA',
    'ACA',
    'DDD'
], {
    'A': 'powah:capacitor_basic',
    'B': 'ae2cs:purified_ender_quartz',
    'C': 'mekanism:block_lead',
    'D': 'powah:dielectric_paste'
})
event.shaped('powah:energizing_rod_starter', [
    ' A ',
    'BCB',
    ' D '
], {
    'A': 'ae2cs:purified_certus_quartz_crystal',
    'B': 'powah:capacitor_basic_tiny',
    'C': 'powah:dielectric_casing',
    'D': 'powah:dielectric_rod'
})
event.shaped('mekanism:chemical_infuser', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'mekmm:scrap',
    'B': 'powah:dielectric_rod',
    'C': 'mekanism:steel_casing'
})
event.shaped('mekanism:chemical_oxidizer', [
    'ABA',
    'CDE',
    'AFA'
], {
    'A': 'powah:dielectric_rod',
    'B': 'kubejs:fluix_fluid_bucket',
    'C': 'mekanism:ingot_lead',
    'D': 'mekanism:dynamic_tank',
    'E': 'mekmm:scrap',
    'F': 'mekanism:steel_casing'
})
})