import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create a new customer
const createCustomer = async (req, res) => {
    try {
        const { name, email } = req.body;

        const customer = await stripe.customers.create({
            name,
            email,
        });

        res.status(200).json({
            success: true,
            message: "Customer created successfully",
            customer,
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Add a new card to an existing customer
const addCard = async (req, res) => {
    try {
        const {
            customer_id,
            card_Name,
            card_ExpYear,
            card_ExpMonth,
            card_Number,
            card_CVC,
        } = req.body;

        const cardToken = await stripe.tokens.create({
            card: {
                name: card_Name,
                number: card_Number,
                exp_year: card_ExpYear,
                exp_month: card_ExpMonth,
                cvc: card_CVC,
            },
        });

        const card = await stripe.customers.createSource(customer_id, {
            source: cardToken.id,
        });

        res.status(200).json({
            success: true,
            message: "Card added successfully",
            card,
        });
    } catch (error) {
        console.error('Error adding card:', error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Create a payment charge
const createPayment = async (req, res) => {
    try {
        const { email, amount, card_id, customer_id } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(amount) * 100,
            currency: 'INR',
            payment_method_types: ['card'],
            customer: customer_id,
            payment_method: card_id,
            confirm: true,
            receipt_email: email,
        });

        res.status(200).json({
            success: true,
            message: "Payment successful",
            paymentIntent,
        });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export { createCustomer, addCard, createPayment };
