//无论如何,我相信祂不会掷骰子
ServerEvents.recipes(event => {
    event.recipes.minecraft.smithing_transform(
        "extendedae:ex_molecular_assembler",
        "ae2:capacity_card",
        "ae2:molecular_assembler",
        "ae2cs:purified_certus_quartz_crystal"
    ).id('anomaly:ex_molecular_assembler')
})