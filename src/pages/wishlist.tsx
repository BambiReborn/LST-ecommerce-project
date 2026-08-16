// IMPORTS //

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../app/store'

import {toggleWishlist,} from '../features/wishlist/wishlistSlice'

import {addToCart,} from '../features/cart/cartSlice'

import { useGetProductsQuery } from '../services/productsApi'


function Wishlist() {

    const dispatch = useDispatch()


    // GET LIKED PRODUCT IDs FROM REDUX
    const wishlistItems = useSelector(function (state: RootState) {
        return state.wishlist.items
    })


    // GET PRODUCTS FROM API
    const {
        data,
        isLoading,
        isError,
    } = useGetProductsQuery()


    // LOADING
    if (isLoading) {
        return (
            <main>
                <h1>Wishlist</h1>
                <p>Loading wishlist...</p>
            </main>
        )
    }


    // ERROR
    if (isError) {
        return (
            <main>
                <h1>Wishlist</h1>
                <p>Unable to load wishlist.</p>
            </main>
        )
    }


    const products = data?.products ?? []


    // MATCH REDUX IDs WITH API PRODUCTS
    const wishlistProducts = wishlistItems
        .map(function (id) {

            return products.find(function (product) {
                return product.id === id
            })

        })
        .filter(function (product) {
            return product !== undefined
        })


    // EMPTY WISHLIST
    if (wishlistProducts.length === 0) {
        return (
            <main>
                <h1>Your Wishlist</h1>

                <p>
                    You haven't added any products to your wishlist yet.
                </p>
            </main>
        )
    }


    return (
        <main>

            <h1>Your Wishlist</h1>


            {/* WISHLIST PRODUCTS */}
            <section>

                {wishlistProducts.map(function (product) {

                    return (
                        <article key={product.id}>

                            {/* PRODUCT IMAGE */}
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                width="200"
                            />


                            {/* PRODUCT INFORMATION */}
                            <div>

                                <h2>
                                    {product.title}
                                </h2>


                                <p>
                                    ${product.price.toFixed(2)}
                                </p>


                                {/* ADD TO CART */}
                                <button
                                    type="button"
                                    onClick={function () 
                                        {dispatch(addToCart(product.id))

                                    }}
                                >
                                    ADD TO CART
                                </button>


                                {/* REMOVE FROM WISHLIST */}
                                <button
                                    type="button"
                                    onClick={function () 
                                        {dispatch(toggleWishlist(product.id))

                                    }}
                                >
                                    REMOVE
                                </button>

                            </div>

                        </article>
                    )

                })}

            </section>

        </main>
    )
}


export default Wishlist