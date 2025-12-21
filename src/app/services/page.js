// src/app/services/page.js
"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Services.module.css';

export default function Services() {

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
    revealOnScroll(); 
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main>
      {/* 4. PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="reveal">Our Expertise</h1>
          <p className="reveal">
            We combine cutting-edge technology with strategic thinking to deliver solutions that drive real business growth.
          </p>
        </div>
      </section>

      {/* 5. SERVICES LIST */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.servicesGridLarge}>
            
            {/* 1. Web Development */}
            <div className={`reveal hover-target ${styles.serviceDetailCard}`}>
              <div className={styles.serviceIconLarge}>
                <i className="fas fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                We build high-performance, SEO-optimized websites that act as your 24/7 sales representative. From corporate sites to complex web applications, our code is clean, secure, and scalable.
              </p>
              <ul className={styles.serviceFeatures}>
                <li><i className="fas fa-check"></i> Custom Frontend (React/Vue)</li>
                <li><i className="fas fa-check"></i> Backend API (Node/Python)</li>
                <li><i className="fas fa-check"></i> E-commerce Solutions</li>
                <li><i className="fas fa-check"></i> CMS Integration</li>
              </ul>
            </div>

            {/* 2. App Development */}
            <div className={`reveal hover-target ${styles.serviceDetailCard}`}>
              <div className={styles.serviceIconLarge}>
                <i className="fas fa-mobile-screen"></i>
              </div>
              <h3>App Development</h3>
              <p>
                Engage your customers on the go with intuitive mobile applications. We specialize in cross-platform development that ensures your app works flawlessly on both iOS and Android devices.
              </p>
              <ul className={styles.serviceFeatures}>
                <li><i className="fas fa-check"></i> Flutter & React Native</li>
                <li><i className="fas fa-check"></i> UI/UX App Design</li>
                <li><i className="fas fa-check"></i> App Store Optimization</li>
                <li><i className="fas fa-check"></i> Post-Launch Maintenance</li>
              </ul>
            </div>

            {/* 3. Social Media Handling */}
            <div className={`reveal hover-target ${styles.serviceDetailCard}`}>
              <div className={styles.serviceIconLarge}>
                <i className="fas fa-hashtag"></i>
              </div>
              <h3>Social Media Handling</h3>
              <p>
                Building a brand is about building a community. Our team manages your social presence, creating content that resonates with your audience and drives organic engagement.
              </p>
              <ul className={styles.serviceFeatures}>
                <li><i className="fas fa-check"></i> Content Strategy & Calendar</li>
                <li><i className="fas fa-check"></i> Graphic Design & Reels</li>
                <li><i className="fas fa-check"></i> Community Management</li>
                <li><i className="fas fa-check"></i> Monthly Analytics Reports</li>
              </ul>
            </div>

            {/* 4. AI & Machine Learning (NEW) */}
            <div className={`reveal hover-target ${styles.serviceDetailCard}`}>
              <div className={styles.serviceIconLarge}>
                <i className="fas fa-brain"></i>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>
                Future-proof your business with intelligent automation. We integrate AI solutions to automate repetitive tasks, analyze data patterns, and provide personalized user experiences.
              </p>
              <ul className={styles.serviceFeatures}>
                <li><i className="fas fa-check"></i> AI Chatbots & Assistants</li>
                <li><i className="fas fa-check"></i> Predictive Analytics</li>
                <li><i className="fas fa-check"></i> Natural Language Processing</li>
                <li><i className="fas fa-check"></i> Process Automation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <h2 className="section-title reveal">How We Work</h2>
          <p className="section-subtitle reveal">A transparent and agile process to ensure project success.</p>

          <div className={`reveal ${styles.processSteps}`}>
            <div className={styles.processLine}></div> {/* Connecting line */}
            
            <div className={`hover-target ${styles.stepCard}`}>
              <div className={styles.stepNumber}>1</div>
              <h4>Discovery</h4>
              <p>We analyze your requirements and define the project roadmap.</p>
            </div>
            <div className={`hover-target ${styles.stepCard}`}>
              <div className={styles.stepNumber}>2</div>
              <h4>Design</h4>
              <p>We create prototypes and wireframes to visualize the solution.</p>
            </div>
            <div className={`hover-target ${styles.stepCard}`}>
              <div className={styles.stepNumber}>3</div>
              <h4>Development</h4>
              <p>Our engineers build the solution using the latest tech stack.</p>
            </div>
            <div className={`hover-target ${styles.stepCard}`}>
              <div className={styles.stepNumber}>4</div>
              <h4>Launch</h4>
              <p>We test rigorously and deploy your product to the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="section-padding" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="reveal" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
            Ready to Transform Your Business?
          </h2>
          <p className="reveal" style={{ color: "var(--text-muted)", marginBottom: "30px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Whether you need a new website, a mobile app, or an AI-driven strategy, we are here to help.
          </p>
          <Link href="/contact" className="btn btn-primary reveal hover-target">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}