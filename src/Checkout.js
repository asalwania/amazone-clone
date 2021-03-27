import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import cartimg from './images/cartimg.jpg'
import CheckoutProduct from './CheckoutProduct'
import img from './images/iphone.jpg'

const Checkout = () => {
    const [{ basket }] = useStateValue()
    return (
        <div className="checkout">
            <img src={cartimg} alt='iphone' className="checkout_ad" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shoping basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">
                        Your Shoping Basket
                    </h2>
                    {
                        basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Checkout
