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



function RatingSection () {
    return (
        <section id='rating-section'>
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
                    <h6>
                        <Link to="/reginaMiles">Regina Miles</Link>
                    </h6>
                </div>
            </div>
        </section>
    )
}

export default RatingSection