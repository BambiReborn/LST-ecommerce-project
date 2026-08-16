// IMPORTS //

import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../app/store'

import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} from '../features/cart/cartSlice'

import { useGetProductsQuery } from '../services/productsApi'


function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(function (state: RootState) {
        return state.cart.items
    })

    const {
        data,
        isLoading,
        isError,
    } = useGetProductsQuery()


    if (isLoading) {
        return <p>Loading cart...</p>
    }


    if (isError) {
        return <p>Unable to load cart.</p>
    }


    const products = data?.products ?? []


    const cartProducts = cartItems.map(function (cartItem) {

        const product = products.find(function (product) {
            return product.id === cartItem.id
        })

        return {
            product,
            quantity: cartItem.quantity,
        }
    })


    const validCartProducts = cartProducts.filter(function (item) {
        return item.product !== undefined
    })


    if (validCartProducts.length === 0) {
        return (
            <main>
                <h1>Your Cart</h1>
                <p>Your cart is empty.</p>
            </main>
        )
    }


    const subtotal = validCartProducts.reduce(
        function (total, item) {

            if (!item.product) {
                return total
            }

            return total + (
                item.product.price * item.quantity
            )
        },
        0
    )


    return (
        <main>

            <h1>Your Cart</h1>


            {/* CART ITEMS */}
            <section>

                {validCartProducts.map(function (item) {

                    if (!item.product) {
                        return null
                    }


                    return (
                        <article key={item.product.id}>
                            <img
                                src={item.product.thumbnail}
                                alt={item.product.title}
                                width="100"
                            />

                            <div>

                                <h2>
                                    {item.product.title}
                                </h2>

                                <p>
                                    ${item.product.price.toFixed(2)}
                                </p>


                                {/* QUANTITY */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={function () {
                                            dispatch(decrementQuantity(item.product!.id))
                                        }}
                                    >
                                        −
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={function () {
                                            dispatch(incrementQuantity( item.product!.id))
                                        }}
                                    >
                                        +
                                    </button>

                                </div>


                                {/* REMOVE */}
                                <button
                                    type="button"
                                    onClick={function () {
                                        dispatch(removeFromCart(item.product!.id))
                                    }}
                                >
                                    Remove
                                </button>

                            </div>

                        </article>
                    )
                })}

            </section>


            {/* CART SUMMARY */}
            <section>

                <h2>Cart Summary</h2>

                <p>
                    Subtotal: ${subtotal.toFixed(2)}
                </p>

            </section>

        </main>
    )
}


export default Cart