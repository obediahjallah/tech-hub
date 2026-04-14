 export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm">
        <h2 className="text-xl font-bold text-blue-600">Tech Hub Liberia</h2>
        <div className="space-x-6">
          <a href="#courses" className="hover:text-blue-600">Courses</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Building Liberia’s Future in Technology
        </h1>
        <p className="max-w-xl mx-auto mb-8">
          We train students in Arduino, Robotics, and Web Development through practical learning.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScJO4UiV2rZNnCI7QseZ0cYqBuyLpXmV_cJNAP3tPm2vKjLYg/viewform?usp=header"
          target="_blank"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Enroll Now
        </a>
      </section>

      {/* COURSES */}
      <section id="courses" className="px-6 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Arduino & IoT</h3>
            <p className="text-gray-600">
              Build smart systems with sensors, automation, and real-life projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Web Development</h3>
            <p className="text-gray-600">
              Learn how to design and build modern websites using real tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Robotics</h3>
            <p className="text-gray-600">
              Create and program robots to solve real-world problems.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT / ENROLL */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Enroll Now</h2>

        <p className="text-gray-600 mb-8">
          Ready to join Tech Hub Liberia? Contact us today.
        </p>

        <div className="flex flex-col items-center gap-4">

          <a
            href="mailto:jallahobediah@gmail.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Email
          </a>

          <a
            href="tel:+231775795996"
            className="bg-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Call: +231 775 795 996
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t text-gray-500">
        © 2026 Tech Hub Liberia
      </footer>

      {/*   WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/231775795996"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-green-600 transition z-50"
      >
        💬 <span className="hidden md:inline">Chat with us</span>
      </a>

    </main>
  );
}