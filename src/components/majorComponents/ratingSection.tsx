// IMPORTS //
import { Link } from 'react-router-dom'
// IMAGES //
import aboutUsIMG1 from '../../assets/images/aboutUS-1.png'
import aboutUsIMG2 from '../../assets/images/aboutUS-2.png'
import aboutUsIMG3 from '../../assets/images/aboutUS-3.png'
import aboutUsIMG4 from '../../assets/images/aboutUS-4.png'
import aboutUsIMG5 from '../../assets/images/aboutUS-5.png'
import aboutUsIMG6 from '../../assets/images/aboutUS-6.png'
import aboutUsIMG7 from '../../assets/images/aboutUS-7.png'
import aboutUsIMG8 from '../../assets/images/aboutUS-8.png'
import aboutUsIMG9 from '../../assets/images/aboutUS-9.png'
// RATING IMAGE //
import ratingIMG from '../../assets/images/aboutRatingIMG.png'

// STYLES //
import '../../Styles/Home/ratingSection.css'


function RatingSection () {
    return (
        <section id='rating-section'>
            <div id='rating-content-wrapper'>
                <div id='text-wrapper'>
                    <h3>What they say about us</h3>
                    <img src={ratingIMG} alt="Rating" />
                    <span id='rate-star-wrapper'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        {/* EMPTY */}
                        <i className="bi bi-star"></i>
                    </span>

                    <p>
                        Slate helps you see how many more days you need to work to <br />
                        reach your financial goal.
                    </p>
                    <div id='info'>
                        <Link to="/reginaMiles" id='name'>Regina Miles</Link>
                        
                        <h6 id='role'>Designer</h6>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div id='rating-image-wrapper'>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG1} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG2} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG3} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG4} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG5} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG6} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG7} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG8} alt="Cool" />
                    </div>
                    <div className='IMG-cover'>
                        <img src={aboutUsIMG9} alt="Cool" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RatingSection