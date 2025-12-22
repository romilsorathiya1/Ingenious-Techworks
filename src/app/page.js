"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// Helper component for FAQ
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ""} hover-target`}>
      <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <i className={`fas fa-chevron-down ${styles.faqIcon}`}></i>
      </div>
      <div className={styles.faqAnswer} style={{ maxHeight: isOpen ? "200px" : "0" }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function Home() {

  // Scroll Reveal Logic
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
    revealOnScroll(); // Trigger once on load
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main>
      {/* 4. HERO SECTION */}
      <section id="home" className={styles.hero}>
        <div className="container">
          <h1 className="reveal">
            Build the Future with <br />
            <span className="text-primary">Intelligent Tech</span>
          </h1>
          <p className="reveal">
            We create digital experiences that blend innovation, strategy, and engineering to help your business scale effortlessly.
          </p>
          <div className="reveal">
            <Link href="/services" className="btn btn-primary hover-target">
              Explore Services
            </Link>
            <Link href="/about" className="btn btn-outline hover-target" style={{ marginLeft: "15px" }}>
              Who We Are
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className={styles.aboutWrapper}>
            <div className={`reveal ${styles.aboutImage}`}>
              {/* Use a valid image path or external URL */}
              <img src="images/about2.jpg" alt="About Us" />
            </div>
            <div className={`reveal ${styles.aboutContent}`}>
              <h5 className="text-primary">About Us</h5>
              <h2>We Are The Architects of Modern Digital Solutions</h2>
              <p>
                At Ingenious Techworks, we don't just write code; we solve problems. Our team of expert developers and strategists work closely with you to understand your goals.
              </p>
              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <h4>10+</h4>
                  <p>Projects Done</p>
                </div>
                <div className={styles.stat}>
                  <h4>10+</h4>
                  <p>Happy Clients</p>
                </div>
                <div className={styles.stat}>
                  <h4>1+</h4>
                  <p>Years Exp</p>
                </div>
              </div>
              <br />
              <Link href="/about" className="btn btn-outline hover-target">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="section-padding">
        <div className="container">
          <h2 className={`section-title reveal`}>Our Services</h2>
          <p className={`section-subtitle reveal`}>
            Comprehensive technology and marketing solutions tailored to your business needs.
          </p>

          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} reveal hover-target`}>
              <i className={`fas fa-laptop-code ${styles.serviceIcon}`}></i>
              <h3>Web Development</h3>
              <p>Custom websites built with React, Node.js, and modern frameworks for speed and SEO.</p>
              {/* <Link href="/services/web-dev" className={styles.learnMore}>
                Details <i className="fas fa-arrow-right"></i>
              </Link> */}
            </div>

            <div className={`${styles.serviceCard} reveal hover-target`}>
              <i className={`fas fa-mobile-screen ${styles.serviceIcon}`}></i>
              <h3>App Development</h3>
              <p>Native and cross-platform mobile apps (iOS & Android) that provide seamless user experiences.</p>
              {/* <Link href="/services/app-dev" className={styles.learnMore}>
                Details <i className="fas fa-arrow-right"></i>
              </Link> */}
            </div>

            <div className={`${styles.serviceCard} reveal hover-target`}>
              <i className={`fas fa-hashtag ${styles.serviceIcon}`}></i>
              <h3>Social Media Handling</h3>
              <p>Strategic content creation, scheduling, and community engagement to grow your brand online.</p>
              {/* <Link href="/services/social-media" className={styles.learnMore}>
                Details <i className="fas fa-arrow-right"></i>
              </Link> */}
            </div>
          </div>

          <div className={`${styles.sectionFooter} reveal`}>
            <Link href="/services" className="btn btn-outline hover-target">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <h2 className={`section-title reveal`}>Why Choose Us</h2>
          <p className={`section-subtitle reveal`}>
            We deliver excellence at every stage of the development lifecycle.
          </p>

          <div className={styles.featuresGrid}>
            <div className={`${styles.featureBox} reveal hover-target`}>
              <i className="fas fa-coins"></i>
              <h3>Value for Money</h3>
              <p>Top-tier digital solutions at competitive rates, ensuring you get the best ROI.</p>
            </div>
            <div className={`${styles.featureBox} reveal hover-target`}>
              <i className="fas fa-award"></i>
              <h3>Quality-Focused</h3>
              <p>We adhere to strict quality standards and rigorous testing for flawless performance.</p>
            </div>
            <div className={`${styles.featureBox} reveal hover-target`}>
              <i className="fas fa-rocket"></i>
              <h3>Fast Delivery</h3>
              <p>We use agile methodology to deliver projects on time without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <h2 className={`section-title reveal`}>Flexible Pricing</h2>
          <p className={`section-subtitle reveal`}>Transparent pricing for your digital needs.</p>

          <div className={styles.pricingGrid}>
            <div className={`${styles.priceCard} reveal hover-target`}>
              <h3>Social Media</h3>
              <div className={styles.priceAmount}>
                ₹ 499<span>/mo</span>
              </div>
              <ul className={styles.priceFeatures}>
                <li><i className="fas fa-check"></i> 2 Platforms (IG/FB)</li>
                <li><i className="fas fa-check"></i> 12 Custom Posts</li>
                <li><i className="fas fa-check"></i> Content Calendar</li>
                <li><i className="fas fa-check"></i> Monthly Report</li>
              </ul>
              <Link href="/contact" className="btn btn-outline hover-target">
                Get Started
              </Link>
            </div>

            <div className={`${styles.priceCard} ${styles.popular} reveal hover-target`}>
              <div style={{ textAlign: "center", color: "var(--primary)", fontSize: "0.8rem", marginBottom: "10px", fontWeight: "700", letterSpacing: "1px" }}>
                MOST POPULAR
              </div>
              <h3>Web Development</h3>
              <div className={styles.priceAmount}>
                ₹ 9,999<span>/start</span>
              </div>
              <ul className={styles.priceFeatures}>
                <li><i className="fas fa-check"></i> Custom Design UI/UX</li>
                <li><i className="fas fa-check"></i> 5-10 Pages</li>
                <li><i className="fas fa-check"></i> Mobile Responsive</li>
                <li><i className="fas fa-check"></i> Advanced SEO Setup</li>
              </ul>
              <Link href="/contact" className="btn btn-primary hover-target">
                Get Started
              </Link>
            </div>

            <div className={`${styles.priceCard} reveal hover-target`}>
              <h3>App Development</h3>
              <div className={styles.priceAmount}>
                ₹ 14,999<span>/start</span>
              </div>
              <ul className={styles.priceFeatures}>
                <li><i className="fas fa-check"></i> Hybrid App (iOS/Android)</li>
                <li><i className="fas fa-check"></i> User Authentication</li>
                <li><i className="fas fa-check"></i> Admin Dashboard</li>
                <li><i className="fas fa-check"></i> Push Notifications</li>
              </ul>
              <Link href="/contact" className="btn btn-outline hover-target">
                Get Started
              </Link>
            </div>
          </div>

          <div className={`${styles.sectionFooter} reveal`}>
            <Link href="/pricing" className="btn btn-outline hover-target">
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      <section id="blog" className="section-padding">
        <div className="container">
          <h2 className={`section-title reveal`}>Latest Insights & News</h2>
          <p className={`section-subtitle reveal`}>Tech trends, development tips, and company news.</p>

          <div className={styles.blogGrid}>
            <div className={`${styles.blogCard} reveal hover-target`}>
              <div className={styles.blogImg}>
                <span className={styles.blogDate}>Nov 15, 2025</span>
                <img src="/images/post1.webp" alt="Blog 1" />
              </div>
              <div className={styles.blogContent}>
                <h3>The Rise of Generative AI in Enterprise Solutions</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Artificial Intelligence is no longer just a buzzword. it's reshaping how businesses operate. Discover how generative AI models are automating workflows and creating new opportunities for growth in 2025.
                </p>
                <br />
                <Link href="/blogs/post1" className={styles.learnMore}>
                  Read Article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>


            <div className={`${styles.blogCard} reveal hover-target`}>
              <div className={styles.blogImg}>
                <span className={styles.blogDate}>Oct 15, 2025</span>
                <img src="/images/post2.png" alt="Blog 2" />
              </div>
              <div className={styles.blogContent}>
                <h3>Native Apps vs. PWAs: Why 2025 is the Year to Switch</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Businesses are ditching expensive native apps for Progressive Web Apps. Discover how PWAs offer faster load times, offline access, and lower development costs.
                </p>
                <br />
                <Link href="/blogs/post2" className={styles.learnMore}>
                  Read Article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Add more blog cards following same pattern */}
            <div className={`${styles.blogCard} reveal hover-target`}>
              <div className={styles.blogImg}>
                <span className={styles.blogDate}>Sep 28, 2025</span>
                <img src="/images/post3.png" alt="Blog 3" />
              </div>
              <div className={styles.blogContent}>
                <h3>Is Your Website Ready for Voice Search?</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  With Siri and Alexa getting smarter, voice search is exploding. Learn strategies like schema markup to stay visible in 2025.
                </p>
                <br />
                <Link href="/blogs/post3" className={styles.learnMore}>
                  Read Article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

          </div>

          <div className={`${styles.sectionFooter} reveal`}>
            <Link href="/blog" className="btn btn-outline hover-target">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <h2 className={`section-title reveal`}>Frequently Asked Questions</h2>
          <p className={`section-subtitle reveal`}>Everything you need to know about working with us.</p>

          <div className={`reveal ${styles.faqWrapper}`}>
            <FaqItem
              question="How long does a typical project take?"
              answer="Timeline depends on complexity. A standard website takes 2-4 weeks, while a custom app can take 8-12 weeks."
            />
            <FaqItem
              question="Do you offer post-launch support?"
              answer="Yes, we offer various support packages including maintenance, updates, and bug fixes."
            />
            <FaqItem
              question="Can you manage our Social Media accounts?"
              answer="Absolutely. Our Social Media Handling service includes content creation, scheduling, and community engagement."
            />
            <FaqItem
              question="What is your pricing structure?"
              answer="We work on a fixed-price basis for well-defined projects and hourly rates for ongoing support."
            />
          </div>
        </div>
      </section>
    </main>
  );
}