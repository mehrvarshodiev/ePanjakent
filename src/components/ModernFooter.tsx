import { Link } from 'react-router-dom'

const links = [
  ['Асосӣ', '/'], ['Хабарҳо', '/news'], ['Таърих ва фарҳанг', '/history'],
  ['Туризм', '/tourism'], ['Хизматҳо', '/services'], ['Рақамӣ', '/digital'], ['Муроҷиатҳо', '/appeals'],
]
const socials = [['Instagram', '◎'], ['Facebook', 'f'], ['Telegram', '✈'], ['YouTube', '▶']]

export default function ModernFooter() {
  return <footer className="bg-white text-black border-t border-gray-200">
    <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 py-14 sm:px-7 md:grid-cols-3 md:gap-12 md:py-16">
      <section>
        <Link to="/" className="inline-flex items-center gap-3 text-black no-underline">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-gray-300 bg-white text-lg font-black tracking-tighter">eP</span>
          <span><b className="block text-[21px] tracking-tight">ePanjakent</b><small className="mt-1 block text-[10px] font-extrabold uppercase tracking-[.16em]">Digital City</small></span>
        </Link>
        <p className="mt-5 max-w-[400px] text-sm leading-7 text-black">Панҷакенти рақамӣ — таърих, фарҳанг ва имкониятҳои имрӯзро ба ҳам мепайвандад.</p>
        <div className="mt-6 flex gap-2.5">
          {socials.map(([name, icon]) => <a href="#" key={name} aria-label={name} className="grid h-10 w-10 place-items-center rounded-xl border border-gray-300 bg-white font-black text-black transition hover:-translate-y-1 hover:bg-gray-100">{icon}</a>)}
        </div>
      </section>
      <section className="flex flex-col items-start gap-3"><h3 className="mb-2 text-sm font-bold text-black">Навигатсия</h3>{links.map(([name, to]) => <Link key={to} to={to} className="text-sm leading-6 text-black no-underline transition hover:underline hover:underline-offset-4">{name}</Link>)}</section>
      <section className="flex flex-col items-start gap-3"><h3 className="mb-2 text-sm font-bold text-black">Хизматҳо</h3><Link to="/services" className="text-sm leading-6 text-black no-underline hover:underline">Хизматрасониҳои давлатӣ</Link><Link to="/digital" className="text-sm leading-6 text-black no-underline hover:underline">Панҷакенти рақамӣ</Link><Link to="/appeals" className="text-sm leading-6 text-black no-underline hover:underline">Муроҷиати шаҳрвандон</Link></section>
    </div>
    <div className="mx-auto max-w-[1124px] border-t border-gray-200 px-5 py-5 text-xs text-black sm:px-7">© {new Date().getFullYear()} ePanjakent — Digital City</div>
  </footer>
}
