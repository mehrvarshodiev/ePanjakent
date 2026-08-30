import NewsSection from '../components/NewsSection'

export default function NewsPage() {
  return (
    <main className="page-shell news-page-shell">
      <section className="section page-hero news-page-hero reveal visible">
        <div className="eyebrow accent"><span /> NEWS</div>
        <h1>Хабарҳои<br /><em>Панҷакент</em></h1>
        <p>Хабарҳои нав ва муҳимми шаҳри Панҷакентро дар як ҷо пайгирӣ кунед.</p>
      </section>
      <NewsSection />
    </main>
  )
}
