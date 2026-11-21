ServerEvents.recipes(event => {
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "explosion"
        },
        ingredients: [
            { "item": "mekanism:steel_casing" }
        ],
        result: {
            count: 1,
            id: "mekanism:enrichment_chamber"
        }
    }).id("anomaly:steel_casing_to_enrichment_chamber")
})