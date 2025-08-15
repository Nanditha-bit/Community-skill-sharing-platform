
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>
          Welcome to <span className="highlight">SkillShare</span>
        </h1>
        <p>Share your skills, learn from others, and grow together.</p>
        <button className="get-started-btn">Get Started</button>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Learn New Skills</h2>
          <p>Join workshops and courses taught by experts.</p>
          <button>Explore</button>
        </div>
        <div className="feature">
          <h2>Share Your Expertise</h2>
          <p>Host sessions and help others grow.</p>
          <button>Start Teaching</button>
        </div>
      </section>

      <Resource />
    </div>
  );
}
