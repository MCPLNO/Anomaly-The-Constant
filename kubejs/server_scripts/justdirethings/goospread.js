ServerEvents.recipes(event =>{
        const prefix = "anomaly:recipes/justdirethings/goospread/"
    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": "mekanism:block_lead",
        "input": {
            "Name": "mekanism:block_osmium"
        },
        "output": {
            "Name": "mekanism:block_lead"
        },
        "tierRequirement": 1
    }).id(prefix + "block_lead")
    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": "mekanism:block_charcoal",
        "input": {
            "Name": "minecraft:diamond_block"
        },
        "output": {
            "Name": "mekanism:block_charcoal"
        },
        "tierRequirement": 1
    }).id(prefix + "block_charcoal")


})
