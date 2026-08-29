import { Link } from 'react-router-dom'

const links = [
  ['Асосӣ', '/'], ['Хабарҳо', '/news'], ['Таърих ва фарҳанг', '/history'],
  ['Туризм', '/tourism'], ['Хизматҳо', '/services'], ['Рақамӣ', '/digital'], ['Муроҷиатҳо', '/appeals'],
]
const social = [['Instagram','◎'],['Facebook','f'],['Telegram','➤'],['YouTube','▶']]

export default function ModernFooter() {
  return <footer className="modern-footer">
    <div className="footer-orb footer-orb-one" /><div className="footer-orb footer-orb-two" />
    <div className="footer-inner">
      <section className="footer-brand">
        <Link to="/" className="footer-logo"><span className="footer-logo-mark">e</span><span><b>ePanjakent</b><small>Digital City</small></span></Link>
        <p>Платформаи рақамии Панҷакент — таърих, фарҳанг ва имкониятҳои имрӯзро ба ҳам мепайвандад.</p>
        <div className="footer-socials">{social.map(([name, icon]) => <a href="#" key={name} aria-label={name} className="social-icon"><span>{icon}</span></a>)}</div>
      </section>
      <section className="footer-column"><h3>Навигатсия</h3>{links.map(([name, to]) => <Link key={to} to={to}>{name}</Link>)}</section>
      <section className="footer-column"><h3>Хизматҳо</h3><Link to="/services">Хизматрасониҳои давлатӣ</Link><Link to="/digital">Панҷакенти рақамӣ</Link><Link to="/appeals">Муроҷиати шаҳрвандон</Link><Link to="/tourism">Роҳнамои туристӣ</Link></section>
      <section className="footer-column footer-contact"><h3>Тамос</h3><p>Панҷакент, Тоҷикистон</p><a className="footer-mail" href="mailto:info@epanjakent.tj">info@epanjakent.tj</a><p>Хабарҳо ва навсозиҳои шаҳрро пайгирӣ кунед.</p></section>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ePanjakent — Digital City</span><span>Панҷакент · Тоҷикистон</span><span>Ҳамаи ҳуқуқҳо ҳифз шудаанд</span></div>
  </footer>
}
