import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom'
import './index.css'

type Lang = 'TJ' | 'RU' | 'EN'
type Theme = 'dark' | 'light'

const news = [
  { tag: 'ХАБАРҲО', title: 'Панҷакент: марҳилаи нави рушди шаҳри рақамӣ', text: 'Хизматрасониҳои муосир ва ташаббусҳои нави рақамӣ барои сокинон.', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85' },
  { tag: 'ФАРҲАНГ', title: 'Мероси бостонии Панҷакент зинда аст', text: 'Гузаштаи пурғановати шаҳр қисми муҳими ояндаи он мебошад.', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=85' },
  { tag: 'ЧОРАБИНӢ', title: 'Роҳнамои нави сайёҳӣ ба меҳмонон пешниҳод шуд', text: 'Масирҳои нав ба Панҷакенти қадим, Саразм ва Ҳафт Кӯл.', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85' },
]

const services = [
  ['01', 'Номнависии духтур', 'Духтур, беморхона, сана ва вақти мувофиқро онлайн интихоб кунед.', '♥'],
  ['02', 'Маълумотномаи судӣ', 'Барои гирифтани маълумотномаи судӣ дархост пешниҳод кунед.', '✓'],
  ['03', 'ИНН онлайн', 'Рақами мушаххаси андозсупорандаро дархост ё санҷед.', '№'],
  ['04', 'Шаҳодатномаи таваллуд', 'Маълумоти навзодро онлайн ирсол ва ҳуҷҷатҳоро бор кунед.', '□'],
]

const places = [
  ['01', 'Панҷакенти қадим', 'HERITAGE', 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85'],
  ['02', 'Саразм', 'UNESCO', 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85'],
  ['03', 'Ҳафт Кӯл', 'NATURE', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85'],
]

function App() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [lang, setLang] = useState<Lang>('TJ')
  const [menu, setMenu] = useState(false)

  useEffect(() => document.documentElement.dataset.theme = theme, [theme])

  const languages: Lang[] = ['TJ', 'RU', 'EN']
  const nextLang = () => setLang(languages[(languages.indexOf(lang) + 1) % languages.length])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="nav-wrap">
          <Link to="/" className="brand" aria-label="ePanjakent home">
            <span className="brand-mark">✦</span>
            <span><b>ePanjakent</b><small>DIGITAL CITY</small></span>
          </Link>
          <nav className="desktop-nav">
            <a href="#news">Хабарҳо</a><a href="#tourism">Туризм</a><a href="#services">Хизматҳо</a><a href="#digital">digitalPanjakent</a><a href="#appeals">Муроҷиатҳо</a>
          </nav>
          <div className="nav-actions">
            <button onClick={nextLang} aria-label="Change language">🇹🇯 🇷🇺 🇬🇧 <strong>{lang}</strong></button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">{theme === 'dark' ? '☀' : '☾'}</button>
            <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Open menu">{menu ? '×' : '☰'}</button>
          </div>
        </div>
        {menu && <div className="mobile-menu"><a href="#news" onClick={() => setMenu(false)}>Хабарҳо</a><a href="#tourism" onClick={() => setMenu(false)}>Туризм</a><a href="#services" onClick={() => setMenu(false)}>Хизматҳо</a><a href="#digital" onClick={() => setMenu(false)}>digitalPanjakent</a><a href="#appeals" onClick={() => setMenu(false)}>Муроҷиатҳо</a></div>}
      </header>

      <main>
        <section className="hero">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-grid" />
          <div className="hero-content reveal">
            <div className="eyebrow"><span /> PANJAKENT · TAJIKISTAN</div>
            <h1>PANJAKENT<br /><em>— DIGITAL CITY</em></h1>
            <p>Шаҳри таърих ва оянда. Платформаи ягонаи рақамии Панҷакент барои хизматрасонӣ, ахбор, сайёҳӣ ва иштироки шаҳрвандон.</p>
            <div className="hero-buttons"><a href="#services" className="btn btn-gold">Хизматрасониҳо <span>→</span></a><a href="#tourism" className="btn btn-glass">Роҳнамои шаҳр <span>⌖</span></a></div>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE ↓</div>
        </section>

        <section id="news" className="section reveal">
          <SectionHeader number="01" label="NEWS BLOG" title="Блоги хабарҳо" link="Ҳама →" />
          <div className="filters"><button className="active">Featured</button><button>News</button><button>Culture</button><button>Events</button></div>
          <div className="news-grid">{news.map((item, i) => <article className={`news-card ${i === 0 ? 'featured' : ''}`} key={item.title}><div className="card-image"><img src={item.image} alt="" /><span>{item.tag}</span></div><div className="card-body"><small>29 АВГУСТ 2026</small><h3>{item.title}</h3><p>{item.text}</p><a href="#">Хондан <span>↗</span></a></div></article>)}</div>
        </section>

        <section id="services" className="section services-section reveal">
          <SectionHeader number="02" label="E-GOVERNMENT" title="Хизматрасониҳои давлатӣ" />
          <div className="service-grid">{services.map(([n, title, text, icon]) => <article className="service-card" key={title}><div className="service-top"><span className="number">{n}</span><span className="service-icon">{icon}</span></div><h3>{title}</h3><p>{text}</p><button>Оғоз кардан <span>→</span></button></article>)}</div>
        </section>

        <section id="tourism" className="section reveal">
          <SectionHeader number="03" label="EXPLORE" title="Роҳнамои туристии Панҷакент" />
          <div className="places-grid">{places.map(([n, title, tag, image]) => <article className="place-card" key={title}><img src={image} alt={title} /><div className="place-overlay" /><div className="place-top"><span>{n}</span><span>{tag}</span></div><div className="place-bottom"><h3>{title}</h3><button>Кашф кардан →</button></div></article>)}</div>
        </section>

        <section id="digital" className="digital reveal">
          <div className="section digital-inner"><SectionHeader number="04" label="DIGITAL PANJAKENT" title="Панҷакенти рақамӣ" light /><p className="digital-lead">Технология, инфрасохтор ва ташаббусҳои smart city барои рушди устувори шаҳр.</p><div className="metrics"><Metric value="+12%" label="Growth" /><Metric value="48" label="Schools" /><Metric value="87%" label="Digital" /><Metric value="126" label="Projects" /></div><div className="chart"><div><b>Индекси рушди рақамӣ</b><span>2015 — 2026 ↗</span></div><div className="bars">{[25,32,30,39,48,44,57,64,61,75,86,100].map((h, i) => <i style={{height: `${h}%`}} key={i} />)}</div></div></div>
        </section>

        <section id="appeals" className="section reveal"><div className="appeal"><div><div className="eyebrow gold">05 / CIVIC ENGAGEMENT</div><h2>Шаҳри худро<br /><em>якҷоя беҳтар мекунем.</em></h2><p>Масъалаҳои маҳаллиро хабар диҳед, пешниҳод фиристед ва ҳолати муроҷиатро онлайн пайгирӣ кунед.</p></div><div className="appeal-actions"><button className="btn btn-gold">Муроҷиат фиристед →</button><button className="btn btn-outline">Дидани масъалаҳо</button></div></div></section>
      </main>

      <footer><div className="footer-inner"><div className="brand"><span className="brand-mark">✦</span><span><b>ePanjakent</b><small>DIGITAL CITY PORTAL</small></span></div><p>© 2026 ePanjakent · Panjakent, Tajikistan</p><div>🇹🇯 🇷🇺 🇬🇧</div></div></footer>
    </div>
  )
}

function SectionHeader({number, label, title, link, light=false}: {number:string;label:string;title:string;link?:string;light?:boolean}) { return <div className={`section-head ${light ? 'light' : ''}`}><div><div className="eyebrow"><span /> {number} · {label}</div><h2>{title}</h2></div>{link && <a href="#news" className="all-link">{link}</a>}</div> }
function Metric({value,label}:{value:string;label:string}) { return <div className="metric"><strong>{value}</strong><span>{label}</span></div> }

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>)
