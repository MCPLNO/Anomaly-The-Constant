StartupEvents.registry('fluid', event => {
    const anomalyFluids = [
        { id: "liquid_unknown", type: "thin",  color: 0x5d52a1 },
        { id: "fluix_fluid",    type: "thick", color: 0x5d52a1 },
        { id: "concentrated_hydrofluoric_acid", type: "thin", color: 0xE0FFFF },
        { id: "imaginary_suspension", type: "thick", color: 0x4B0082 },
        { id: "soul_solvent", type: "thin", color: 0x7CFC00 }
    ]

    anomalyFluids.forEach(fluid => {
        event.create(`kubejs:${fluid.id}`, fluid.type).tint(fluid.color)
    })
})