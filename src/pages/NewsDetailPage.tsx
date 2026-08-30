import { Link, useParams } from 'react-router-dom'
import { news } from '../data/news'

export default function NewsDetailPage() {
  const { newsId } = useParams<{ newsId: string }>()
  const item = news.find((entry) => entry.id === newsId)

  if (!item) {
    return (
      <section className="page-shell">
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
    <section className="page-shell news-detail-shell">
      <article className="section news-detail">
        <div className="news-detail-top">
          <Link to="/news" className="news-detail-back">← Ҳамаи хабарҳо</Link>
          <span>{item.tag} · {item.date}</span>
        </div>
        <h1>{item.title}</h1>
        <div className="news-detail-media">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="news-detail-content">
          <p className="news-detail-lead">{item.text}</p>
          <p>{item.text} Ин хабар ба рӯйдодҳо ва ташаббусҳои муҳими шаҳри Панҷакент бахшида шуда, маълумоти навро барои сокинон ва меҳмонони шаҳр пешниҳод мекунад.</p>
          <p>Панҷакент ҳамчун шаҳри дорои таърихи бой ва имкониятҳои нави рушд ҳамеша дар маркази таваҷҷуҳи ҷомеа қарор дорад. Хабарҳои нав ва маълумоти муфид дар ин ҷо мунтазам нав карда мешаванд.</p>
        </div>
      </article>
    </section>
  )
}
