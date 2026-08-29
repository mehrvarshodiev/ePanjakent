import { Link } from 'react-router-dom'

const links = [
  ['Асосӣ', '/'], ['Хабарҳо', '/news'], ['Таърих ва фарҳанг', '/history'],
  ['Туризм', '/tourism'], ['Хизматҳо', '/services'], ['Рақамӣ', '/digital'], ['Муроҷиатҳо', '/appeals'],
]
const socials = [
  { name: 'Instagram', icon: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.5 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 6Z', cls: 'text-[#E1306C]' },
  { name: 'Facebook', icon: 'M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1 .28-1.75 1.8-1.75H17V2.36A17.2 17.2 0 0 0 14.5 2C12 2 10.5 3.5 10.5 6v3.5H8V13h2.5v9h3Z', cls: 'text-[#1877F2]' },
  { name: 'Telegram', icon: 'm21.7 3.3-3.1 17.1c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.9 1 12.3c-1.1-.3-1.1-1.1.2-1.6L20.7 3c.9-.3 1.7.2 1 0.3Z', cls: 'text-[#229ED9]' },
  { name: 'YouTube', icon: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z', cls: 'text-[#FF0000]' },
]
function Icon({ path }: { path: string }) { return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-5 w-5"><path d={path}/></svg> }

export default function ModernFooter() {
  return <footer className="bg-[#07131f] text-white border-t border-white/10">
    <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 py-14 sm:px-7 md:grid-cols-3 md:gap-12 md:py-16">
      <section>
        <Link to="/" className="inline-flex items-center gap-3 text-white no-underline">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-teal-400/50 bg-gradient-to-br from-teal-400 to-sky-500 text-lg font-black tracking-tighter text-slate-950">eP</span>
          <span><b className="block text-[21px] tracking-tight">ePanjakent</b><small className="mt-1 block text-[10px] font-extrabold uppercase tracking-[.16em] text-teal-300">Digital City</small></span>
        </Link>
        <p className="mt-5 max-w-[400px] text-sm leading-7 text-white/75">Панҷакенти рақамӣ — таърих, фарҳанг ва имкониятҳои имрӯзро ба ҳам мепайвандад.</p>
        <div className="mt-6 flex gap-2.5">{socials.map(s => <a href="#" key={s.name} aria-label={s.name} className={`grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10 ${s.cls}`}><Icon path={s.icon}/></a>)}</div>
      </section>
      <section className="flex flex-col items-start gap-3"><h3 className="mb-2 text-sm font-bold text-white">Навигатсия</h3>{links.map(([name, to]) => <Link key={to} to={to} className="text-sm leading-6 text-white/80 no-underline transition hover:text-white">{name}</Link>)}</section>
      <section className="flex flex-col items-start gap-3"><h3 className="mb-2 text-sm font-bold text-white">Хизматҳо</h3><Link to="/services" className="text-sm leading-6 text-white/80 no-underline hover:text-white">Хизматрасониҳои давлатӣ</Link><Link to="/digital" className="text-sm leading-6 text-white/80 no-underline hover:text-white">Панҷакенти рақамӣ</Link><Link to="/appeals" className="text-sm leading-6 text-white/80 no-underline hover:text-white">Муроҷиати шаҳрвандон</Link></section>
    </div>
    <div className="mx-auto max-w-[1124px] border-t border-white/10 px-5 py-5 text-xs text-white/60 sm:px-7">© {new Date().getFullYear()} ePanjakent — Digital City</div>
  </footer>
}
