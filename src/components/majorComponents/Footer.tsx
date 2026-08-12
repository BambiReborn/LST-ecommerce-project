// FOOTER //

function Footer () {
    return (
        <footer>
            {/* ==================== FOOTER TOP ==================== */}
            <div className="footer-top">
                <div className="footer-logo">
                <h2>Bandage</h2>
                </div>

                <div className="footer-socials">
                <a href="#" aria-label="Facebook">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href="#" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="#" aria-label="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                </div>
            </div>

            {/* ==================== FOOTER MAIN ==================== */}
            <div className="footer-main">

                {/* Company Info */}
                <div className="footer-column">
                <h3>Company Info</h3>

                <ul>
                    <li>
                    <a href="#">About Us</a>
                    </li>
                    <li>
                    <a href="#">Carrier</a>
                    </li>
                    <li>
                    <a href="#">We are hiring</a>
                    </li>
                    <li>
                    <a href="#">Blog</a>
                    </li>
                </ul>
                </div>

                {/* Legal */}
                <div className="footer-column">
                <h3>Legal</h3>

                <ul>
                    <li>
                    <a href="#">About Us</a>
                    </li>
                    <li>
                    <a href="#">Carrier</a>
                    </li>
                    <li>
                    <a href="#">We are hiring</a>
                    </li>
                    <li>
                    <a href="#">Blog</a>
                    </li>
                </ul>
                </div>

                {/* Features */}
                <div className="footer-column">
                <h3>Features</h3>

                <ul>
                    <li>
                    <a href="#">Business Marketing</a>
                    </li>
                    <li>
                    <a href="#">User Analytic</a>
                    </li>
                    <li>
                    <a href="#">Live Chat</a>
                    </li>
                    <li>
                    <a href="#">Unlimited Support</a>
                    </li>
                </ul>
                </div>

                {/* Resources */}
                <div className="footer-column">
                <h3>Resources</h3>

                <ul>
                    <li>
                    <a href="#">IOS &amp; Android</a>
                    </li>
                    <li>
                    <a href="#">Watch a Demo</a>
                    </li>
                    <li>
                    <a href="#">Customers</a>
                    </li>
                    <li>
                    <a href="#">API</a>
                    </li>
                </ul>
                </div>

                {/* Get In Touch */}
                <div className="footer-column footer-contact">
                <h3>Get In Touch</h3>

                <form>
                    <div className="newsletter">
                    <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                    />

                    <button type="submit">
                        Subscribe
                    </button>
                    </div>

                    <p>Lorem ipsum dolor Amit</p>
                </form>
                </div>

            </div>

            {/* ==================== FOOTER BOTTOM ==================== */}
            <div className="footer-bottom">
                <p>Made With Love By Finland All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer