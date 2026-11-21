//无论如何,我相信祂不会掷骰子
ServerEvents.recipes(event => {
    const prefix = "anomaly:recipes/lychee/"

    // Pickaxe right-click Diamond Ore
    event.custom({
        type: "lychee:block_interacting",
        item_in: { "tag": "minecraft:pickaxes" },
        block_in: { "blocks": ["minecraft:diamond_ore"] },
        post: [
            { "type": "damage_item", "damage": 1 },
            { "type": "drop_item", "id": "minecraft:diamond" },
            { "type": "place", "block": "minecraft:air" }
        ]
    }).id(prefix + "pickaxe_diamond_ore")

    // Pickaxe right-click Bedrock
    event.custom({
        type: "lychee:block_interacting",
        item_in: { "tag": "minecraft:pickaxes" },
        block_in: { "blocks": ["minecraft:bedrock"] },
        post: [
            { "type": "damage_item", "damage": 1 },
            { "type": "drop_item", "id": "minecraft:bedrock" },
            { "type": "place", "block": "minecraft:air" }
        ]
    }).id(prefix + "pickaxe_bedrock")

    // Diamond right-click Bedrock (Gamble)
    event.custom({
        type: "lychee:block_interacting",
        item_in: { "item": "minecraft:diamond" },
        block_in: { "blocks": ["minecraft:bedrock"] },
        post: [
            {
                "type": "drop_item",
                "id": "minecraft:iron_ingot",
                "contextual": [{ "type": "chance", "chance": 0.5 }]
            },
            {
                "type": "place",
                "block": "minecraft:air",
                "contextual": [{ "type": "chance", "chance": 0.05 }]
            }
        ]
    }).id(prefix + "diamond_bedrock_gamble")

    // Diamond right-click Diamond Block
    event.custom({
        type: "lychee:block_interacting",
        item_in: { "item": "minecraft:diamond" },
        block_in: { "blocks": ["minecraft:diamond_block"] },
        post: [
            { "type": "place", "block": "minecraft:water" }
        ]
    }).id(prefix + "diamond_to_water")

    // Certus Quartz Dust right-click Bedrock
    event.custom({
        type: "lychee:block_interacting",
        item_in: { "item": "ae2:certus_quartz_dust" },
        block_in: { "blocks": ["minecraft:bedrock"] },
        post: [
            { "type": "place", "block": "ae2:controller" }
        ]
    }).id(prefix + "certus_to_controller")

    // Purified Certus Crystal right-click ME Controller
    event.custom({
        type: "lychee:block_interacting",
        item_in: { "item": "ae2cs:purified_certus_quartz_crystal" },
        block_in: { "blocks": ["ae2:controller"] },
        post: [
            { "type": "place", "block": "ae2:chest" }
        ]
    }).id(prefix + "purified_crystal_to_chest")


    // 16 Purified Certus Crystals in Water
    event.custom({
        type: "lychee:item_inside",
        item_in: { "item": "ae2cs:purified_certus_quartz_crystal", "count": 16 },
        block_in: { "blocks": ["minecraft:water"] },
        post: [
            { "type": "drop_item", "id": "ae2omnicells:quantum_omni_cell_component_1k" }
        ]
    }).id(prefix + "crystal_to_component")

    // 1k Omni Cell Component in Water
    event.custom({
        type: "lychee:item_inside",
        item_in: { "item": "ae2omnicells:quantum_omni_cell_component_1k" },
        block_in: { "blocks": ["minecraft:water"] },
        post: [
            { "type": "drop_item", "id": "ae2omnicells:quantum_omni_cell_1k" }
        ]
    }).id(prefix + "component_to_cell")

    // Anvil crush Bedrock
    event.custom({
        type: "lychee:block_crushing",
        item_in: { "item": "minecraft:bedrock" },
        post: [
            { "type": "drop_item", "id": "mekanism:steel_casing" }
        ]
    }).id(prefix + "anvil_crush_bedrock_item")

    // Anvil crush Purified Crystal
    event.custom({
        type: "lychee:block_crushing",
        item_in: { "item": "ae2cs:purified_certus_quartz_crystal" },
        post: [
            { "type": "drop_item", "id": "minecraft:diamond", "count": 2 },
            { "type": "drop_item", "id": "mekanism:dust_diamond", "count": 2 },
            {
                "type": "drop_item",
                "id": "minecraft:diamond",
                "count": 2,
                "contextual": [{ "type": "chance", "chance": 0.5 }]
            },
            {
                "type": "drop_item",
                "id": "mekanism:dust_diamond",
                "count": 2,
                "contextual": [{ "type": "chance", "chance": 0.5 }]
            }
        ]
    }).id(prefix + "anvil_crush_purified_crystal")

        event.custom({
        type: "lychee:block_interacting",
        item_in: { "item": "ae2:certus_quartz_dust" },
        block_in: { "blocks": ["ae2:quartz_block"] },
        post: [
            { "type": "place", "block": "ae2:fluix_block" }
        ]
    }).id(prefix + "certus_to_fluix_block")
    
    event.custom({
        type: "lychee:dripstone_dripping",
        source_block: { "blocks": ["minecraft:diamond_ore"] },
        target_block: { "blocks": ["ae2:fluix_block"] },
        time: 40,
        post: [
            {
                "type": "drop_item",
                "id": "ae2cs:energized_fluix_crystal_seed"
            }
        ]
    }).id(prefix + "dripstone_fluix_crystal_seed")

    event.custom({
        type: "lychee:block_interacting",
        item_in: { "item": "ae2cs:purified_energized_fluix_crystal" },
        block_in: { "blocks": ["mekanism:steel_casing"] },
        post: [
            { "type": "place", "block": "ae2lt:pigmee_crystal_catalyzer" }
        ]
    }).id(prefix + "purified_energized_fluix_crystal_to_pigmee_crystal_catalyzer")
})