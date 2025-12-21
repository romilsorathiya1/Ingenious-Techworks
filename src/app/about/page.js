// src/app/about/page.js
"use client";
import { useEffect } from 'react';
import styles from '../../styles/About.module.css';

export default function About() {

  // Scroll Reveal Logic (Same as Home Page)
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
          <h1 className="reveal">About Our Agency</h1>
          <p className="reveal">
            Driven by passion, powered by technology. We help brands navigate the digital landscape with confidence.
          </p>
        </div>
      </section>

      {/* 5. OUR STORY SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={`reveal ${styles.storyImg}`}>
              {/* Ensure image is in public/images/ folder */}
              <img src="images/about4.jpg" alt="Our Office Team" />
            </div>
            <div className={`reveal ${styles.storyContent}`}>
              <h5 className="text-primary">Who We Are</h5>
              <h3>Born Digital, Built for Tomorrow</h3>
              <p>
                Ingenious Techworks is a new-age digital agency established with a singular purpose: to bridge the gap between complex technology and seamless user experiences. We noticed that businesses today need more than just code they need intelligent strategy and agile execution.
              </p>
              <p>
                As a modern company, we aren't bogged down by outdated legacy systems. We leverage the latest frameworks, AI-driven insights, and cloud-native architectures to build scalable solutions from day one. We are here to help ambitious brands define their digital future.
              </p>

              <div className={styles.mvGrid}>
                <div className={`${styles.mvCard} hover-target`}>
                  <i className="fas fa-bullseye"></i>
                  <h3>Our Mission</h3>
                  <p>To empower businesses with fresh, innovative technology that simplifies operations and amplifies growth.</p>
                </div>
                <div className={`${styles.mvCard} hover-target`}>
                  <i className="fas fa-eye"></i>
                  <h3>Our Vision</h3>
                  <p>To be the catalyst for the next generation of digital excellence, where creativity meets engineering precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR TEAM SECTION */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <h2 className="section-title reveal">Meet the Experts</h2>
          <p className="section-subtitle reveal">The creative minds and technical wizards behind your success.</p>

          <div className={styles.teamGrid}>
            {/* Member 1 */}
            <div className={`reveal hover-target ${styles.teamCard}`}>
              <div className={styles.teamImg}>
                <img src="images/romil.png" alt="Fullstack Developer" />
              </div>
              <h3>Romil Sorathiya</h3>
              <span>Fullstack Developer</span>
            </div>

            {/* Member 2 */}
            <div className={`reveal hover-target ${styles.teamCard}`}>
              <div className={styles.teamImg}>
                <img src="images/sanyam.png" alt="Fullstack Developer & Devops Engineer" />
              </div>
              <h3>Sanyam Seth</h3>
              <span>Fullstack Developer & Devops Engineer</span>
            </div>

            {/* Member 3 */}
            <div className={`reveal hover-target ${styles.teamCard}`}>
              <div className={styles.teamImg}>
                <img src="images/vishwas.png" alt="AI/ML Engineer & Data Scientist" />
              </div>
              <h3>Vishwas Shukla</h3>
              <span>AI/ML Engineer & Data Scientist</span>
            </div>

            {/* Member 4 */}
            <div className={`reveal hover-target ${styles.teamCard}`}>
              <div className={styles.teamImg}>
                <img src="images/bilal.png" alt="Fullstack Developer" />
              </div>
              <h3>Bilal Mansuri</h3>
              <span>Fullstack Developer</span>
             
            </div>

            {/* Member 5 */}
            <div className={`reveal hover-target ${styles.teamCard}`}>
              <div className={styles.teamImg}>
                <img src="images/harsh.png" alt="AI/ML Engineer" />
              </div>
              <h3>Harsh Suthar</h3>
              <span>AI/ML Engineer</span>
            </div>

            {/* Member 5 */}
            <div className={`reveal hover-target ${styles.teamCard}`}>
              <div className={styles.teamImg}>
                <img src="images/arwa.png" alt="Fullstack Developer" />
              </div>
              <h3>Arwa</h3>
              <span>Fullstack Developer</span>
            </div>


          </div>
        </div>
      </section>
    </main>
  );
}