import { Link } from 'react-router-dom'
import { news } from '../data/news'

export default function NewsSection({ compact = false }: { compact?: boolean }) {
  // Home: show the 5 newest stories. News page: show the complete news array.
  const items = compact ? [...news].slice(-5).reverse() : news

  return (
    <section className={`section news-section ${compact ? 'news-home-section' : ''}`}>
      <div className="section-head">
        <div>
          <span className="section-number">01</span>
          <span className="section-label">NEWS BLOG</span>
          <h2>Блоги хабарҳо</h2>
        </div>
        <Link to="/news" className="section-link">Ҳамаи хабарҳо →</Link>
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
