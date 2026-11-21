ServerEvents.recipes(event => {
    const prefix = "anomaly:ae2/inscriber/";
    const recipes = [
        {
            top: "appflux:energy_processor_press",
            middle: "ae2:controller",
            bottom: false,
            mode: 2,
            output: "ae2lt:overloaded_controller",
            output_amount: 1,
            id: 'overloaded_controller'
        },

        {
            top: "appflux:energy_processor_press",
            middle: "ae2lt:overloaded_controller",
            bottom: false,
            mode: 2,
            output: "ae2lt:wireless_overloaded_controller",
            output_amount: 1,
            id: 'wireless_overloaded_controller'
        },

        {
            top: "appflux:energy_processor_press",
            middle: "ae2lt:wireless_overloaded_controller",
            bottom: false,
            mode: 2,
            output: "ae2lt:advanced_wireless_overloaded_controller",
            output_amount: 1,
            id: 'advanced_wireless_overloaded_controller'
        },

        {
            top: "appflux:energy_processor_press",
            middle: "ae2cs:purified_ender_quartz",
            bottom: false,
            mode: 2,
            output: "extendedae_plus:basic_core",
            output_amount: 1,
            id: 'basic_core'
        }
    ];

    recipes.forEach(recipe => {
        const mode = recipe.mode === 1 ? "press" : "inscribe";
        const ingredients = { middle: { item: recipe.middle }, top: { item: recipe.top } };
        if (recipe.bottom !== false) {
            ingredients.bottom = { item: recipe.bottom };
        }

        event.custom({
            type: "ae2:inscriber",
            ingredients: ingredients,
            mode: mode,
            result: { id: recipe.output, count: recipe.output_amount }
        }).id(prefix + recipe.id);
    });
});