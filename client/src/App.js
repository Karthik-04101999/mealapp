import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from './actions';
import MealList from './components/MealList';
import MealDetailPage from './components/MealDetailPage';
import ShippingForm from './components/ShippingForm';
import PurchasePage from './components/PurchaseConfirmation';

const App = () => {
  const dispatch = useDispatch();
  const meals = useSelector(state => state.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Meal App</h1>
        <Routes>
          <Route path="/" element={<MealList meals={meals} />} />
          <Route path="/meal/:id" element={<MealDetailPage />} />
          <Route path="/checkout" element={<ShippingForm />} />
          <Route path="/purchase" element={<PurchasePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
