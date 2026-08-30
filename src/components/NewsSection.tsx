import { Link } from 'react-router-dom'
import { news } from '../data/news'

export default function NewsSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? [...news].slice(-5).reverse() : news

  return (
    <section className={`section news-section ${compact ? 'news-home-section' : ''}`}>
      <div className="section-head news-section-head" style={{ marginBottom: compact ? 22 : 42 }}>
        <div />
        <Link to="/news" className="section-link news-all-link" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 7, fontWeight: 800 }}>
          Ҳамаи хабарҳо <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="news-grid">
        {items.map((item) => (
          <article className="news-card" key={item.id}>
            <div className="card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="card-body">
              <small>{item.tag} · {item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to={`/news/${item.id}`} className="read-more">Муфассал →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
