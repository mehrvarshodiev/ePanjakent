import { Link } from 'react-router-dom'
import { news } from '../data/news'

export default function NewsSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? [...news].slice(-5).reverse() : news

  return (
    <section className={`section news-section ${compact ? 'news-home-section' : ''}`}>
      <div className="section-head">
        <div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', color: 'rgba(15, 23, 42, 0.72)', margin: 0 }}>Хабархои Панчакент</h2>
        </div>
        <Link to="/news" className="section-link" style={{ color: '#2563eb', fontWeight: 700 }}>ҳамаи хабарҳо</Link>
      </div>

      <div className="news-grid">
        {items.map((item) => (
          <article className="news-card" key={`${item.date}-${item.title}`}>
            <div className="card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="card-body">
              <small>{item.tag} · {item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to="/news" className="read-more">Муфассал →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
