BlockEvents.modification(event => {
    event.modify('minecraft:diamond_ore', block => {
        block.destroySpeed = 0.2
        block.requiresTool = false
    })
})