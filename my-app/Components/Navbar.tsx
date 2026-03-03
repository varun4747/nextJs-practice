"use client";


import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div>
        <nav style={styles.nav}>
          <h2 style={styles.logo}>MyApp</h2>

          <div style={styles.links}>
            <Link href="/" style={styles.link}>Home</Link>
            <Link href="/about" style={styles.link}>About</Link>
            <Link href="/contact" style={styles.link}>Contact</Link>
            <Link href="/SignIn" style={styles.link}>Sign In</Link>
            <Link href="/signup" style={styles.link}>Sign Up</Link>
          </div>
        </nav>
        
      </div>
    </>

  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};