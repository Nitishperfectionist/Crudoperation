import express from "express";
import { createCustomer,addCard,createPayment } from "../controllers/payment.controller.js";

const paymentRouter=express.Router();



paymentRouter.post('/create-customer',createCustomer)
paymentRouter.post('/addCard',addCard)
paymentRouter.post('/payNow',createPayment)



export default paymentRouter;


// const express = require('express');
// const payment_route = express();

// const bodyParser = require('body-parser');
// payment_route.use(bodyParser.json());
// payment_route.use(bodyParser.urlencoded({ extended:false }));

// const paymentController = require('../controllers/paymentController');

// payment_route.post('/create-customer', paymentController.createCustomer);
// payment_route.post('/add-card', paymentController.addNewCard);
// payment_route.post('/create-charges', paymentController.createCharges);

// module.exports = payment_route;