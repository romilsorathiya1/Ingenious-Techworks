// src/app/blog/page.js
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Blogs.module.css';

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', 'Technology', 'Development', 'AI & Future', 'Design', 'Marketing', 'SEO & Dev', 'Social Media'];

  const blogPosts = [
    {
      id: "post1",
      slug: "post1",
      title: "The Rise of Generative AI in Enterprise Solutions",
      category: "AI & Future",
      image: "/images/post1.webp",
      excerpt: "Artificial Intelligence is no longer just a buzzword. it's reshaping how businesses operate. Discover how generative AI models are automating workflows and creating new opportunities for growth in 2025.",
      date: "Nov 15, 2025",
      author: "By Dev Team",
      readTime: "5 min read",
      featured: true
    },
    {
      id: "pwa-vs-native",
      slug: "post2",
      title: "Native Apps vs. PWAs: Why 2025 is the Year to Switch",
      category: "Development",
      image: "/images/post2.png",
      excerpt: "Businesses are ditching expensive native apps for Progressive Web Apps. Discover how PWAs offer faster load times, offline access, and lower development costs.",
      date: "Oct 15, 2025"
    },
    {
      id: "voice-search",
      slug: "post3",
      title: "Is Your Website Ready for Voice Search?",
      category: "SEO & Dev",
      image: "/images/post3.png",
      excerpt: "With Siri and Alexa getting smarter, voice search is exploding. Learn strategies like schema markup to stay visible in 2025.",
      date: "Sep 28, 2025"
    },
    {
      id: "ai-agents",
      slug: "post4",
      title: "Beyond Chatbots: AI Agents in Business",
      category: "AI & Future",
      image: "/images/post4.png",
      excerpt: "\"Agentic\" AI doesn't just talk—it acts. Learn how autonomous agents can book meetings and process refunds automatically.",
      date: "Agu 22, 2025"
    },
    {
      id: "geo-optimization",
      slug: "post5",
      title: "Optimizing for ChatGPT & Gemini (GEO)",
      category: "Marketing",
      image: "/images/post5.jpg",
      excerpt: "The new SEO is here. \"Generative Engine Optimization\" is the art of getting your business recommended by AI chatbots.",
      date: "July 05, 2025"
    },
    {
      id: "hyper-personalization",
      slug: "post6",
      title: "Hyper-Personalization: Tailoring Sites with AI",
      category: "AI & Future",
      image: "/images/post6.jpeg",
      excerpt: "Generic websites convert poorly. Use AI to dynamically change content for every unique visitor to skyrocket conversions.",
      date: "Jun 18, 2025"
    },
    {
      id: "low-code",
      slug: "post7",
      title: "Speed to Market with Low-Code Development",
      category: "Development",
      image: "/images/post7.jpg",
      excerpt: "Need an app fast? Discover how low-code platforms allow startups and enterprises to launch MVPs in weeks, not months.",
      date: "May 30, 2025"
    },
    {
      id: "5g-iot",
      slug: "post8",
      title: "Leveraging 5G: The Next Frontier for IoT",
      category: "Technology",
      image: "/images/post8.jpg",
      excerpt: "Real-time data without lag. Learn how 5G integration is revolutionizing mobile apps for healthcare, logistics, and smart homes.",
      date: "Apr 12, 2025"
    },
    {
      id: "b2b-video",
      slug: "post9",
      title: "Why B2B Companies Need Short-Form Video",
      category: "Marketing",
      image: "/images/post9.jpg",
      excerpt: "B2B doesn't mean boring. Engaging Reels and YouTube Shorts are the new way to capture corporate attention in 2025.",
      date: "March 25, 2025"
    },
    {
      id: "social-seo",
      slug: "post10",
      title: "The Rise of Social SEO",
      category: "Social Media",
      image: "/images/post10.png",
      excerpt: "Gen Z searches on TikTok and Instagram, not just Google. Optimize your social profiles with keywords to get found.",
      date: "Feb 05, 2025"
    },
    {
      id: "motion-ui",
      slug: "post11",
      title: "Boosting Engagement with Motion UI",
      category: "Design",
      image: "/images/post11.png",
      excerpt: "Static pages are boring. See how micro-interactions and animations keep users glued to your site and boost SEO rankings.",
      date: "Jan 10, 2025"
    }
  ];

  const filteredPosts = activeTag === 'All'
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => post.category === activeTag && !post.featured);

  const featuredPost = blogPosts.find(post => post.featured);

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
    // Trigger once on load to ensure visible elements render
    setTimeout(() => {
      revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("active");
      });
    }, 100);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main>
      {/* 4. PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className="reveal">Insights & News</h1>
          <p className="reveal">
            Stay updated with the latest trends in technology, design, and business strategy.
          </p>
        </div>
      </section>

      {/* 5. BLOG CONTENT */}
      <section className="section-padding" style={{ paddingTop: '20px' }}>
        <div className="container">

          {/* Search & Filters */}
          <div className={`reveal ${styles.blogControls}`}>
            <div className={`hover-target ${styles.searchBox}`}>
              <input type="text" placeholder="Search for articles..." />
              <i className={`fas fa-search ${styles.searchIcon}`}></i>
            </div>
            <div className={styles.tagsContainer}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`${styles.tag} ${activeTag === tag ? styles.active : ''} hover-target`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className={`reveal hover-target ${styles.featuredPost}`}>
              <div className={styles.featuredImg}>
                <img src={featuredPost.image} alt={featuredPost.title} />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.metaTag}>{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>

                <div className={styles.postMeta}>
                  <span><i className="far fa-calendar"></i> {featuredPost.date}</span>
                  <span><i className="far fa-user"></i> By {featuredPost.author}</span>
                  <span><i className="far fa-clock"></i> {featuredPost.readTime}</span>
                </div>

                <Link href={`/blogs/${featuredPost.slug}`} className={styles.readMoreLink} style={{ marginTop: '25px', display: 'inline-flex' }}>
                  Read More <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </Link>

              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className={styles.blogGridPage}>
            {filteredPosts.map((post) => (
              <div key={post.id} className={`reveal hover-target ${styles.blogCard}`}>
                <div className={styles.blogImgContainer}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.blogCardContent}>
                  <span className={styles.metaTag} style={{ marginBottom: '10px' }}>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.postMeta} style={{ marginTop: 'auto', paddingTop: '15px', marginBottom: '10px' }}>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blogs/${post.slug}`} className={styles.readMoreLink}>Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button className="btn btn-outline hover-target">Load More Articles</button>
          </div>

        </div>
      </section>
    </main>
  );
}