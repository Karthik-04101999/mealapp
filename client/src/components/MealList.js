import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';
import MealCard from './MealCard';

const MealList = ({ meals }) => {
  const [filterText, setFilterText] = useState('');

  const filteredMeals = meals.filter(
    meal => meal.strMeal.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <Input
        placeholder="Filter by name..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <Row gutter={16}>
        {filteredMeals.slice(0, 10).map(meal => (
          <Col key={meal.idMeal} span={8}>
            <Link to={`/meal/${meal.idMeal}`}>
              <MealCard meal={meal} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MealList;
