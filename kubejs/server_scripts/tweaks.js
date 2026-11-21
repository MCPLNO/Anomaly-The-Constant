ServerEvents.loaded(event => {
    const { server } = event
    server.runCommandSilent('gamerule doMobSpawning false')
    server.runCommandSilent('gamerule doDaylightCycle false')
    server.runCommandSilent('time set day')
    server.runCommandSilent('gamerule doWeatherCycle false')
    server.runCommandSilent('weather clear')
    server.runCommandSilent('gamerule keepInventory true')
    server.runCommandSilent('gamerule waterSourceConversion false')
    server.runCommandSilent('gamerule lavaSourceConversion false')
})