import { Link } from 'react-router-dom'
import NewsSection from '../components/NewsSection'

export default function Home() {
  return <>
    <section className="hero"><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="hero-grid"/><div className="hero-content reveal visible"><div className="eyebrow"><span/> ПАНҶАКЕНТ · ТОҶИКИСТОН</div><h1>МАҚОМОТИ ИҶРОИЯИ<br/><em>ҲОКИМИЯТИ МАҲАЛЛИИ<br/>ШАҲРИ ПАНҶАКЕНТ</em></h1><p>Шаҳри таърих ва оянда. Платформаи ягонаи рақамии Панҷакент барои хизматрасонӣ, хабарҳо, сайёҳӣ ва муроҷиати шаҳрвандон.</p><div className="hero-buttons"><Link to="/services" className="btn btn-primary">Хизматрасониҳо <span>→</span></Link><Link to="/tourism" className="btn btn-glass">Роҳнамои шаҳр <span>⌖</span></Link></div></div></section>
    <NewsSection compact />
  </>
}
