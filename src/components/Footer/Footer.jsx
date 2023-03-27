import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<section className="footer-container">
			<div className="footer-content">
				<div className="contact-info">
					<h1>Contact</h1>
					<p>
						A/5, 212, Shreeji Residency,
						<br />
						Amroli, Surat, Gujarat,
						<br />
						India - 394107
					</p>
				</div>
				<div className="newsletter">
					<h1>
						Be the first to <br /> get offers
					</h1>
					<div className="form-wrapper">
						<div className="input-field">
							<label htmlFor="email">
								Email<sup>*</sup>
							</label>
							<input type="email" name="email" />
						</div>
						<button className="submit-btn">Submit</button>
					</div>
				</div>
				<div className="menu">
					<h1>Menu</h1>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/shop">Shop</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="social-media">
					<h1>Follow us on</h1>
					<ul>
						<li>
							<Link to="">Facebook</Link>
						</li>
						<li>
							<Link to="https://www.linkedin.com/company/polycurl/">Linkedin</Link>
						</li>
						<li>
							<Link to="">Instagram</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Footer;
