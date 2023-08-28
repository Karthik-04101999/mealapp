import React from 'react';
import { Card } from 'antd';

const MealCard = ({ meal }) => {
  return (
    <Card
      title={meal.strMeal}
      style={{ width: 300, marginBottom: '20px' }}
      cover={<img alt={meal.strMeal} src={meal.strMealThumb} />}
    >
      {/* <p>{meal.strInstructions}</p> */}
    </Card>
  );
};

export default MealCard;
