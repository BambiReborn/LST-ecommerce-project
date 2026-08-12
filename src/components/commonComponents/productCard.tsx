// IMPORTS //
import { Link } from 'react-router-dom'
import '../../Styles/Home/productSection.css'

type ProductCardProps = {
  image: string
  alt: string
  title: string
  department: string
  departmentLink: string
  originalPrice: string
  salePrice: string
}

function ProductCard({
  image,
  alt,
  title,
  department,
  departmentLink,
  originalPrice,
  salePrice,
}: ProductCardProps) {
  return (
    <article>
      <img src={image} alt={alt} />

      <h5>{title}</h5>

      <Link to={departmentLink}>
        {department}
      </Link>

      <div id='price-wrapper'>
        <h5 id='originalPrice'>{originalPrice}</h5>
        <h5 id='salePrice'>{salePrice}</h5>
      </div>
    </article>
  )
}

export default ProductCard