// pages/[recipeId].tsx

import { useRouter } from 'next/router';

const RecipeDetailPage = () => {
  const router = useRouter();
  const { recipeId } = router.query;

  // Fetch recipe details based on recipeId

  return (
    <div>
      {/* Display recipe details */}
      <h1>Recipe Detail Page for {recipeId}</h1>
    </div>
  );
};

export default RecipeDetailPage;
