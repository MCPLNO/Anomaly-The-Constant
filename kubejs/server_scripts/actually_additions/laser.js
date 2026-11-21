ServerEvents.recipes(event => {
    event.custom({
        "type": "actuallyadditions:laser",
        "ingredient": { "item": "minecraft:iron_block" },
        "result": { "id": "appflux:energy_processor_press" },
        "energy": 1000
    })
    event.custom({
        "type": "actuallyadditions:laser",
        "ingredient": { "item": "powah:dielectric_paste" },
        "result": { "id": "powah:capacitor_basic" },
        "energy": 1000
    })
})