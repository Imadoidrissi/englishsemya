"use client";

import { useState } from "react";

const courses = [
  [
    "01",
    "Private Tutoring",
    "Personalized one-to-one lessons for all ages and levels.",
    "All ages & levels",
  ],
  [
    "02",
    "Conversation Club",
    "Relaxed group sessions to help you speak naturally and confidently.",
    "Small groups",
  ],
  [
    "03",
    "Business English",
    "Practical English for meetings, emails, presentations and work.",
    "Professional",
  ],
  [
    "04",
    "English for IT",
    "Useful English for technology, software and international teams.",
    "Tech",
  ],
  [
    "05",
    "English for Travel",
    "Build confidence communicating while traveling around the world.",
    "Travel",
  ],
  [
    "06",
    "Interview Preparation",
    "Practice answers and communication skills for your next interview.",
    "Career",
  ],
];

const faqs = [
  [
    "What levels do you teach?",
    "We teach complete beginners through advanced learners and adapt lessons to each student's goals.",
  ],
  [
    "Do you teach children and teenagers?",
    "Yes. We offer age-appropriate lessons for children, teenagers and adults.",
  ],
  [
    "Are lessons online?",
    "Yes. All lessons are online, so you can learn from wherever you are.",
  ],
  [
    "Can lessons focus on a specific goal?",
    "Absolutely. We can focus on conversation, school, work, travel, interviews, IT or another specific purpose.",
  ],
];

export default function Home() {
  const [faq, setFaq] = useState<number | null>(null);

  return (
    <main>
      <header className="nav">
        <a className="logo" href="#">
          <img src="/logo.png" alt="EnglishSemya" />
          <span>
           English<span>Semya</span>
          </span>
        </a>

        <nav>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="btn small" href="#contact">
          Book a trial ↗
        </a>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">ONLINE ENGLISH SCHOOL</p>

          <h1>
            Learn English.
            <br />
            <em>Join the Family.</em>
          </h1>

          <p className="lead">
            Friendly, personalized English lessons for children, teenagers,
            and adults — wherever you are in the world.
          </p>

          <div className="actions">
            <a className="btn" href="#contact">
              Book a free trial ↗
            </a>

            <a className="textLink" href="#courses">
              Explore courses ↗
            </a>
          </div>

          <div className="trust">
            <span className="bubbles">
              <b>J</b>
              <b>M</b>
              <b>A</b>
              <b>+</b>
            </span>

            <span>
              <strong>Learn with confidence</strong>
              <small>Supportive lessons. Real communication.</small>
            </span>
          </div>
        </div>

        <div className="heroArt">
          <div className="sun" />

          <div className="floating one">
            Aa
            <strong>Speak</strong>
            <small>with confidence</small>
          </div>

          <div className="floating two">
            ◎
            <strong>Connect</strong>
            <small>with people</small>
          </div>

          <div className="person p1">
            <i />
            <b />
          </div>

          <div className="person p2">
            <i />
            <b />
          </div>

          <div className="table" />

          <div className="laptop">
            <i />
          </div>
        </div>
      </section>

      <div className="marquee">
        <span>LEARN</span>
        ✦
        <span>SPEAK</span>
        ✦
        <span>CONNECT</span>
        ✦
        <span>GROW</span>
        ✦
        <span>LEARN</span>
      </div>

      <section id="courses" className="section">
        <div className="heading">
          <div>
            <p className="eyebrow">WHAT WE OFFER</p>
            <h2>
              English for <em>your</em> life.
            </h2>
          </div>

          <p>
            Practical, personal and enjoyable English for real goals and real
            communication.
          </p>
        </div>

        <div className="grid">
          {courses.map((c) => (
            <article className="course" key={c[0]}>
              <div className="courseTop">
                <span>{c[0]}</span>
                <small>{c[3]}</small>
              </div>

              <div>
                <h3>{c[1]}</h3>
                <p>{c[2]}</p>
              </div>

              <a href="#contact">Learn more ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="aboutArt">
          <div className="family">семья</div>

          <div className="note">
            <strong>English + семья</strong>
            <small>learning feels better together</small>
          </div>
        </div>

        <div>
          <p className="eyebrow">WHY ENGLISHSEMYA?</p>

          <h2>
            A school that feels like <em>family.</em>
          </h2>

          <p className="aboutText">
            “Semya” means <strong>family</strong> in Russian. That idea is at
            the heart of EnglishSemya: a welcoming place where learners can
            ask questions, make mistakes, speak freely, and keep growing.
          </p>

          <div className="features">
            <div>
              <b>01</b>
              <strong>Personal</strong>
              <p>Lessons shaped around your goals.</p>
            </div>

            <div>
              <b>02</b>
              <strong>Practical</strong>
              <p>English you can use in real life.</p>
            </div>

            <div>
              <b>03</b>
              <strong>Supportive</strong>
              <p>A relaxed environment to build confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="center">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2>
            Simple from <em>day one.</em>
          </h2>

          <p>
            Getting started should be easy. We keep the process straightforward
            and personal.
          </p>
        </div>

        <div className="steps">
          <div>
            <b>01</b>
            <h3>Tell us your goals</h3>
            <p>
              Share your level, interests, schedule and what you want to
              achieve.
            </p>
          </div>

          <div>
            <b>02</b>
            <h3>Meet your teacher</h3>
            <p>
              Find the right lesson format and approach for your needs.
            </p>
          </div>

          <div>
            <b>03</b>
            <h3>Start learning</h3>
            <p>
              Practice consistently, build confidence and see your progress.
            </p>
          </div>
        </div>
      </section>

      <section className="quote">
        <span>“</span>

        <blockquote>
          Good English is not about being perfect. It’s about being confident
          enough to connect.
        </blockquote>

        <small>— The EnglishSemya approach</small>
      </section>

      <section id="faq" className="section faq">
        <div className="heading">
          <div>
            <p className="eyebrow">QUESTIONS</p>

            <h2>
              Good to <em>know.</em>
            </h2>
          </div>

          <p>
            Still curious? Send us a message and we’ll be happy to help.
          </p>
        </div>

        <div className="faqList">
          {faqs.map((f, i) => (
            <div className="faqItem" key={f[0]}>
              <button
                onClick={() => setFaq(faq === i ? null : i)}
              >
                <span>{f[0]}</span>
                <b>{faq === i ? "−" : "+"}</b>
              </button>

              {faq === i && <p>{f[1]}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta section">
        <div>
          <p className="eyebrow">READY WHEN YOU ARE</p>

          <h2>
            Let’s make English
            <br />
            <em>part of your world.</em>
          </h2>

          <p>
            Tell us what you want to improve and we’ll help you find the right
            way to start.
          </p>
        </div>

        <div className="ctaActions">
          <a
            className="btn light"
            href="mailto:hello@englishsemya.com"
          >
            Email us ↗
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us ↗
          </a>
        </div>
      </section>

      <footer>
        <div>
          <a className="logo" href="#">
            <img src="/logo.png" alt="EnglishSemya" />
            <span>
             English<span>Semya</span>
            </span>
          </a>

          <p>Learn English. Join the Family.</p>
        </div>

        <div className="footerLinks">
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        <p>© {new Date().getFullYear()} EnglishSemya.</p>
      </footer>
    </main>
  );
}
