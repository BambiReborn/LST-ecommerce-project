// IMPORTS //

import { useState } from 'react'
import ProductCard from '../commonComponents/productCard'
import { useGetProductsQuery } from '../../services/productsApi'

// STYLES //
import '../../Styles/Home/productSection.css'


function ProductSection() {

    // LOAD MORE LOGIC //
    const [productsVisible, setProductsVisible] = useState(false)

    // GET PRODUCTS FROM API //
    const {
        data,
        isLoading,
        isError,
    } = useGetProductsQuery()


    // LOADING STATE //
    if (isLoading) {
        return (
            <section id='productSection'>
                <div id='title'>
                    <h4>Featured Products</h4>
                    <h3>BESTSELLER PRODUCTS</h3>
                    <p>Loading products...</p>
                </div>
            </section>
        )
    }


    // ERROR STATE //
    if (isError) {
        return (
            <section id='productSection'>
                <div id='title'>
                    <h4>Featured Products</h4>
                    <h3>BESTSELLER PRODUCTS</h3>
                    <p>
                        Unable to load products. Please try again.
                    </p>
                </div>
            </section>
        )
    }


    // API PRODUCTS //
    const products = data?.products ?? []


    return (
        <section id='productSection'>

            {/* TITLE */}
            <div id='title'>
                <h4>Featured Products</h4>

                <h3>BESTSELLER PRODUCTS</h3>

                <p>
                    Problems trying to resolve the conflict between
                </p>
            </div>


            {/* PRODUCT CARDS */}
            <div id='card-wrapper'>

                {products
                    .slice(0, productsVisible ? 15 : 10)
                    .map(function (product) {

                        const discountedPrice =
                            product.price -
                            (
                                product.price *
                                product.discountPercentage
                            ) / 100


                        return (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.thumbnail}
                                alt={product.title}
                                title={product.title}
                                department={product.category}
                                departmentLink={`/shop/${product.id}`}
                                originalPrice={`$${product.price.toFixed(2)}`}
                                salePrice={`$${discountedPrice.toFixed(2)}`}
                                discount={`-${product.discountPercentage}%`}
                                rating={product.rating}
                                reviewCount={
                                    `${product.reviews?.length ?? 0}`
                                }
                                isOutOfStock={
                                    product.stock === 0
                                }
                            />
                        )
                    })}

            </div>


            {/* LOAD MORE / HIDE PRODUCTS */}
            <button
                type='button'
                id='moreProducts-BTN'
                onClick={function () {
                    setProductsVisible(!productsVisible)
                }}
            >
                {
                    productsVisible
                        ? 'HIDE PRODUCTS'
                        : 'LOAD MORE PRODUCTS'
                }
            </button>

        </section>
    )
}


export default ProductSection