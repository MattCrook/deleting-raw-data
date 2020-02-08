export default {
    async deleteRecipe (recipeId) {
        const response = await fetch(`http://localhost:8088/recipes/${recipeId}`, {
            method: "DELETE"
        })
        return await response.json()
    },
    async getAllRecipes () {
        const response = await fetch("http://localhost:8088/recipes")
        return await response.json()
    }
};
