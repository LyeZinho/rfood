/*
This function is used to filter the data from the API call.

{
	"meals": [
		{
			"idMeal": "52908",
			"strMeal": "Ratatouille",
			"strDrinkAlternate": null,
			"strCategory": "Vegetarian",
			"strArea": "French",
			"strInstructions": "Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a sauté pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don’t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.",
			"strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg",
			"strTags": "Vegetables,SideDish",
			"strYoutube": "https:\/\/www.youtube.com\/watch?v=BFdQUgAFtGU",
			"strIngredient1": "Aubergine",
			"strIngredient2": "Courgettes",
			"strIngredient3": "Yellow Pepper",
			"strIngredient4": "Tomato",
			"strIngredient5": "Olive Oil",
			"strIngredient6": "Basil",
			"strIngredient7": "Onion",
			"strIngredient8": "Garlic Clove",
			"strIngredient9": "Red Wine Vinegar",
			"strIngredient10": "Sugar",
			"strIngredient11": "",
			"strIngredient12": "",
			"strIngredient13": "",
			"strIngredient14": "",
			"strIngredient15": "",
			"strIngredient16": "",
			"strIngredient17": "",
			"strIngredient18": "",
			"strIngredient19": "",
			"strIngredient20": "",
			"strMeasure1": "2 large",
			"strMeasure2": "4",
			"strMeasure3": "2",
			"strMeasure4": "4 large",
			"strMeasure5": "5 tbs",
			"strMeasure6": "Bunch",
			"strMeasure7": "1 medium",
			"strMeasure8": "3 finely chopped",
			"strMeasure9": "1 tsp ",
			"strMeasure10": "1 tsp ",
			"strMeasure11": "",
			"strMeasure12": "",
			"strMeasure13": "",
			"strMeasure14": "",
			"strMeasure15": "",
			"strMeasure16": "",
			"strMeasure17": "",
			"strMeasure18": "",
			"strMeasure19": "",
			"strMeasure20": "",
			"strSource": "https:\/\/www.bbcgoodfood.com\/recipes\/2903\/ratatouille",
			"strImageSource": null,
			"strCreativeCommonsConfirmed": null,
			"dateModified": null
		}
	]
}

Return:

{
    "idMeal": "52908",
    "strMeal": "Ratatouille",
    "strDrinkAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "French",
    "strInstructions": "Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a sauté pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don’t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.",
    "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg",
    "strTags": [
        "Vegetables",
        "SideDish"
    ],
    "strYoutube": "https:\/\/www.youtube.com\/watch?v=BFdQUgAFtGU",
    "strIngredients": [
        {
            "ingredient": "Aubergine",
            "measure": "2 large"
        },
        {
            "ingredient": "Courgettes",
            "measure": "4"
        },
        {
            "ingredient": "Yellow Pepper",
            "measure": "2"
        },
        {
            "ingredient": "Tomato",
            "measure": "4 large"
        },
        {
            "ingredient": "Olive Oil",
            "measure": "5 tbs"
        },
        {
            "ingredient": "Basil",
            "measure": "Bunch"
        },
        {
            "ingredient": "Onion",
            "measure": "1 medium"
        },
        {
            "ingredient": "Garlic Clove",
            "measure": "3 finely chopped"
        },
        {
            "ingredient": "Red Wine Vinegar",
            "measure": "1 tsp "
        },
        {
            "ingredient": "Sugar",
            "measure": "1 tsp "
        }
    ],
    "strSource": "https:\/\/www.bbcgoodfood.com\/recipes\/2903\/ratatouille",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}
*/ 

export default function filterData(data) {
    const filteredData = data.meals.map((meal) => {
        const ingredients = [];
        const measures = [];
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(meal[`strIngredient${i}`]);
                measures.push(meal[`strMeasure${i}`]);
            } else {
                break;
            }
        }
        return {
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strDrinkAlternate: meal.strDrinkAlternate,
            strCategory: meal.strCategory,
            strArea: meal.strArea,
            strInstructions: meal.strInstructions,
            strMealThumb: meal.strMealThumb,
            strTags: meal.strTags ? meal.strTags.split(',') : [],
            strYoutube: meal.strYoutube,
            strIngredients: ingredients.map((ingredient, index) => {
                return {
                    ingredient,
                    measure: measures[index],
                };
            }),
            strSource: meal.strSource,
            strImageSource: meal.strImageSource,
            strCreativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
            dateModified: meal.dateModified,
        };
    });
    return filteredData;
}

// // Test
// let data = {
// 	"meals": [
// 		{
// 			"idMeal": "52908",
// 			"strMeal": "Ratatouille",
// 			"strDrinkAlternate": null,
// 			"strCategory": "Vegetarian",
// 			"strArea": "French",
// 			"strInstructions": "Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a sauté pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don’t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.",
// 			"strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg",
// 			"strTags": "Vegetables,SideDish",
// 			"strYoutube": "https:\/\/www.youtube.com\/watch?v=BFdQUgAFtGU",
// 			"strIngredient1": "Aubergine",
// 			"strIngredient2": "Courgettes",
// 			"strIngredient3": "Yellow Pepper",
// 			"strIngredient4": "Tomato",
// 			"strIngredient5": "Olive Oil",
// 			"strIngredient6": "Basil",
// 			"strIngredient7": "Onion",
// 			"strIngredient8": "Garlic Clove",
// 			"strIngredient9": "Red Wine Vinegar",
// 			"strIngredient10": "Sugar",
// 			"strIngredient11": "",
// 			"strIngredient12": "",
// 			"strIngredient13": "",
// 			"strIngredient14": "",
// 			"strIngredient15": "",
// 			"strIngredient16": "",
// 			"strIngredient17": "",
// 			"strIngredient18": "",
// 			"strIngredient19": "",
// 			"strIngredient20": "",
// 			"strMeasure1": "2 large",
// 			"strMeasure2": "4",
// 			"strMeasure3": "2",
// 			"strMeasure4": "4 large",
// 			"strMeasure5": "5 tbs",
// 			"strMeasure6": "Bunch",
// 			"strMeasure7": "1 medium",
// 			"strMeasure8": "3 finely chopped",
// 			"strMeasure9": "1 tsp ",
// 			"strMeasure10": "1 tsp ",
// 			"strMeasure11": "",
// 			"strMeasure12": "",
// 			"strMeasure13": "",
// 			"strMeasure14": "",
// 			"strMeasure15": "",
// 			"strMeasure16": "",
// 			"strMeasure17": "",
// 			"strMeasure18": "",
// 			"strMeasure19": "",
// 			"strMeasure20": "",
// 			"strSource": "https:\/\/www.bbcgoodfood.com\/recipes\/2903\/ratatouille",
// 			"strImageSource": null,
// 			"strCreativeCommonsConfirmed": null,
// 			"dateModified": null
// 		}
// 	]
// }

// console.log(filterData(data));