// IMPORTS //

// SECTIONS //
import HeroSection from "../components/majorComponents/heroSection"
import ProductSection from "../components/majorComponents/productSection"
import BestServiceSection from '../components/majorComponents/bestServiceSection'
import FeaturedPostSection from '../components/majorComponents/featuredPostSection'
import RatingSection from "../components/majorComponents/ratingSection"

function Home() {
  return (
      <main>
          <HeroSection />
          <ProductSection />
          <BestServiceSection />
          <FeaturedPostSection />
          <RatingSection />
      </main>
  )
}

export default Home
