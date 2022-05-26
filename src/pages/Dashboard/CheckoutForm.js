import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckOutForm = ({ order }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { _id, price, name, email, } = order

    useEffect(() => {
        if (price) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError?.message)
            setProcessing(false)
        }
        else {
            setError('')
            console.log(paymentIntent);
            setSuccess('Congrats! your payment is successful')
            setTransactionId(paymentIntent.id)

            const storePayment = {
                orderId: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(storePayment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data);
                })
        }

    }
    return (
        <div className='mx-10'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#ffffff',
                                '::placeholder': {
                                    color: '#ffffff',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                error && <p className='text-red-700'>{error}</p>
            }
            {
                success && <div className='text-slate-100'>
                    <p>{success}</p>
                    <p><span className='font-bold'>Your transaction id: </span>{transactionId}</p>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;