import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Compass, FastForward, Hammer, Layers, Repeat, Sparkles } from 'lucide-react';
import './styles.css';

const pillars = [
  { letter: 'L', title: 'Leverage', icon: Layers, text: 'Use tools, systems, capital, media, code, networks, and intellectual property so effort becomes a multiplier.' },
  { letter: 'E', title: 'Environment', icon: Compass, text: 'Design the conditions that shape expectations, access, risk tolerance, ownership, and opportunity spotting.' },
  { letter: 'V', title: 'Velocity', icon: FastForward, text: 'Learn quickly, iterate fast, shorten feedback cycles, and adapt before old models harden.' },
  { letter: 'E', title: 'Execution', icon: Hammer, text: 'Move from insight to shipped work. Build, test, package, and apply ideas in the real world.' },
  { letter: 'R', title: 'Repetition', icon: Repeat, text: 'Create compounding advantage through repeated learning, practice, ownership, and refinement.' }
];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="badge"><Sparkles size={16}/> Future-readiness framework</div>
        <h1>LEVER teaches people to use systems, not just effort, to build lasting advantage.</h1>
        <p className="lead">A practical framework for wealth-building thinking, future readiness, and opportunity design in a Fourth Industrial Revolution economy.</p>
        <div className="actions">
          <a href="#offer" className="button primary">Explore the offer <ArrowRight size={18}/></a>
          <a href="#pillars" className="button secondary">View the framework</a>
        </div>
      </section>

      <section id="pillars" className="pillars">
        {pillars.map(({ letter, title, icon: Icon, text }) => (
          <article className="card" key={title}>
            <div className="topline"><span>{letter}</span><Icon size={22}/></div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section id="offer" className="offer">
        <div>
          <p className="eyebrow">Product direction</p>
          <h2>From framework to teachable asset.</h2>
          <p>LEVER can become a keynote, mini-course, school enrichment module, parent workshop, digital workbook, or licensing-ready curriculum strand.</p>
        </div>
        <ul>
          <li>Canonical framework and language</li>
          <li>Landing page for interest capture</li>
          <li>Workshop outline and curriculum spine</li>
          <li>Revenue pathways for districts, families, and professional learning</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Build beyond labor-only thinking.</h2>
        <p>LEVER helps learners understand systems, create multipliers, and practice the behaviors that compound over time.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
