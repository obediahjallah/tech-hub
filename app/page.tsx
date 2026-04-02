export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <h2>Tech Hub Liberia</h2>
        <div>
          <a href="#courses" style={{ marginRight: "15px" }}>Courses</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1>Welcome to Tech Hub Liberia</h1>
        <p>Empowering the next generation with coding, robotics, and innovation skills.</p>
      </section>

      {/* Courses Section */}
      <section id="courses" style={{ marginBottom: "60px" }}>
        <h2>Our Courses</h2>
        <ul>
          <li>Introduction to Programming</li>
          <li>Arduino & Electronics</li>
          <li>Robotics Basics</li>
          <li>Web Development (HTML, CSS, JavaScript)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: jallahobediah@gmail.com</p>
        <p>Phone: +231 775 795996</p>
        <p>Location: Monrovia, Liberia</p>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "60px", textAlign: "center" }}>
        <p>© {new Date().getFullYear()} Tech Hub Liberia. All rights reserved.</p>
      </footer>

    </main>
  );
}