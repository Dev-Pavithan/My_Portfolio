import React from "react";

const ContactUs = () => {
  return (
    <div className="container my-5 p-3">
      <div className="row">
        <h2 className="my-5 text-gradient text-center">Contact Me</h2>
        
        <div className="col-12 mb-4">
          <iframe
            title="Google Maps"
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0344402074343!2d80.04746677576036!3d9.678098378489448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe542d85103085%3A0x6946c5d4e4cb44f4!2sNew%20Chemmany%20Road!5e0!3m2!1sen!2slk!4v1732628385579!5m2!1sen!2slk"
            style={{
              border: 0,
              height: "400px",
              width: "100%",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 my-5 p-5">
          <div className="d-flex align-items-start mb-5">
            <div className="icon-container bg-light rounded-circle d-flex justify-content-center align-items-center me-3"  style={{height:'50px', width: '50px'}}>
              <i className="bi bi-geo-alt fs-4 text-dark"></i>
            </div>
            <div>
              <h5 className="mb-1 text-white">Location:</h5>
              <p className="mb-0 text-white">New Chemmany Road, Nallur North, Jaffna.</p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-5">
            <div className="icon-container bg-light rounded-circle d-flex justify-content-center align-items-center me-3"  style={{height:'50px', width: '50px'}}>
              <i className="bi bi-envelope fs-4 text-dark"></i>
            </div>
            <div>
              <h5 className="mb-1 text-white">Email:</h5>
              <p className="mb-0 text-white">pavithanunenthiran29@gmail.com</p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <div className="icon-container bg-light rounded-circle d-flex justify-content-center align-items-center me-3"  style={{height:'50px', width: '50px'}}>
              <i className="bi bi-phone fs-4 text-dark"></i>
            </div>
            <div>
              <h5 className="mb-1 text-white">Call:</h5>
              <p className="mb-0 text-white">075 042 9863</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white fw-bold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="subject"
                className="form-label text-white fw-bold"
              >
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="form-label text-white fw-bold"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-global d-inline-flex justify-content-center align-items-center p-2 w-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
