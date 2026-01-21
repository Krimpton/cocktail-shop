export function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        

        {/* LEFT: INFO */}
        <div className="contact-info">
          <img
            src="../public/assets/images/contact.jpg"
            alt="Contact us"
            className="contact-image"
          />

          <h2 className="contact-title">Contact Us</h2>

          <p className="contact-item">
            <strong>Phone:</strong><br />
            +49 (175) 567-89-00
          </p>

          <p className="contact-item">
            <strong>Email:</strong><br />
            hello@cocktailbox.com
          </p>

          <p className="contact-item">
            <strong>Call hours:</strong><br />
            Monday - Friday, 9:00 AM - 6:00 PM
          </p>
        </div>

        {/* RIGHT: FORM */}
        <div className="contact-form-wrapper">
          <h3 className="contact-form-title">Get in Touch</h3>

          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Your Message (max. 2000 characters)"
              maxLength={2000}
            />

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}