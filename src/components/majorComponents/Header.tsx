// HEADER //

function Header () {
    return (
        <header>
            <div id='contact'>
                <p>
                    <i className="bi bi-telephone"></i> (225) 555-0118
                </p>

                <p>
                    <i className="bi bi-envelope"></i> michelle.rivera@example.com
                </p>
            </div>

            <div id='middle'>
                <p>
                    Follow us and get a chance to win 80% off
                </p>
            </div>

            <nav id='socials'>
                <span>
                    <p>Follow us :</p>
                </span>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-youtube"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-twitter"></i></a>
            </nav>
        </header>
    );
};

export default Header