ServerEvents.recipes(event => {
    const prefix = "anomaly:recipes/ae2lt/crystal_catalyzer/"
    const ores = [
        { block: "minecraft:iron_ore", ingot: "minecraft:iron_ingot", dust: "mekanism:dust_iron" },
        { block: "minecraft:gold_ore", ingot: "minecraft:gold_ingot", dust: "mekanism:dust_gold" },
        { block: "minecraft:copper_ore", ingot: "minecraft:copper_ingot", dust: "mekanism:dust_copper" },
        { block: "mekanism:tin_ore", ingot: "mekanism:ingot_tin", dust: "mekanism:dust_tin" },
        { block: "mekanism:osmium_ore", ingot: "mekanism:ingot_osmium", dust: "mekanism:dust_osmium" },
        { block: "mekanism:uranium_ore", ingot: "mekanism:ingot_uranium", dust: "mekanism:dust_uranium" },
        { block: "mekanism:lead_ore", ingot: "mekanism:ingot_lead", dust: "mekanism:dust_lead" },
        { block: "minecraft:coal_ore", ingot: "minecraft:coal", dust: "mekanism:dust_coal" },
        { block: "minecraft:diamond_ore", ingot: "minecraft:diamond", dust: "mekanism:dust_diamond" },
        { block: "minecraft:emerald_ore", ingot: "minecraft:emerald", dust: "mekanism:dust_emerald" },
        { block: "minecraft:redstone_ore", ingot: "minecraft:redstone", dust: "minecraft:redstone" },
        { block: "minecraft:lapis_ore", ingot: "minecraft:lapis_lazuli", dust: "mekanism:dust_lapis_lazuli" },
        { block: "minecraft:nether_quartz_ore", ingot: "minecraft:quartz", dust: "mekanism:dust_quartz" },
        { block: "mekanism:fluorite_ore", ingot: "mekanism:fluorite_gem", dust: "mekanism:dust_fluorite" }
    ]

    ores.forEach(ore => {
        event.custom({
            type: 'ae2lt:crystal_catalyzer',
            catalyst: { item: ore.block },
            catalystCount: 1,
            output: { id: ore.ingot, count: 1 },
            energyPerCycle: 400,
            lightningCost: 1,
            lightningTier: 'high_voltage'
        }).id(prefix + "crystal_mode_" + ore.block.split(":")[1])
        event.custom({
            type: 'ae2lt:crystal_catalyzer',
            mode: 'dust',
            ingredients: [],
            catalyst: { item: ore.block },
            catalystCount: 1,
            output: { id: ore.dust, count: 1 },
            energyPerCycle: 400,
            lightningCost: 1,
            lightningTier: 'high_voltage'
        }).id(prefix + "dust_mode_" + ore.block.split(":")[1])
    })
})