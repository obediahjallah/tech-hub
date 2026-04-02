export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-950">
        <h1 className="text-xl font-bold text-orange-500">Tech Hub Liberia</h1>
        <div className="space-x-6">
          <a href="#courses" className="hover:text-orange-400">Courses</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Build Your Future with Technology
        </h1>
        <p className="text-gray-400 mb-6">
          Learn Arduino, Web Development, and Robotics in Liberia
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
          Enroll Now
        </button>
      </section>

      {/* COURSES */}
      <section id="courses" className="px-8 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Our Programs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">Arduino & IoT</h3>
            <p className="text-gray-400 mb-4">
              Build smart systems using sensors and microcontrollers.
            </p>
            <button className="bg-orange-500 px-4 py-2 rounded">Enroll</button>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">Web Development</h3>
            <p className="text-gray-400 mb-4">
              Learn HTML, CSS, JavaScript and build real websites.
            </p>
            <button className="bg-orange-500 px-4 py-2 rounded">Enroll</button>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">Robotics</h3>
            <p className="text-gray-400 mb-4">
              Design and program intelligent robots for real problems.
            </p>
            <button className="bg-orange-500 px-4 py-2 rounded">Enroll</button>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-950 px-8 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-400">Email: jallahobediah@gmail.com</p>
        <p className="text-gray-400">Phone: +231 77 5795996</p>
        <p className="text-gray-400">Location: Monrovia, Liberia</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 Tech Hub Liberia
      </footer>

    </main>
  );
}