StartupEvents.registry("mekanism:chemical", (event) => {
    const anomalyGases = [
        { id: "fluix_gas",           color: 0x5d52a1 },
        { id: "certus_gas",          color: 0x9ad1fc },
        { id: "whywhywhy",           color: 0x000000 },
        { id: "unknown",             color: 0x585858 },
        { id: "chlorine",            color: 0x98FF98 },
        { id: "phosgene",            color: 0xE0FFFF },
        { id: "hydrogen_cyanide",    color: 0xE6E6FA },
        { id: "anti_gravity_vapor",  color: 0xFFFFFF },
        { id: "quantum",             color: 0xA9A9A9 },
        { id: "soul_residue",        color: 0x00FFFF }
    ]

    anomalyGases.forEach(gas => {
        event.create(`kubejs:${gas.id}`).tint(gas.color)
    })
})