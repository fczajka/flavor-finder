import type { Recipe } from '@/globals/interface';

export default async function Home() {
  const data = await fetch(
    `${process.env.MAIN_URL}/recipes/findByIngredients?ingredients=apples,+flour,+sugar&ranking=1&apiKey=${process.env.API_KEY}`,
  );
  const recipes: Recipe[] = await data.json();

  //https://api.spoonacular.com/food/ingredients/search?query=banana&sortDirection=desc&apiKey={process.env.API_KEY}

  return (
    <main>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='p-4 mb-4 border rounded shadow-lg'>
            <h2 className='text-xl font-bold mb-2'>{recipe.title}</h2>
            <h3 className='text-lg font-semibold'>Used Ingredients:</h3>
            <ul className='list-disc list-inside mb-2'>
              {recipe.usedIngredients.map((ingredient) => (
                <li key={ingredient.id} className='ml-4'>
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
