ItemEvents.modification(event => {
    event.modify('minecraft:diamond', item => {
        item.burnTime = 64000
    })
})