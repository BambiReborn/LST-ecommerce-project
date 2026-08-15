// IMPORTS //

// STYLES //
import '../../Styles/Home/betterExperienceSection.css'

function BetterExperienceSection () {
    return (
        <section id='better-experience-section'>
            <div id='write-up-wrapper'>
                <h6>Designing Better Experience</h6>
                {/*MOBILE*/}
                <h2 id='mobile-h2'>
                    Problems <br /> trying to resolve <br /> the conflict <br /> between
                </h2>

                {/*DEKTOP*/}
                <h2 id='desktop-h2'>
                    Problems trying to resolve <br /> the conflict between
                </h2>

                {/* MOBILE */}
                <p id='mobile-p'>
                    Problems trying to resolve the conflict <br /> between the two major 
                    realms of <br /> Classical physics
                </p>

                {/* DESKTOP */}
                <p id='desktop-p'>
                    Problems trying to resolve the conflict between the two major <br /> 
                    realms of Classical physics
                </p>
                <h6 id='price'>$16.48</h6>

                <button type='button' id='CTA-btn'>
                    ADD YOUR CALL TO ACTION
                </button>
            </div>
        </section>
    )
}

export default BetterExperienceSection
