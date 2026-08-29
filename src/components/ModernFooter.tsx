import { Link } from 'react-router-dom'

const links = [
  ['Асосӣ', '/'],
  ['Хабарҳо', '/news'],
  ['Таърих ва фарҳанг', '/history'],
  ['Туризм', '/tourism'],
  ['Хизматҳо', '/services'],
  ['Рақамӣ', '/digital'],
  ['Муроҷиатҳо', '/appeals'],
]
const socials = [
  ['Instagram', '◎'], ['Facebook', 'f'], ['Telegram', '✈'], ['YouTube', '▶'],
]

export default function ModernFooter() {
  return <footer className="modern-footer">
    <div className="footer-orb footer-orb-one" /><div className="footer-orb footer-orb-two" />
    <div className="footer-inner">
      <section className="footer-brand">
        <Link to="/" className="footer-logo"><span className="footer-logo-mark">eP</span><span><b>ePanjakent</b><small>Digital City</small></span></Link>
        <p>Панҷакенти рақамӣ — таърих, фарҳанг ва имкониятҳои имрӯзро ба ҳам мепайвандад.</p>
        <div className="footer-socials">{socials.map(([name, icon]) => <a href="#" key={name} aria-label={name} className="social-icon">{icon}</a>)}</div>
      </section>
      <section className="footer-column footer-navigation"><h3>Навигатсия</h3>{links.map(([name, to]) => <Link key={to} to={to}>{name}</Link>)}</section>
      <section className="footer-column"><h3>Хизматҳо</h3><Link to="/services">Хизматрасониҳои давлатӣ</Link><Link to="/digital">Панҷакенти рақамӣ</Link><Link to="/appeals">Муроҷиати шаҳрвандон</Link></section>
      <section className="footer-column"><h3>Тамос</h3><p>Панҷакент, Тоҷикистон</p><p>Душанбе — Панҷакент</p><a className="footer-mail" href="mailto:info@epanjakent.tj">info@epanjakent.tj</a></section>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ePanjakent — Digital City</span><span>Панҷакент, Тоҷикистон</span></div>
  </footer>
}
