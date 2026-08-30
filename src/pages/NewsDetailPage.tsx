import { Link, useParams } from 'react-router-dom'
import { news } from '../data/news'

const styles = {
  shell: { padding: '88px 0 88px' },
  article: { maxWidth: 980, margin: '0 auto', padding: '0 24px' },
  top: { display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: 14, marginBottom: 28 },
  back: { color: 'var(--accent)', fontWeight: 800, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 },
  meta: { color: '#64748b', fontSize: 13, letterSpacing: '.08em', fontWeight: 700 },
  title: { fontSize: 'clamp(34px, 6vw, 68px)', lineHeight: 1.03, letterSpacing: '-.04em', maxWidth: 900, margin: '0 0 34px' },
  media: { borderRadius: 24, overflow: 'hidden', marginBottom: 36, background: '#f1f5f9' },
  image: { width: '100%', display: 'block', aspectRatio: '16 / 9', objectFit: 'cover' as const },
  content: { maxWidth: 760, margin: '0 auto', fontSize: 18, lineHeight: 1.85, color: '#334155' },
  lead: { fontSize: 22, lineHeight: 1.65, color: '#0f172a', fontWeight: 600 as const },
}

function ArrowLight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function NewsDetailPage() {
  const { newsId } = useParams<{ newsId: string }>()
  const item = news.find((entry) => entry.id === newsId)

  if (!item) {
    return (
      <section className="page-shell" style={styles.shell}>
        <div className="section page-inner reveal visible">
          <div className="page-hero">
            <div className="eyebrow accent"><span /> NEWS</div>
            <h1>Хабар ёфт нашуд.</h1>
            <p>Хабари дархостшуда вуҷуд надорад ё дигар дастрас нест.</p>
            <Link to="/news" className="btn btn-primary">← Ҳамаи хабарҳо</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-shell news-detail-shell" style={styles.shell}>
      <article className="section news-detail" style={styles.article}>
        <div className="news-detail-top" style={styles.top}>
          <Link to="/news" className="news-detail-back navLink" style={styles.back} aria-label="Бозгашт ба хабарҳо">
            <ArrowLight />
            <span>Хабарҳо</span>
          </Link>
          <span style={styles.meta}>{item.tag} · {item.date}</span>
        </div>
        <h1 style={styles.title}>{item.title}</h1>
        <div className="news-detail-media" style={styles.media}>
          <img src={item.image} alt={item.title} loading="eager" style={styles.image} />
        </div>
        <div className="news-detail-content" style={styles.content}>
          <p className="news-detail-lead" style={styles.lead}>{item.text}</p>
          <p>{item.text} Ин хабар ба рӯйдодҳо ва ташаббусҳои муҳими шаҳри Панҷакент бахшида шуда, маълумоти навро барои сокинон ва меҳмонони шаҳр пешниҳод мекунад.</p>
          <p>Панҷакент ҳамчун шаҳри дорои таърихи бой ва имкониятҳои нави рушд ҳамеша дар маркази таваҷҷуҳи ҷомеа қарор дорад. Хабарҳои нав ва маълумоти муфид дар ин ҷо мунтазам нав карда мешаванд.</p>
        </div>
      </article>
    </section>
  )
}
