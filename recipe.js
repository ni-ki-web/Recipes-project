const params = new URLSearchParams(window.location.search);
const recipeKey = params.get("recipe");
const recipe = recipes[recipeKey];

if(!recipe) {
    document.getElementById("recipe-container").innerHTML = "<p>Recipe not found.</p>";
} else {
    const container = document.getElementById("recipe-container");
    
    container.innerHTML = `
        <h1 class="recipe-title">${recipe.title}</h1>
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
        <p class="recipe-description">${recipe.description}</p>

        <section class="recipe-section">
            <h2 class="section-title">Summary:</h2>
            <ul class="summary-list">
                ${Object.entries(recipe.summary).map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`).join('')}
            </ul>
        </section>

        <section class="recipe-section">
            <h2 class="section-title">Ingredients:</h2>
            <ul class="ingredient-list">
                ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </section>

        <section class="recipe-section">
            <h2 class="section-title">Directions:</h2>
            <ol class="instruction-list">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </section>

        <section class="recipe-section">
            <h2 class="section-title">Tips:</h2>
            <ul class="tips-list">
                ${recipe.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </section>

        <section class="recipe-section">
            <h2 class="section-title">Nutrition:</h2>
            <table class="nutrition-table">
                ${Object.entries(recipe.nutrition).map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`).join('')}
            </table>
        </section>

        ${recipe.credit ? `
            <section class="recipe-section recipe-credit">
                <p>Original recipe from: 
                    <a href="${recipe.credit.url}" target="_blank" rel="noopener noreferrer">
                        ${recipe.credit.text}
                    </a>
                </p>
            </section>
        ` : ''}
    `;
}