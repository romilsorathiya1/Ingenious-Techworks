// src/app/portfolio/page.js
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Portfolio.module.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Dev', 'App Dev', 'AI Solutions', 'Marketing'];

  // Data Array: Moves static HTML into data so we can filter it
  const portfolioItems = [
   {
  id: 1,
  category: 'Web Dev',
  displayCategory: 'Web Development',
  title: 'Shreyarth University Website',
  description: 'A robust university website designed and developed using Django and PostgreSQL, offering structured course pages, placement information, enquiry forms, event updates, media galleries, and an easy-to-manage backend panel for non-technical staff.',
  img: 'images/shreyarth.png',
  link: 'https://shreyarthuni.ac.in/'
},
{
  id: 2,
  category: 'Web Dev',
  displayCategory: 'Web Development',
  title: 'Dishant Electronics Store',
  description: 'An electronics spare-parts selling platform built with Django, featuring product management, order handling, inventory structure, category filtering, and a fast user browsing experience.',
  img: 'images/dishant.png',
  link: 'https://dishantelectronics.com/'
},
{
  id: 3,
  category: 'Web Dev',
  displayCategory: 'Web Development',
  title: 'ArhamSite – Jain Religious Portal',
  description: 'A comprehensive Django-based religious website dedicated to Jain Dharma, offering spiritual content like scriptures, daily teachings, articles, audio/video sections, and multi-language devotional resources to unite and inform followers of Jainism.',
  img: 'images/arham.png',
  link: 'https://www.arhamsite.com/'
},
{
  id: 4,
  category: 'Web Dev',
  displayCategory: 'Web Development',
  title: 'Shreyarth University ERP System',
  description: 'A full-scale university ERP platform built using Next.js, Django, Django REST Framework, and PostgreSQL, featuring 40+ powerful modules including student management, attendance tracking, exam & result processing, fee collection, HR & employee management, LMS, admissions, and real-time academic analytics with secure role-based user access.',
  img: 'images/shreyErp.png',
  link: '#'
},



    // {
    //   id: 2,
    //   category: 'App Dev',
    //   displayCategory: 'App Development',
    //   title: 'NovaBank Mobile',
    //   description: 'A secure and intuitive mobile banking app for iOS and Android, integrating biometric security and instant transfers.',
    //   img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    //   link: '#'
    // },
    // {
    //   id: 3,
    //   category: 'AI Solutions',
    //   displayCategory: 'AI Solutions',
    //   title: 'SupportBot AI',
    //   description: 'An intelligent customer support chatbot using NLP to handle 80% of customer queries automatically for a SaaS firm.',
    //   img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    //   link: '#'
    // },
   

  //   {
  //     id: 6,
  //     category: 'Marketing',
  //     displayCategory: 'Marketing',
  //     title: 'GreenEarth Campaign',
  //     description: 'A comprehensive social media strategy that increased brand awareness by 200% for an eco-friendly startup.',
  //     img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  //     link: '#'
  //   }
  ];

  // Logic to filter the items
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
    
    // Run immediately to catch elements already in view
    // We use setTimeout to ensure React has finished rendering the filtered list
    setTimeout(() => revealOnScroll(), 100);

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, [activeFilter]); // Added activeFilter dependency so animations re-run when filter changes

  return (
    <main>
      {/* 4. PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="reveal">Our Recent Work</h1>
          <p className="reveal">
            Explore how we've helped businesses transform their digital presence through innovation and design.
          </p>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section className="section-padding">
        <div className="container">
          
          {/* Filter Buttons */}
          <div className={`reveal ${styles.portfolioFilter}`}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''} hover-target`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className={styles.portfolioGrid}>
            {filteredItems.map((project) => (
              <div key={project.id} className={`reveal hover-target ${styles.portfolioCard}`}>
                <div className={styles.portfolioImg}>
                  <img src={project.img} alt={project.title} />
                  <div className={styles.portfolioOverlay}>
                    <Link href={project.link} className={styles.viewBtn}>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className={styles.portfolioContent}>
                  <span className={styles.portfolioCategory}>{project.displayCategory}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link href={project.link} target='_blank' style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    View Live &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* If no items found (optional fallback) */}
          {filteredItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <p>No projects found for this category.</p>
            </div>
          )}

          {/* Load More Button */}
          <div className={styles.loadMoreContainer}>
            <button className="btn btn-outline hover-target">Load More Projects</button>
          </div>

        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="reveal" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
            Have a Project in Mind?
          </h2>
          <p className="reveal" style={{ color: "var(--text-muted)", marginBottom: "30px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Let's discuss how we can bring your ideas to life with our technical expertise.
          </p>
          <Link href="/contact" className="btn btn-primary reveal hover-target">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}