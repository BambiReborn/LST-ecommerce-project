// IMPORTS //
import FeaturedPostCard from '../commonComponents/featuredPostCard'

// CARD IMAGES //
import featuredIMG1 from '../../assets/images/featuredIMG-1.png'
import featuredIMG2 from '../../assets/images/featuredIMG-2.png'
import featuredIMG3 from '../../assets/images/featuredIMG-3.png'

// STYLES //
import '../../Styles/Home/featuredPostSection.css'


function FeaturedPostSection () {
    return (
        <section id='featuredPost-section'>
            {/* MOBILE TITLE */}
            <div id='mobile-title'>
                <h6>Practice Advice</h6>
                <h2>Featured Products</h2>
            </div>

            {/* DESKTOP TITLE */}
            <div id='title'>
                <h6>Practice Advice</h6>
                <h2>Featured Posts</h2>
            </div>

            <div id='cards-wrapper'>
                <FeaturedPostCard 
                    image={featuredIMG1}
                    alt="Modern luxury bedroom"
                    badge="NEW"
                    source="Google"
                    category="Trending"
                    status="New"
                    title={<>
                        Loudest à la Madison #1 <br />(L'integral)
                        </>}
                    description={<>
                        We focus on ergonomics and meeting<br /> you where you work. It's only a<br /> keystroke away.
                        </>}
                    date="22 April 2021"
                    comments={10}
                    learnMoreLink="/news/loudest-a-la-madison"
                />

                {/* CARD 2 */}
                <FeaturedPostCard 
                    image={featuredIMG2}
                    alt="Modern luxury kitchen"
                    badge="NEW"
                    source="Google"
                    category="Trending"
                    status="New"
                    title={<>
                        Loudest à la Madison #1 <br />(L'integral)
                        </>}
                    description={<>
                        We focus on ergonomics and meeting<br /> you where you work. It's only a<br /> keystroke away.
                        </>}
                    date="22 April 2021"
                    comments={10}
                    learnMoreLink="/news/loudest-a-la-madison"
                />

                {/* CARD 3 */}
                <FeaturedPostCard 
                    image={featuredIMG3}
                    alt="Modern luxury bedroom"
                    badge="NEW"
                    source="Google"
                    category="Trending"
                    status="New"
                    title={<>
                        Loudest à la Madison #1 <br />(L'integral)
                        </>}
                    description={<>
                        We focus on ergonomics and meeting<br /> you where you work. It's only a<br /> keystroke away.
                        </>}
                    date="22 April 2021"
                    comments={10}
                    learnMoreLink="/news/loudest-a-la-madison"
                />
            </div>
        </section>
    )
}

export default FeaturedPostSection