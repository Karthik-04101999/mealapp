import React from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import Link from 'antd/es/typography/Link';
import MealIngredients from './MealIngredients';
import { addOrder, fetchMealDetails } from '../actions'; // Make sure to import the actions

import { useDispatch } from 'react-redux';


const MealDetailPage = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const meals = useSelector(state => state.meals);
  const meal = meals.find(item => item.idMeal === id);
  const dispatch = useDispatch();

  const handleCheckout=()=>{
    navigate("/checkout")
    dispatch(addOrder(meal.id));
  }

  if (!meal) {
    return <div>Loading...</div>; // Add a loading state if meal data is not available yet
  }

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <div style={{display:"flex",height:"300px"}}>  <img   src={meal.strMealThumb} alt={meal.strMeal} /></div>
          

      <p>{meal.strInstructions}</p>
      {meal.strIngredients && <MealIngredients ingredients={meal.strIngredients} />}
      <Link to={`/purchase/${meal}`}>
      <Button type="primary" onClick={handleCheckout}>Checkout</Button>

      </Link>
    </div>
  );
};

export default MealDetailPage;
