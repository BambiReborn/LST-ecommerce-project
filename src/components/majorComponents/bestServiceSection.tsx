// IMPORTS //
import '../../Styles/Home/bestServiceSection.css'

function bestServiceSection () {
    return (
        <section id='bestService-section'>
            <div id='title'>
                <h4>Featured Products</h4>
                <h3>THE BEST SERVICES</h3>
                <p>Problems trying to resolve the conflict between</p>
            </div>

            <div id='services-wrapper'>
                {/* SERVICES */}
                <div className='best-services'>
                    <i className="fa-solid fa-book-open-reader"></i>
                    <h3>Easy Wins</h3>
                    <p>
                        Get your best looking smile <br /> 
                        now!
                    </p>
                </div>
                {/* CONCRETE SERVICE */}
                <div className='best-services'>
                    <i className="bi bi-journal-text"></i>
                    <h3>Concrete</h3>
                    <p>
                        Defalcate is most focused in <br /> 
                        helping you discover you most <br /> 
                        beautiful smile.
                    </p>
                </div>
                {/* HACK GROWTH */}
                <div className='best-services'>
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <h3>Hack Growth</h3>
                    <p>
                        Overcome any hurdle or any <br />
                        other problem.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default bestServiceSection