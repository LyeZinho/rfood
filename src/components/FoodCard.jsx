import Link from "next/link";
import Image from "next/image";

// Recive data like this:
/*
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

<FoodCard foodata={foodata} />
*/
function makeYoutubeVideoEmbeddable(youtubeLink) {
  let youtubeVideoId = youtubeLink.split("=")[1];
  let embeddableLink = `https://www.youtube.com/embed/${youtubeVideoId}`;
  return embeddableLink;
}

export default function FoodCard({ foodata }) {
  let data = foodata[0];
  return (
    <div className="flex justify-center items-center flex-col space-y-4 bg-white rounded-2xl shadow-2xl p-4"
        id="foodCard"
    >
        {/* Refresh button */}
        <div className="flex justify-center items-center flex-col p-6">
            <Link href="/">
                <button className="bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-full
                cursor-pointer shadow-2xl border-2 border-white hover:border-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                animate-bounce
                ">
                    Refresh
                </button>
            </Link>
        </div>

      {/* Card for name image and tags */}
      <div className="flex justify-center items-center flex-row space-y-4 bg-white">
        {/* Name and image */}
        <div
          className="flex justify-center items-center flex-col bg-white  
                md:flex-row
                sm:flex-col
                lg:flex-row
                md:space-x-4
                sm:space-x-0
                lg:space-x-6
            "
        >
          <div className=" flex flex-col justify-center items-center flex-col space-y-4 bg-white">
            <h1
              className="
                    md:text-4xl 
                    sm:text-xl
                    text-xl
                    font-bold text-black
                    "
            >
              {data.strMeal}
            </h1>

            {/* Tags, Category and area */}
            <div className="flex flex-col justify-center items-center bg-white space-y-4">
              {/* Category and area */}
              <div className="flex justify-center items-center flex-row space-x-4">
                <div className="flex justify-center items-center flex-col space-y-4 bg-white shadow-2xl rounded-2xl p-2">
                  <h1 className="text-xl font-bold text-black">
                    {data.strCategory}
                  </h1>
                </div>
                <div className="flex justify-center items-center flex-col space-y-4 bg-white shadow-2xl rounded-2xl p-2">
                  <h1 className="text-xl font-bold text-black">
                    {data.strArea}
                  </h1>
                </div>
              </div>

              {/* Tags */}
              <div className="flex justify-center items-center flex-row space-x-2 flex-wrap max-w-2xl">
                {data.strTags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center items-center flex-col space-y-4 bg-white shadow-2xl rounded-2xl p-2"
                    >
                      <h1 className="text-xl font-bold text-black">{tag}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Image
            src={data.strMealThumb}
            alt={data.strMeal}
            width={300}
            height={300}
            className="rounded-2xl shadow-2xl border-2 border-white"
          />
        </div>
      </div>

      {/* Ingredients and instructions */}
      <div
        className="flex justify-center items-center flex-col space-y-4
                md:flex-row
                sm:flex-col
                lg:flex-row
                space-x-4
                md:space-x-4
                sm:space-x-0
                lg:space-x-4
            "
      >
        {/* Ingredients */}
        <div className="flex justify-center items-center flex-col space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-black">Ingredients</h1>
          </div>
          <div className="flex justify-center items-center flex-col space-y-4">
            {data.strIngredients.map((ingredient, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center flex-row space-x-4"
                >
                  <div className="flex justify-center items-center flex-col space-y-4 bg-white shadow-2xl rounded-2xl p-2">
                    <h1 className="text-xl font-bold text-black">
                      {ingredient.ingredient} / {ingredient.measure}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instructions */}
        <div className="flex justify-center items-center flex-col space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-black">Instructions</h1>
          </div>
          <div className="flex justify-center items-center flex-col space-y-4 max-w-md">
            <div className="flex justify-center items-center flex-col space-y-4 bg-white shadow-2xl rounded-2xl p-2">
              <h1 className="text-sm font-bold text-black">
                {data.strInstructions}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Youtube video */}
      <div className="flex justify-center items-center flex-col space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-black">Youtube Video</h1>
        </div>
        <div className="flex justify-center items-center flex-col space-y-4">
            <iframe
                className="rounded-2xl shadow-2xl border-2 border-white
                    w-max
                    h-56
                "
                src={makeYoutubeVideoEmbeddable(data.strYoutube)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="true"
            ></iframe>
        </div>
      </div>
    </div>
  );
}
