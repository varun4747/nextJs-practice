import Link from "next/link";

export default function page() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99" },
    { id: 2, name: "Smart Watch", price: "$149" },
    { id: 3, name: "Gaming Mouse", price: "$59" },
    { id: 4, name: "Bluetooth Speaker", price: "$79" },
  ];

  return (
    <main style={styles.container}>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to ShopEasy</h1>
        <p>Discover the best gadgets at unbeatable prices.</p>
        <Link href="/products" style={styles.shopBtn}>
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <div style={styles.imagePlaceholder}></div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button style={styles.button}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
  hero: {
    textAlign: "center" as const,
    padding: "60px 20px",
    backgroundColor: "#f5f5f5",
    marginBottom: "40px",
  },
  shopBtn: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#111",
    color: "#fff",
    textDecoration: "none",
  },
  sectionTitle: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    textAlign: "center" as const,
  },
  imagePlaceholder: {
    height: "150px",
    backgroundColor: "#eee",
    marginBottom: "15px",
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "#111",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};