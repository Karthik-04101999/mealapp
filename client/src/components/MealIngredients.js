import React from 'react';

const MealIngredients = ({ ingredients }) => {
  const ingredientList = ingredients.split(',').map((ingredient, index) => (
    <li key={index}>{ingredient.trim()}</li>
  ));

  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {ingredientList}
      </ul>
    </div>
  );
};

export default MealIngredients;
