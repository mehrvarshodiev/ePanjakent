import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import './index.css'

type Lang = 'TJ' | 'RU' | 'EN'
type Theme = 'dark' | 'light'

const news = [
  { tag: 'ХАБАРҲО', title: 'Панҷакент: марҳилаи нави рушди шаҳри рақамӣ', text: 'Хизматрасониҳои муосир ва ташаббусҳои нави рақамӣ барои сокинон.', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85' },
  { tag: 'ФАРҲАНГ', title: 'Мероси бостонии Панҷакент зинда аст', text: 'Гузаштаи пурғановати шаҳр қисми муҳими ояндаи он мебошад.', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=85' },
  { tag: 'ЧОРАБИНӢ', title: 'Роҳнамои нави сайёҳӣ ба меҳмонон пешниҳод шуд', text: 'Масирҳои нав ба Панҷакенти қадим, Саразм ва Ҳафт Кӯл.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85' },
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

function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [lang, setLang] = useState<Lang>('TJ')
  const [menu, setMenu] = useState(false)
  const location = useLocation()
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); setMenu(false) }, [location.pathname])
  const nextLang = () => setLang((languages[(languages.indexOf(lang) + 1) % languages.length]))
  return <div className="app-shell">
    <header className="topbar"><div className="nav-wrap">
      <Link to="/" className="brand"><span className="brand-mark">✦</span><span><b>ePanjakent</b><small>DIGITAL CITY</small></span></Link>
      <nav className="desktop-nav"><NavLink to="/news">Хабарҳо</NavLink><NavLink to="/tourism">Туризм</NavLink><NavLink to="/services">Хизматҳо</NavLink><NavLink to="/digital">Рақамӣ</NavLink><NavLink to="/appeals">Муроҷиатҳо</NavLink></nav>
      <div className="nav-actions"><button onClick={nextLang} aria-label="Change language">🌐 <strong>{lang}</strong></button><button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">{theme === 'dark' ? '☀' : '☾'}</button><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Open menu">{menu ? '×' : '☰'}</button></div>
    </div>{menu && <div className="mobile-menu"><NavLink to="/news">Хабарҳо</NavLink><NavLink to="/tourism">Туризм</NavLink><NavLink to="/services">Хизматҳо</NavLink><NavLink to="/digital">Рақамӣ</NavLink><NavLink to="/appeals">Муроҷиатҳо</NavLink></div>}</header>
    <main>{children}</main>
    <footer><div className="footer-inner"><Link to="/" className="brand"><span className="brand-mark">✦</span><span><b>ePanjakent</b><small>DIGITAL CITY PORTAL</small></span></Link><p>© 2026 ePanjakent · Panjakent, Tajikistan</p><div>🇹🇯 🇷🇺 🇬🇧</div></div></footer>
  </div>
}

const languages: Lang[] = ['TJ', 'RU', 'EN']
function NavLink({ to, children }: { to: string; children: React.ReactNode }) { return <Link to={to}>{children}</Link> }

function Home() {
  return <>
    <section className="hero"><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="hero-grid"/><div className="hero-content reveal visible"><div className="eyebrow"><span/> PANJAKENT · TAJIKISTAN</div><h1>PANJAKENT<br/><em>— DIGITAL CITY</em></h1><p>Шаҳри таърих ва оянда. Платформаи ягонаи рақамии Панҷакент барои хизматрасонӣ, ахбор, сайёҳӣ ва иштироки шаҳрвандон.</p><div className="hero-buttons"><Link to="/services" className="btn btn-primary">Хизматрасониҳо <span>→</span></Link><Link to="/tourism" className="btn btn-glass">Роҳнамои шаҳр <span>⌖</span></Link></div></div><div className="scroll-hint">SCROLL TO EXPLORE ↓</div></section>
    <section className="section reveal"><SectionHeader number="01" label="NEWS BLOG" title="Блоги хабарҳо" link="Ҳама →"/><NewsGrid compact/></section>
    <section className="services-section"><div className="section reveal"><SectionHeader number="02" label="E-GOVERNMENT" title="Хизматрасониҳои давлатӣ"/><ServiceGrid/></div></section>
    <section className="section reveal"><SectionHeader number="03" label="EXPLORE" title="Роҳнамои туристии Панҷакент"/><PlacesGrid/></section>
    <DigitalSection compact/>
    <section className="section reveal"><Appeal/></section>
  </>
}

function NewsPage() { return <PageHero label="NEWS BLOG" title="Блоги хабарҳо" intro="Ахбор, фарҳанг, чорабиниҳо ва эълонҳои муҳими Панҷакент дар як ҷо."><NewsGrid/></PageHero> }
function ServicesPage() { return <PageHero label="E-GOVERNMENT" title="Хизматрасониҳои давлатӣ" intro="Хизматрасониҳои рақамиро зуд, шаффоф ва қулай истифода баред."><ServiceGrid/><div className="tracking"><b>Пайгирии дархост</b><span>Барои дидани ҳолати дархост рақами муроҷиатро ворид кунед.</span><div><input placeholder="Масалан: EP-2026-00126"/><button className="btn btn-primary">Пайгирӣ →</button></div></div></PageHero> }
function TourismPage() { return <PageHero label="DISCOVER" title="Роҳнамои туристии Панҷакент" intro="Панҷакенти қадим, Саразм ва Ҳафт Кӯлро кашф кунед."><PlacesGrid/><div className="tourism-info"><div><b>Масири тавсияшуда</b><span>Панҷакенти қадим → Саразм → Ҳафт Кӯл</span></div><div><b>Ёрии фаврӣ</b><span>112 · Хадамоти наҷот · беморхона</span></div></div></PageHero> }
function DigitalPage() { return <PageHero label="DIGITAL PANJAKENT" title="Панҷакенти рақамӣ" intro="Нишондиҳандаҳо, рушди инфрасохтор ва ташаббусҳои smart city."><DigitalSection/></PageHero> }
function AppealsPage() { return <PageHero label="CIVIC ENGAGEMENT" title="Муроҷиати шаҳрвандон" intro="Масъалаҳоро хабар диҳед, пешниҳод фиристед ва ҳолати муроҷиатро пайгирӣ кунед."><Appeal/><div className="issue-board"><IssueCard title="Роҳи маҳалла таъмирталаб аст" status="Нав"/><IssueCard title="Равшании кӯча барқарор шуд" status="Ҳалшуда"/><IssueCard title="Ҷамъоварии партовҳо" status="Дар раванд"/></div></PageHero> }

function PageHero({ label, title, intro, children }: { label: string; title: string; intro: string; children: React.ReactNode }) { return <section className="page-shell"><div className="section page-inner reveal visible"><div className="page-hero"><div className="eyebrow"><span/> {label}</div><h1>{title}</h1><p>{intro}</p></div>{children}</div></section> }
function NewsGrid({ compact = false }: { compact?: boolean }) { return <div className={`news-grid ${compact ? 'compact' : ''}`}>{news.map((item, i) => <article className={`news-card ${i === 0 ? 'featured' : ''}`} key={item.title}><div className="card-image"><img src={item.image} alt=""/><span>{item.tag}</span></div><div className="card-body"><small>29 АВГУСТ 2026</small><h3>{item.title}</h3><p>{item.text}</p><Link to="/news">Хондан <span>↗</span></Link></div></article>)}</div> }
function ServiceGrid() { return <div className="service-grid">{services.map(([n,title,text,icon]) => <article className="service-card" key={title}><div className="service-top"><span className="number">{n}</span><span className="service-icon">{icon}</span></div><h3>{title}</h3><p>{text}</p><button>Оғоз кардан <span>→</span></button></article>)}</div> }
function PlacesGrid() { return <div className="places-grid">{places.map(([n,title,tag,image]) => <article className="place-card" key={title}><img src={image} alt={title}/><div className="place-overlay"/><div className="place-top"><span>{n}</span><span>{tag}</span></div><div className="place-bottom"><h3>{title}</h3><button>Кашф кардан →</button></div></article>)}</div> }
function DigitalSection({ compact = false }: { compact?: boolean }) { return <section className={`digital ${compact ? 'digital-compact' : ''}`}><div className="section digital-inner reveal visible"><SectionHeader number="04" label="DIGITAL PANJAKENT" title="Панҷакенти рақамӣ" light/><p className="digital-lead">Технология, инфрасохтор ва ташаббусҳои smart city барои рушди устувори шаҳр.</p><div className="metrics"><Metric value="+12%" label="Growth"/><Metric value="48" label="Schools"/><Metric value="87%" label="Digital"/><Metric value="126" label="Projects"/></div><div className="chart"><div><b>Индекси рушди рақамӣ</b><span>2015 — 2026 ↗</span></div><div className="bars">{[25,32,30,39,48,44,57,64,61,75,86,100].map((h,i)=><i style={{height:`${h}%`}} key={i}/>)}</div></div></div></section> }
function Appeal() { return <div className="appeal"><div><div className="eyebrow accent">05 / CIVIC ENGAGEMENT</div><h2>Шаҳри худро<br/><em>якҷоя беҳтар мекунем.</em></h2><p>Масъалаҳои маҳаллиро хабар диҳед, пешниҳод фиристед ва ҳолати муроҷиататонро онлайн пайгирӣ кунед.</p></div><div className="appeal-actions"><Link to="/appeals" className="btn btn-primary">Муроҷиат фиристед →</Link><Link to="/appeals" className="btn btn-outline">Дидани масъалаҳо</Link></div></div> }
function IssueCard({ title, status }: { title: string; status: string }) { return <article className="issue-card"><span>{status}</span><b>{title}</b><small>Панҷакент · имрӯз</small></article> }
function SectionHeader({number,label,title,link,light=false}:{number:string;label:string;title:string;link?:string;light?:boolean}){return <div className={`section-head ${light?'light':''}`}><div><div className="eyebrow"><span/> {number} · {label}</div><h2>{title}</h2></div>{link&&<Link to="/news" className="all-link">{link}</Link>}</div>}
function Metric({value,label}:{value:string;label:string}){return <div className="metric"><strong>{value}</strong><span>{label}</span></div>}
function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/news" element={<NewsPage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/tourism" element={<TourismPage/>}/><Route path="/digital" element={<DigitalPage/>}/><Route path="/appeals" element={<AppealsPage/>}/><Route path="*" element={<Home/>}/></Routes>}
createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><Layout><App/></Layout></BrowserRouter></StrictMode>)
