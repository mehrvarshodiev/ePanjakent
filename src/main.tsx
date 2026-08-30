import { StrictMode, useEffect, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import InteractiveServicesPage from './ServicesPage'
import Home from './pages/Home'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import ModernFooter from './components/ModernFooter'
import './index.css'
import './overrides.css'
import './light-overrides.css'
import './premium-footer.css'

type Lang = 'TJ' | 'RU' | 'EN'
const languages: Lang[] = ['TJ', 'RU', 'EN']

function HeaderIcon({ children, label }: { children: ReactNode; label: string }) {
  return <a href="#" aria-label={label} title={label} className="civic-social-icon">{children}</a>
}

function Layout({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('TJ')
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState('')
  const location = useLocation()
  useEffect(() => { document.documentElement.dataset.theme = 'light' }, [])
  useEffect(() => {
    const start = performance.now()
    const duration = 600
    const from = window.scrollY
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      window.scrollTo(0, from * (1 - ease(progress)))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
    setMenu(false)
  }, [location.pathname, location.key])
  const nextLang = () => setLang(languages[(languages.indexOf(lang) + 1) % languages.length])
  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault()
    if (search.trim()) window.location.href = `/news?search=${encodeURIComponent(search.trim())}`
  }
  const socialBase = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  return <div className="app-shell">
    <header className="topbar civic-header">
      <div className="civic-header-top">
        <div className="civic-header-inner">
          <div className="civic-socials">
            <HeaderIcon label="Telegram"><svg {...socialBase}><path d="m21.7 3.3-3.1 17.1c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3-1 .5.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.9 1 12.3c-1.1-.3-1.1-1.1.2-1.6L20.7 3c.9-.3 1.7.2 1 0.3Z"/></svg></HeaderIcon>
            <HeaderIcon label="Facebook"><svg {...socialBase}><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1 .28-1.75 1.8-1.75H17V2.36A17.2 17.2 0 0 0 14.5 2C12 2 10.5 3.5 10.5 6v3.5H8V13h2.5v9h3Z"/></svg></HeaderIcon>
            <HeaderIcon label="Twitter"><svg {...socialBase}><path d="M21 7.2c-.6.3-1.3.5-2 .6a3.5 3.5 0 0 0-6 2.4v.8A8.5 8.5 0 0 1 5 6s-3 4.5 1.5 7c-.5 0-1 0-1.5-.2 0 3.1 2.2 5.3 5 5.6a7.2 7.2 0 0 1-5 1.4c4.3 2.8 9.9 1.1 11.8-1.3 1.8-2.1 2.3-5.8 2.3-7.1v-.5c.7-.5 1.3-1.1 1.9-1.8Z"/></svg></HeaderIcon>
            <HeaderIcon label="YouTube"><svg {...socialBase}><path d="M23.2 6.7a2.9 2.9 0 0 0-2-2c-1.8-.6-9.2-.6-9.2-.6s-7.4 0-9.2.6a2.9 2.9 0 0 0-2 2C.2 8.5.2 12 .2 12s0 3.5.6 5.3a2.9 2.9 0 0 0 2 2c1.8.6 9.2.6 9.2.6s7.4 0 9.2-.6a2.9 2.9 0 0 0 2-2c.6-1.8.6-5.3.6-5.3s0-3.5-.6-5.3ZM9.7 15.8V8.2l6.4 3.8-6.4 3.8Z"/></svg></HeaderIcon>
            <HeaderIcon label="Instagram"><svg {...socialBase}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.5 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 6Z"/></svg></HeaderIcon>
            <HeaderIcon label="Flickr"><svg {...socialBase}><path d="M7.3 9.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm9.4 0a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z"/></svg></HeaderIcon>
          </div>
          <div className="civic-languages"><button onClick={() => setLang('TJ')} className={lang === 'TJ' ? 'active' : ''}>Тоҷикӣ</button><button onClick={() => setLang('RU')} className={lang === 'RU' ? 'active' : ''}>Русский</button><button onClick={() => setLang('EN')} className={lang === 'EN' ? 'active' : ''}>English</button></div>
        </div>
      </div>

      <div className="civic-brand-row">
        <div className="civic-header-inner civic-brand-inner">
          <Link to="/" className="civic-brand">
            <span className="civic-emblem" aria-hidden="true"><span className="civic-emblem-sun">✦</span><span className="civic-emblem-mountain" /></span>
            <span className="civic-brand-copy"><b>Мақомоти иҷроияи ҳокимияти маҳаллии<br/>шаҳри Панҷакент</b><small>ePanjakent · DIGITAL CITY</small></span>
          </Link>
        </div>
      </div>

      <div className="civic-nav-row">
        <div className="civic-header-inner civic-nav-inner">
          <button className="civic-menu" onClick={() => setMenu(!menu)} aria-label="Кушодани меню">{menu ? '×' : '☰'}</button>
          <nav className="desktop-nav civic-desktop-nav"><Link to="/">Асосӣ</Link><Link to="/news">Хабарҳо</Link><Link to="/history">Таърих ва фарҳанг</Link><Link to="/tourism">Туризм</Link><Link to="/services">Хизматҳо</Link><Link to="/digital">Рақамӣ</Link><Link to="/appeals">Муроҷиатҳо</Link></nav>
          <form className="civic-search" onSubmit={submitSearch}><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Ҷустуҷӯ" aria-label="Ҷустуҷӯ"/><button type="submit" aria-label="Ҷустуҷӯ"><svg width="23" height="23" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2"/><path d="m16 16 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></button></form>
        </div>
      </div>
      {menu && <div className="mobile-menu civic-mobile-menu"><Link to="/">Асосӣ</Link><Link to="/news">Хабарҳо</Link><Link to="/history">Таърих ва фарҳанг</Link><Link to="/tourism">Туризм</Link><Link to="/services">Хизматҳо</Link><Link to="/digital">Рақамӣ</Link><Link to="/appeals">Муроҷиатҳо</Link><button className="mobile-language" onClick={nextLang} aria-label="Change language">🌐 <strong>{lang}</strong></button></div>}
    </header>
    <main>{children}</main><ModernFooter />
  </div>
}

const services=[['01','Номнависии духтур','Духтур, беморхона, сана ва вақти мувофиқро онлайн интихоб кунед.','♥'],['02','Маълумотномаи судӣ','Барои гирифтани маълумотномаи судӣ дархост пешниҳод кунед.','✓'],['03','ИНН онлайн','Рақами мушаххаси андозсупорандаро дархост ё санҷед.','№'],['04','Шаҳодатномаи таваллуд','Маълумоти навзодро онлайн ирсол ва ҳуҷҷатҳоро бор кунед.','□']]
const places=[['01','Панҷакенти қадим','HERITAGE','https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85'],['02','Саразм','UNESCO','https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85'],['03','Ҳафт Кӯл','NATURE','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85']]
function HistoryPage(){return <PageHero label="HISTORY & CULTURE" title="Таърих ва фарҳанги Панҷакент" intro="Аз Саразми бостонӣ то мероси шаҳрии Панҷакенти қадим — саҳифаҳои таърихи шаҳрро кашф кунед."><article className="history-article"><img className="history-cover" src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1600&q=90" alt="Саразм ва мероси бостонӣ"/><div className="history-copy"><small>ТАЪРИХ ВА ФАРҲАНГ · 29 АВГУСТ 2026</small><h2>Саразм — гаҳвораи тамаддуни Осиёи Марказӣ</h2><p>Дар водии Зарафшон, дар наздикии Панҷакент, осори Саразм моро ба даврае мебарад, ки ҳазорон сол пеш ҷомеаҳои муқимӣ шакл мегирифтанд. Ин маҳал танҳо як ёдгории қадимӣ нест — он равзанаест ба зиндагии мардум, ҳунармандӣ ва робитаҳои тиҷоратии ҷаҳони қадим.</p><h3>Саразм аз куҷо оғоз мешавад?</h3><p>Саразм ҳамчун маркази қадимаи маскунӣ ва ҳунармандӣ аҳамияти бузург дорад. Бозёфтҳои бостоншиносӣ аз рушди кишоварзӣ, коркарди металл, кулолгарӣ ва мубодилаи молҳо шаҳодат медиҳанд. Маҳз чунин робитаҳо водии Зарафшонро ба як нуқтаи муҳими робитаҳои фарҳангӣ табдил дода буданд.</p><h3>Панҷакенти қадим — шаҳри пурҷӯшу хурӯш</h3><p>Панҷакенти қадим яке аз муҳимтарин марказҳои фарҳангии Суғди бостон буд. Харобаҳои шаҳр, кӯчаҳо, хонаҳо ва осори санъат тасаввур медиҳанд, ки дар ин ҷо ҳаёти шаҳрӣ бо ҳунармандӣ, савдо ва фарҳанги ғанӣ пайваст буд.</p><h3>Меросе барои имрӯз</h3><p>Имрӯз таърихи Панҷакент қисми ҷудонашавандаи ҳувияти шаҳр ва ҷозибаи он барои сайёҳон аст. Шиносоӣ бо ин мерос ба мо кӯмак мекунад, ки гузашта ва рушди имрӯзаи шаҳрро беҳтар дарк кунем.</p><div className="history-cta"><b>Панҷакентро аз наздик бинед.</b><span>Ба Саразм ва Панҷакенти қадим сафар кунед ва таассуроти худро дар шарҳҳо бо мо мубодила намоед.</span><Link to="/tourism" className="btn btn-primary">Нақшаи сафар →</Link></div></div></article></PageHero>}
function ServicesPage(){return <PageHero label="E-GOVERNMENT" title="Хизматрасониҳои давлатӣ" intro="Хизматрасониҳои рақамиро зуд, шаффоф ва қулай истифода баред."><InteractiveServicesPage/></PageHero>}
function TourismPage(){return <PageHero label="DISCOVER" title="Роҳнамои туристии Панҷакент" intro="Панҷакенти қадим, Саразм ва Ҳафт Кӯлро кашф кунед."><PlacesGrid/><div className="tourism-info"><div><b>Масири тавсияшуда</b><span>Панҷакенти қадим → Саразм → Ҳафт Кӯл</span></div><div><b>Ёрии фаврӣ</b><span>112 · Хадамоти наҷот · беморхона</span></div></div></PageHero>}
function DigitalPage(){return <PageHero label="DIGITAL PANJAKENT" title="Панҷакенти рақамӣ" intro="Нишондиҳандаҳо, рушди инфрасохтор ва ташаббусҳои smart city."><DigitalSection/></PageHero>}
function AppealsPage(){return <PageHero label="CIVIC ENGAGEMENT" title="Муроҷиати шаҳрвандон" intro="Масъалаҳоро хабар диҳед, пешниҳод фиристед ва ҳолати муроҷиатро пайгирӣ кунед."><Appeal/><div className="issue-board"><IssueCard title="Роҳи маҳалла таъмирталаб аст" status="Нав"/><IssueCard title="Равшании кӯча барқарор шуд" status="Ҳалшуда"/><IssueCard title="Ҷамъоварии партовҳо" status="Дар раванд"/></div></PageHero>}
function PageHero({label,title,intro,children}:{label:string;title:string;intro:string;children:ReactNode}){return <section className="page-shell"><div className="section page-inner reveal visible"><div className="page-hero"><div className="eyebrow"><span/> {label}</div><h1>{title}</h1><p>{intro}</p></div>{children}</div></section>}
function NewsGrid({compact=false}:{compact?:boolean}){return <div className={`news-grid ${compact?'compact':''}`}><p className="news-grid-placeholder">Хабарҳо дар NewsSection нишон дода мешаванд.</p></div>}
function ServiceGrid(){return <div className="service-grid">{services.map(([n,title,text,icon])=><article className="service-card" key={title}><div className="service-top"><span className="number">{n}</span><span className="service-icon">{icon}</span></div><h3>{title}</h3><p>{text}</p><Link to="/services">Оғоз кардан <span>→</span></Link></article>)}</div>}
function PlacesGrid(){return <div className="places-grid">{places.map(([n,title,tag,image])=><article className="place-card" key={title}><img src={image} alt={title}/><div className="place-overlay"/><div className="place-top"><span>{n}</span><span>{tag}</span></div><div className="place-bottom"><h3>{title}</h3><button>Кашф кардан →</button></div></article>)}</div>}
function DigitalSection({compact=false}:{compact?:boolean}){return <section className={`digital ${compact?'digital-compact':''}`}><div className="section digital-inner reveal visible"><SectionHeader number="05" label="DIGITAL PANJAKENT" title="Панҷакенти рақамӣ" light/><p className="digital-lead">Технология, инфрасохтор ва ташаббусҳои smart city барои рушди устувори шаҳр.</p><div className="metrics"><Metric value="+12%" label="Growth"/><Metric value="48" label="Schools"/><Metric value="87%" label="Digital"/><Metric value="126" label="Projects"/></div><div className="chart"><div><b>Индекси рушди рақамӣ</b><span>2015 — 2026 ↗</span></div><div className="bars">{[25,32,30,39,48,44,57,64,61,75,86,100].map((h,i)=><i style={{height:`${h}%`}} key={i}/>)}</div></div></div></section>}
function Appeal(){return <div className="appeal"><div><div className="eyebrow accent">06 / CIVIC ENGAGEMENT</div><h2>Шаҳри худро<br/><em>якҷоя беҳтар мекунем.</em></h2><p>Масъалаҳои маҳаллиро хабар диҳед, пешниҳод фиристед ва ҳолати муроҷиататонро онлайн пайгирӣ кунед.</p></div><div className="appeal-actions"><Link to="/appeals" className="btn btn-primary">Муроҷиат фиристед →</Link><Link to="/appeals" className="btn btn-outline">Дидани масъалаҳо</Link></div></div>}
function IssueCard({title,status}:{title:string;status:string}){return <article className="issue-card"><span>{status}</span><b>{title}</b><small>Панҷакент · имрӯз</small></article>}
function SectionHeader({number,label,title,link,light=false}:{number:string;label:string;title:string;link?:string;light?:boolean}){return <div className={`section-head ${light?'light':''}`}><div><div className="eyebrow"><span/> {number} · {label}</div><h2>{title}</h2></div>{link&&<Link to={link.includes('Кашф')?'/history':'/news'} className="all-link">{link}</Link>}</div>}
function Metric({value,label}:{value:string;label:string}){return <div className="metric"><strong>{value}</strong><span>{label}</span></div>}
function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/news" element={<NewsPage/>}/><Route path="/news/:newsId" element={<NewsDetailPage/>}/><Route path="/history" element={<HistoryPage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/tourism" element={<TourismPage/>}/><Route path="/digital" element={<DigitalPage/>}/><Route path="/appeals" element={<AppealsPage/>}/><Route path="*" element={<Home/>}/></Routes>}
createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><Layout><App/></Layout></BrowserRouter></StrictMode>)
