import React, { useState } from 'react';
import { Button, TextField, Grid, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import { useDispatch } from 'react-redux';
import { addOrder } from '../actions/index';

// Sample prefilled address data
const orderData = {
  name: 'John Doe',
  homeAddress: '123 Main St',
  street: 'Apt 4B',
  city: 'Cityville',
  state: 'Stateville',
  pincode: '12345',
  mobile: '123-456-7890',
};

const ShippingForm = () => {
  const [shippingInfo, setShippingInfo] = useState(orderData);
  const history = useNavigate(); // Initialize useHistory
  const dispatch = useDispatch();

  const handlePurchase = () => {
    dispatch(addOrder(orderData));
    history('/purchase'); // Navigate to the purchase complete page
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setShippingInfo(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Shipping Information
          </Typography>
          <form onSubmit={handlePurchase}>
            <TextField
              label="Name"
              name="name"
              value={shippingInfo.name}
              onChange={handleChange}
              fullWidth
              required
              margin="dense"
            />
            <TextField
              label="Home Address"
              name="homeAddress"
              value={shippingInfo.homeAddress}
              onChange={handleChange}
              fullWidth
              required
              margin="dense"
            />
            <TextField
              label="Street"
              name="street"
              value={shippingInfo.street}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="City"
              name="city"
              value={shippingInfo.city}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="State"
              name="state"
              value={shippingInfo.state}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Pincode"
              name="pincode"
              value={shippingInfo.pincode}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Mobile Number"
              name="mobile"
              value={shippingInfo.mobile}
              onChange={handleChange}
              fullWidth
              required
              margin="dense"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
              Purchase
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShippingForm;
