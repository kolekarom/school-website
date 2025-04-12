import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted bg-light">
      {/* Top Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Stay connected with us on social media!</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* School Info */}
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Apex English School</h6>
              <p>
                Address: <br />
                Nagar Road, <br />
                Patoda - 414204, Beed
              </p>
            </div>

            {/* Support */}
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Support</h6>
              <p>Hussen Chause: (+91 9422360332)</p>
              <p>Sayyed Wahab: (+91 9420655056)</p>
              <p>S.A. Shaikh: (+91 9404323391)</p>
            </div>

            {/* Contact Us */}
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <p>Email: <a href="mailto:apexenglishschool501@gmail.com">apexenglishschool501@gmail.com</a></p>
            </div>

            {/* Follow Us */}
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
              <div className="d-flex gap-3 justify-content-center">
                <a href="#" target="_blank" className="text-danger fs-4">
                  <InstagramIcon />
                </a>
                <a href="#" target="_blank" className="text-danger fs-4">
                  <YouTubeIcon />
                </a>
                <a href="#" target="_blank" className="text-primary fs-4">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="text-center p-4 bg-gray-200 mt-6">
        © 2025 Apex English School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
