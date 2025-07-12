import Stripe from 'stripe';
import Payment from '../models/paymentModel.js';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    console.log("💸 Backendə gələn amount:", amount);
    console.log("🔐 Stripe açarı:", process.env.STRIPE_SECRET_KEY);

    const amountInt = Math.round(amount); // Stripe cent tələb edir

    // Stripe payment intenti BURADA, TRY içində olmalıdır!
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInt,
      currency: currency || 'usd',
      automatic_payment_methods: { enabled: true }
    });

    const payment = new Payment({
      paymentId: paymentIntent.id,
      amount: amount,
      currency: currency || 'usd',
      status: paymentIntent.status,
    });

    await payment.save();

    res.json({ clientSecret: paymentIntent.client_secret, payment });

  } catch (error) {
    // Stripe xəta buraya düşəcək
    console.error("❌ Stripe Xətası:", error);
    res.status(500).json({ error: error.message });
  }
};
