export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h3>MyApp</h3>
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>

        <div style={styles.links}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "40px 20px",
    marginTop: "40px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center" as const,
  },
  links: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
};