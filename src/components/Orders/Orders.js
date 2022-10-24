import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <Reviewitem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}

                    ></Reviewitem>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to="/">Shop More</Link></h2>
                }

            </div>
            <div className='card-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;