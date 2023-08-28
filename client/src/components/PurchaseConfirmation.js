import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const PurchaseConfirmation = ({ match }) => {
const selectedMeal=useSelector((state)=>state.selectedMeal)
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Purchase Confirmation
      </Typography>
      <Typography variant="h6" gutterBottom>
        Meal: {selectedMeal?selectedMeal.strMeal:"No meal selected"}
      </Typography>
      <Typography variant="body1">
        Status: Purchased
      </Typography>
      <Link to="/">
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default PurchaseConfirmation;
