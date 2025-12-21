// src/app/contact/page.js
"use client";
import { useEffect, useState } from 'react';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  // State for form status and messages
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Scroll Reveal Logic (Your existing code)
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // 1. Gather data from the form using 'name' attributes
    const formData = {
      name: e.target.fullname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // 2. Send data to your backend API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 3. Handle Response
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        e.target.reset(); // Clear the form
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Error sending message. Please check your connection.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* 4. PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="reveal">Get in Touch</h1>
          <p className="reveal">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* 5. CONTACT CONTENT */}
      <section className="section-padding" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className={styles.contactWrapper}>

            {/* Left: Contact Info */}
            <div className={`reveal ${styles.contactInfo}`}>

              <div className={`hover-target ${styles.infoCard}`}>
                <div className={styles.infoIcon}><i className="fas fa-envelope"></i></div>
                <div className={styles.infoContent}>
                  <h3>Email Us</h3>
                  <p>General: <a href="mailto:ingenioustechworks@gmail.com">ingenioustechworks@gmail.com</a></p>
                </div>
              </div>

              <div className={`hover-target ${styles.infoCard}`}>
                <div className={styles.infoIcon}><i className="fas fa-phone-alt"></i></div>
                <div className={styles.infoContent}>
                  <h3>Call Us</h3>  
                  <p>Mon-Fri from 9am to 6pm</p>
                  <p><a href="tel:+919409595954">+91 9409595954</a></p>
                  <p><a href="tel:+918866796656">+91 8866796656</a></p>
                  <p><a href="tel:+919327080837">+91 9327080837</a></p>
                </div>
              </div>

              {/* Socials */}
              <div style={{ marginTop: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', fontWeight: '600' }}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={`${styles.socialBtn} hover-target`}><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className={`${styles.socialBtn} hover-target`}><i className="fab fa-twitter"></i></a>
                  <a href="#" className={`${styles.socialBtn} hover-target`}><i className="fab fa-instagram"></i></a>
                  <a href="#" className={`${styles.socialBtn} hover-target`}><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={`reveal ${styles.contactFormContainer}`}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', fontWeight: '700' }}>Send us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  {/* Added name="fullname" */}
                  <input type="text" name="fullname" className={`${styles.formControl} hover-target`} placeholder="John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  {/* Added name="email" */}
                  <input type="email" name="email" className={`${styles.formControl} hover-target`} placeholder="john@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Subject</label>
                  {/* Added name="subject" */}
                  <select name="subject" className={`${styles.formControl} hover-target`}>
                    <option>General Inquiry</option>
                    <option>Start a Project</option>
                    <option>Job Application</option>
                    <option>Support</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Message</label>
                  {/* Added name="message" */}
                  <textarea
                    name="message"
                    className={`${styles.formControl} hover-target`}
                    placeholder="Tell us about your project..."
                    style={{ resize: 'vertical', minHeight: '150px' }}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary hover-target" 
                  style={{ width: '100%', opacity: loading ? 0.7 : 1 }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success/Error Message Display */}
                {status.message && (
                  <div className={`${styles.statusMessage} ${status.type === 'success' ? styles.success : styles.error}`}>
                    {status.message}
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}