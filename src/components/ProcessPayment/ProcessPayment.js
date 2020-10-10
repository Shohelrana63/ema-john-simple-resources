import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51HaEWQKYwirtu0m5kcvD3UW7wl19uNo36HsuWBFkLlEYwbqLZ7NUDLIsjj7AmbtPEixiHiHbwCOhABoqgVx5J9DC00lkEfJcLk');

const ProcessPayment = ({ handlePayment }) => {

    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;