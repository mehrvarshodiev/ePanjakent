import { Link } from 'react-router-dom'

const links = [
  ['Асосӣ', '/'],
  ['Таърих ва фарҳанг', '/history'],
  ['Хизматрасониҳо', '/services'],
]
const socials = [
  ['Instagram', '◎'], ['Facebook', 'f'], ['Telegram', '✈'], ['YouTube', '▶'],
]

export default function ModernFooter() {
  return <footer className="modern-footer">
    <div className="footer-orb footer-orb-one" /><div className="footer-orb footer-orb-two" />
    <div className="footer-inner">
      <section className="footer-brand">
        <Link to="/" className="footer-logo"><span className="footer-logo-mark">e</span><span><b>ePanjakent</b><small>Digital City</small></span></Link>
        <p>Панҷакенти рақамӣ — таърих, фарҳанг ва имкониятҳои имрӯзро ба ҳам мепайвандад.</p>
        <div className="footer-socials">{socials.map(([name, icon]) => <a href="#" key={name} aria-label={name} className="social-icon">{icon}</a>)}</div>
      </section>
      <section className="footer-column"><h3>Навигатсия</h3>{links.map(([name, to]) => <Link key={to} to={to}>{name}</Link>)}</section>
      <section className="footer-column"><h3>Мероси Панҷакент</h3><Link to="/history">Саразм</Link><Link to="/history">Панҷакенти қадим</Link><Link to="/history">Мероси фарҳангӣ</Link></section>
      <section className="footer-column"><h3>Дар тамос бошед</h3><p>Ахбор, рӯйдодҳо ва навгониҳои шаҳри Панҷакентро пайгирӣ кунед.</p><a className="footer-mail" href="mailto:info@epanjakent.tj">info@epanjakent.tj</a></section>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ePanjakent — Digital City</span><span>Панҷакент, Тоҷикистон</span></div>
  </footer>
}
