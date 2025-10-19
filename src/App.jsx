import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const theme = {
  primary: "#a68dd8",
  background: "#ffffff",
  text: "#333333",
};

const Button = ({ children, href }) => (
  <Link
    to={href}
    className="px-6 py-3 rounded-2xl font-medium shadow-md hover:opacity-90"
    style={{ backgroundColor: theme.primary, color: theme.background }}
  >
    {children}
  </Link>
);

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-sm sticky top-0 bg-white z-50">
      <h1 className="text-2xl font-semibold" style={{ color: theme.primary }}>Rupinder Therapy</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="text-center py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Healing is personal. Your journey deserves a space that honors it.</h2>
      <p className="text-lg text-gray-700 mb-8">
        Counseling, creativity, and calm—woven into one holistic experience.
      </p>
      <div className="flex justify-center gap-4 mb-16">
        <Button href="/services">Start Your Healing Journey</Button>
        <Button href="/resources">Explore Free Resources</Button>
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-2">A Holistic Path to Mental Wellness</h3>
        <p className="text-gray-700">
          I blend evidence-based counseling (CBT, EMDR, mindfulness) with creative therapies like guided meditation, poetry, and visual journaling. Every offering is crafted to meet you where you are—with empathy, clarity, and care.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Counseling Sessions",
            desc: "One-on-one support tailored to your needs—online and confidential.",
          },
          {
            title: "Guided Meditations",
            desc: "Audio journeys to calm the mind and reconnect with your inner self.",
          },
          {
            title: "Creative Healing Kits",
            desc: "Downloadable poetry, journals, and visuals for reflection and growth.",
          },
        ].map((s) => (
          <div key={s.title} className="p-6 rounded-2xl shadow-md bg-white border border-purple-100">
            <h4 className="font-semibold mb-2 text-xl" style={{ color: theme.primary }}>{s.title}</h4>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <blockquote className="italic text-lg text-gray-700">
          “Rupinder’s approach helped me feel seen and supported in ways I never expected.”
        </blockquote>
        <p className="text-sm text-gray-500 mt-2">— Client, 2024</p>
        <div className="flex justify-center gap-4 mt-4 text-gray-500 text-sm">
          <span>🌿 Certified Counselor</span>
          <span>🔒 Private & Confidential</span>
          <span>💳 Secure Payments</span>
        </div>
      </section>

      <section className="bg-purple-50 p-8 rounded-2xl">
        <h4 className="text-xl font-semibold mb-2">Get a free guided meditation + journal kit when you subscribe.</h4>
        <form className="flex flex-col md:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-xl border border-gray-300 flex-1"
          />
          <Button href="#">Subscribe</Button>
        </form>
      </section>
    </div>
  );
}

function Services() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <p className="mb-6 text-gray-700">I offer evidence-based therapies with a creative, compassionate touch.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>CBT, EMDR, mindfulness, occupational therapy</li>
        <li>Individual, couples, trauma-focused sessions</li>
      </ul>
      <div className="mt-8">
        <Button href="/contact">Schedule a free 15-minute consult</Button>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Resources</h2>
      <h3 className="text-xl font-semibold mb-4">Free Downloads</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Guided meditations (MP3)</li>
        <li>Companion journals (PDF)</li>
        <li>Poetry kits with restored visuals</li>
      </ul>
      <h3 className="text-xl font-semibold mt-8 mb-4">Premium Bundles</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Healing kits with audio + journal + poetry</li>
      </ul>
      <p className="text-gray-700 mt-4">Checkout securely via Easy Digital Downloads.</p>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">About Rupinder</h2>
      <p className="text-gray-700 mb-6">
        My journey into therapy began with a belief: that healing thrives when compassion meets creativity. With training in CBT, EMDR, and mindfulness, I integrate evidence-based counseling with expressive arts, helping clients find their unique path to peace.
      </p>
      <h3 className="text-xl font-semibold mb-2">Values</h3>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Empathy</li>
        <li>Authenticity</li>
        <li>Accessibility</li>
        <li>Growth</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">Reach out. I’d love to hear from you.</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded-xl" />
        <input type="email" placeholder="Email" className="p-3 border rounded-xl" />
        <textarea placeholder="Message" className="p-3 border rounded-xl" rows="5"></textarea>
        <Button href="#">Send Message</Button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 py-10 text-center border-t text-gray-500 text-sm">
      <div className="flex justify-center gap-4 mb-3">
        <Link to="/services">Services</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
      </div>
      <p>“Healing is not linear—but it is always possible.”</p>
      <p className="mt-2">© {new Date().getFullYear()} Rupinder Therapy</p>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
