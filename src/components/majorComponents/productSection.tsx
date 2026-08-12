// IMPORTS //

import ProductCard from '../commonComponents/productCard'

// PRODUCT IMAGES //
import productIMG1 from '../../assets/images/productsIMG-1.png'
import productIMG2 from '../../assets/images/productsIMG-2.png'
import productIMG3 from '../../assets/images/productsIMG-3.png'
import productIMG4 from '../../assets/images/productsIMG-4.png'
import productIMG5 from '../../assets/images/productsIMG-5.png'
import productIMG6 from '../../assets/images/productsIMG-6.png'
import productIMG7 from '../../assets/images/productsIMG-7.png'
import productIMG8 from '../../assets/images/productsIMG-8.png'
import productIMG9 from '../../assets/images/productsIMG-9.png'
import productIMG10 from '../../assets/images/productsIMG-10.png'

// STYLES //
import '../../Styles/Home/productSection.css'

function ProductSection () {
    return (
        <section id='productSection'>
            <div id='title'>
                <h4>Featured Products</h4>
                <h3>BESTSELLER PRODUCTS</h3>
                <p>Problems trying to resolve the conflict between</p>
            </div>

            {/* PRODUCT CARDS */}
            <div id='card-wrapper'>
                {/* CARD 1 */}
                <ProductCard 
                    image = {productIMG1}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 2 */}
                <ProductCard 
                    image = {productIMG2}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 3 */}
                <ProductCard 
                    image = {productIMG3}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 4 */}
                <ProductCard 
                    image = {productIMG4}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 5 */}
                <ProductCard 
                    image = {productIMG5}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 6 */}
                <ProductCard 
                    image = {productIMG6}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 7 */}
                <ProductCard 
                    image = {productIMG7}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 8 */}
                <ProductCard 
                    image = {productIMG8}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 9 */}
                <ProductCard 
                    image = {productIMG9}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
                {/* CARD 10 */}
                <ProductCard 
                    image = {productIMG10}
                    alt = 'Bestseller Product'
                    title = 'Graphic Design'
                    department='English Department'
                    departmentLink='/english-department'
                    originalPrice='$16.48'
                    salePrice='$6.48'
                />
            </div>
        </section>
    )
}

export default ProductSection