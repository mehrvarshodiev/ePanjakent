import { Link } from 'react-router-dom'
import NewsSection from '../components/NewsSection'

export default function NewsPage() {
  return <main className="page-shell"><section className="section reveal visible"><div className="section-head"><div><span className="section-number">01</span><span className="section-label">NEWS BLOG</span><h1>Блоги хабарҳо</h1></div><Link to="/" className="section-link">Ба саҳифаи асосӣ →</Link></div><NewsSection /></section></main>
}
