// IMPORTS //
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

import '../../Styles/Home/productSection.css'


type ProductCardProps = {
    id: number
    image: string
    alt: string
    title: string
    department: string
    departmentLink: string
    originalPrice: string
    salePrice: string

    discount?: string
    brand?: string
    rating?: number
    reviewCount?: string
    isOutOfStock?: boolean
}


function ProductCard({
    id,
    image,
    alt,
    title,
    department,
    departmentLink,
    originalPrice,
    salePrice,
    discount,
    brand,
    rating,
    reviewCount,
    isOutOfStock = false,
}: ProductCardProps) {

    const dispatch = useDispatch()


    function handleAddToCart() {

        if (isOutOfStock) {
            return
        }

        dispatch(addToCart(id))
    }


    return (
        <article className="product-card">

            {/* PRODUCT IMAGE */}
            <div className="product-image-wrapper">

                <img
                    src={image}
                    alt={alt}
                />


                {/* HOVER / CLICK ACTIONS */}
                <div className="product-actions">

                    <button
                        type="button"
                        aria-label="Compare product"
                        id="compare-product-btn"
                    >
                        <i className="fa-solid fa-code-compare"></i>
                    </button>


                    <button
                        type="button"
                        aria-label="Like product"
                        id="like-product-btn"
                    >
                        <i className="bi bi-heart"></i>
                    </button>

                </div>


                {/* DISCOUNT */}
                {discount && (
                    <span className="discount">
                        {discount}
                    </span>
                )}


                {/* OUT OF STOCK */}
                {isOutOfStock && (
                    <span className="out-of-stock">
                        Out of stock
                    </span>
                )}

            </div>


            {/* PRODUCT INFORMATION */}

            {brand && (
                <p className="brand">
                    {brand}
                </p>
            )}


            <h5>{title}</h5>


            <Link to={departmentLink}>
                {department}
            </Link>


            {/* PRICE */}
            <div id="price-wrapper">

                <h5 id="originalPrice">
                    {originalPrice}
                </h5>

                <h5 id="salePrice">
                    {salePrice}
                </h5>

            </div>


            {/* RATING */}
            {(rating !== undefined || reviewCount) && (
                <div className="rating-wrapper">

                    <span className="stars">
                        ★★★★★
                    </span>

                    {reviewCount && (
                        <span className="review-count">
                            {reviewCount}
                        </span>
                    )}

                </div>
            )}


            {/* ADD TO BASKET */}
            <button
                type="button"
                disabled={isOutOfStock}
                className="add-to-basket"
                onClick={handleAddToCart}
            >
                ADD TO BASKET
            </button>

        </article>
    )
}


export default ProductCard