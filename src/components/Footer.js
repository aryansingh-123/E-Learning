import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="container">
          <div className="footer-left">
            <h3>Tech Aryan🚀</h3>

            <p className="footer-links">
              <a href="#" className="link-1">
                Home
              </a>

              <a href="#">Seller</a>

              <a href="#">Pricing</a>

              <a href="#">About</a>

              <a href="#">pages</a>

              <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Tech Aryan © 2023</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>KIIT-DU</span> BBSR-ODISHA, INDIA
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+91 9887654224</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:techsupport@company.com">
                  techsupport@aryantech.edu
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p style={{ color: "inherit" }} className="footer-company-about">
              <span>About the company</span>
              Tech Aryan is a premier provider of programming courses, offering
              a diverse range of courses in popular languages such as Python,
              Java, and C++. Our experienced instructors use interactive lessons
              and projects to enhance student learning.
            </p>

            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
