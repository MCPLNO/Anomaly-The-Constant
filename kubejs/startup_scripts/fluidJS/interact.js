FluidEvents.interact(event => {
    event.createForBlock(
        Fluid.of('minecraft:lava'),
        Fluid.of('kubejs:fluix_fluid'),
        Block.getBlock('mekanism:osmium_ore'),
        Block.getBlock('mekanism:osmium_ore')
    )
})