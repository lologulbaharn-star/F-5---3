import { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const articles = [
    { id: 1, title: "Redesigning my site increased sales by over 400% in one week.", image: "/images/img1.jpg" },
    { id: 2, title: "Design handoff: What engineers really want to see", image: "/images/img2.jpg" },
    { id: 3, title: "A comprehensive list of human-computer interactions", image: "/images/img3.jpg" },
    { id: 4, title: "Why do people hate redesigns?", image: "/images/img4.jpg" },
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Articles</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className={styles.auth}>
          <button className={`${styles.btn} ${styles.login}`}>Log In</button>
          <button className={`${styles.btn} ${styles.trial}`}>Start Free Trial</button>
        </div>

        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </header>

      {menuOpen && (
        <>
          <div
            className={styles.backdrop}
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className={styles.mobileMenu}>
            <a href="#">Home</a>
            <a href="#">Articles</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <div className={styles.mobileAuth}>
              <button className={`${styles.btn} ${styles.login}`}>Log In</button>
              <button className={`${styles.btn} ${styles.trial}`}>Start Free Trial</button>
            </div>
          </div>
        </>
      )}

      <section className={styles.hero}>
        <h1>
          A modern way to <br /> build websites.
        </h1>
        <p>
          Empower designers to build professional, custom websites in a completely visual canvas with no code.
        </p>
        <button className={`${styles.btn} ${styles.trial}`}>Start free trial</button>
      </section>

      <main className={styles.container}>
        <div className={styles.divider}>
          <span></span>
          <h2>We share our thoughts on design</h2>
          <span></span>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={article.image} alt={article.title} />
              </div>
              <h3>{article.title}</h3>
              <span>Jul 1, 2020</span>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
