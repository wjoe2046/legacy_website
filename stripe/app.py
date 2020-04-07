import os
from flask import Flask, request, jsonify
import stripe

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
app = Flask(__name__)

VALID_ORIGINS = ["https://covid-watch.org", "https://www.covid-watch.org"]


@app.route('/')
def checkout():
    amount = int(float(request.args.get('amount', type=str)) * 100)
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'name': 'Donation',
            'amount': amount,
            'currency': 'usd',
            'quantity': 1,
        }],
        success_url='https://covid-watch.org/thankyou',
        cancel_url='https://covid-watch.org/donate',
    )

    response = jsonify({'session_id': session.id})
    if request.environ.get('HTTP_ORIGIN') in VALID_ORIGINS:
        response.headers.add('Access-Control-Allow-Origin',
                             request.environ.get('HTTP_ORIGIN'))
    else:
        response.headers.add('Access-Control-Allow-Origin', VALID_ORIGINS[0])

    return response


if __name__ == "__main__":
    app.run(host='0.0.0.0')
