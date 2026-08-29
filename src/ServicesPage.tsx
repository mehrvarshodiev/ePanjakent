import { FormEvent, useState } from 'react'

type ServiceKey = 'doctor' | 'criminal' | 'tin' | 'birth'

type Service = {
  key: ServiceKey
  icon: string
  title: string
  description: string
}

const serviceList: Service[] = [
  { key: 'doctor', icon: '♥', title: 'Номнависии духтур', description: 'Беморхона, духтур, сана ва вақти мувофиқро интихоб кунед.' },
  { key: 'criminal', icon: '✓', title: 'Маълумотномаи судӣ', description: 'Барои гирифтани маълумотномаи судӣ дархости электронӣ фиристед.' },
  { key: 'tin', icon: '№', title: 'ИНН онлайн', description: 'Рақами мушаххаси андозсупорандаро дархост ё санҷед.' },
  { key: 'birth', icon: '□', title: 'Шаҳодатномаи таваллуд', description: 'Маълумоти навзод ва ҳуҷҷатҳои заруриро онлайн пешниҳод кунед.' },
]

const inputClass = 'service-input'

export default function ServicesPage() {
  const [active, setActive] = useState<ServiceKey | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [tracking, setTracking] = useState('')
  const [trackingResult, setTrackingResult] = useState('')

  const openService = (key: ServiceKey) => {
    setActive(key)
    setSubmitted(false)
    setStep(1)
  }

  const close = () => setActive(null)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const track = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTrackingResult(tracking.trim() ? `Муроҷиати ${tracking.trim()} қабул шудааст. Ҳолат: Дар баррасӣ.` : 'Рақами муроҷиатро ворид кунед.')
  }

  return <>
    <style>{`
      .services-interactive{display:grid;gap:22px}
      .service-live-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
      .service-live-card{position:relative;display:flex;min-height:230px;flex-direction:column;justify-content:space-between;overflow:hidden;border:1px solid rgba(20,184,166,.16);border-radius:28px;padding:25px;background:linear-gradient(145deg,rgba(255,255,255,.7),rgba(20,184,166,.035));transition:.35s}
      [data-theme=dark] .service-live-card{background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(20,184,166,.025));border-color:rgba(255,255,255,.09)}
      .service-live-card:hover{transform:translateY(-5px);border-color:rgba(20,184,166,.5);box-shadow:0 18px 55px rgba(20,184,166,.12)}
      .service-live-icon{display:flex;height:48px;width:48px;align-items:center;justify-content:center;border-radius:15px;background:#14b8a6;color:white;font-size:20px}
      .service-live-card h3{margin:20px 0 8px;font-size:22px;font-weight:800}
      .service-live-card p{margin:0;line-height:1.65;opacity:.58}
      .service-start{margin-top:20px;display:flex;align-items:center;justify-content:space-between;border:0;background:none;padding:0;color:#0d9488;font-weight:800;cursor:pointer}
      .tracking-live{border:1px solid rgba(20,184,166,.18);border-radius:28px;padding:25px;background:rgba(20,184,166,.045)}
      .tracking-live form{display:flex;gap:10px;margin-top:15px}
      .service-input{width:100%;border:1px solid rgba(100,116,139,.25);border-radius:14px;background:rgba(255,255,255,.75);padding:13px 15px;outline:none;transition:.2s}
      [data-theme=dark] .service-input{background:rgba(255,255,255,.05);color:white;border-color:rgba(255,255,255,.12)}
      .service-input:focus{border-color:#14b8a6;box-shadow:0 0 0 3px rgba(20,184,166,.1)}
      .tracking-result{margin-top:12px;color:#0d9488;font-size:14px;font-weight:700}
      .service-modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(2,10,15,.72);backdrop-filter:blur(14px)}
      .service-dialog{width:min(620px,100%);max-height:92vh;overflow:auto;border:1px solid rgba(20,184,166,.22);border-radius:28px;background:#f8fbfa;color:#102523;padding:25px;box-shadow:0 30px 100px rgba(0,0,0,.3)}
      [data-theme=dark] .service-dialog{background:#0b1b19;color:white}
      .service-dialog-head{display:flex;justify-content:space-between;gap:15px;align-items:flex-start;margin-bottom:20px}
      .service-close{height:40px;width:40px;border:0;border-radius:12px;background:rgba(100,116,139,.1);cursor:pointer;font-size:22px}
      .service-dialog h2{margin:0;font-size:28px;font-weight:900}
      .service-form{display:grid;gap:14px}
      .service-form label{display:grid;gap:7px;font-size:13px;font-weight:750}
      .service-form textarea{min-height:95px;resize:vertical}
      .service-two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
      .service-primary{border:0;border-radius:14px;background:#14b8a6;color:white;padding:14px 18px;font-weight:850;cursor:pointer}
      .service-secondary{border:1px solid rgba(100,116,139,.2);border-radius:14px;background:transparent;padding:14px 18px;font-weight:750;cursor:pointer}
      .service-success{padding:25px;border-radius:22px;background:rgba(20,184,166,.09);text-align:center}
      .service-success .check{font-size:42px;color:#14b8a6}
      .service-steps{display:flex;gap:7px;margin-bottom:20px}
      .service-step{height:5px;flex:1;border-radius:99px;background:rgba(100,116,139,.15)}
      .service-step.active{background:#14b8a6}
      @media(max-width:680px){.service-live-grid{grid-template-columns:1fr}.tracking-live form{flex-direction:column}.service-two{grid-template-columns:1fr}.service-dialog{padding:20px;border-radius:24px}.service-live-card{min-height:210px}}
    `}</style>

    <div className="services-interactive">
      <div className="service-live-grid">
        {serviceList.map((service) => <article className="service-live-card" key={service.key}>
          <div>
            <div className="service-live-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <button className="service-start" onClick={() => openService(service.key)}>Оғоз кардан <span>→</span></button>
        </article>)}
      </div>

      <div className="tracking-live">
        <b>Пайгирии дархост</b>
        <p style={{opacity:.55,margin:'7px 0 0'}}>Рақами муроҷиатро ворид кунед, то ҳолати онро бинед.</p>
        <form onSubmit={track}>
          <input className={inputClass} value={tracking} onChange={(e) => setTracking(e.target.value)} placeholder="EP-2026-00126" aria-label="Рақами муроҷиат" />
          <button className="service-primary" type="submit">Пайгирӣ →</button>
        </form>
        {trackingResult && <div className="tracking-result">{trackingResult}</div>}
      </div>
    </div>

    {active && <div className="service-modal" role="dialog" aria-modal="true" onMouseDown={(e) => { if (e.currentTarget === e.target) close() }}>
      <div className="service-dialog">
        <div className="service-dialog-head">
          <div><div className="eyebrow"><span/> E-SERVICE</div><h2>{serviceList.find(s => s.key === active)?.title}</h2></div>
          <button className="service-close" onClick={close} aria-label="Close">×</button>
        </div>

        {submitted ? <div className="service-success">
          <div className="check">✓</div>
          <h3>Дархост фиристода шуд</h3>
          <p style={{opacity:.6}}>Рақами муроҷиат: <b>EP-2026-{Math.floor(10000 + Math.random() * 89999)}</b></p>
          <button className="service-primary" onClick={close}>Тайёр</button>
        </div> : <>
          {active === 'tin' && <div className="service-steps"><i className="service-step active"/><i className={`service-step ${step > 1 ? 'active' : ''}`}/><i className={`service-step ${step > 2 ? 'active' : ''}`}/></div>}
          <form className="service-form" onSubmit={submit}>
            {active === 'doctor' && <>
              <div className="service-two"><label>Беморхона<select className={inputClass} required><option value="">Интихоб кунед</option><option>Беморхонаи марказии шаҳр</option><option>Маркази саломатии №1</option><option>Маркази саломатии №2</option></select></label><label>Духтур<select className={inputClass} required><option value="">Интихоб кунед</option><option>Терапевт</option><option>Кардиолог</option><option>Педиатр</option></select></label></div>
              <div className="service-two"><label>Сана<input className={inputClass} type="date" required min={new Date().toISOString().split('T')[0]}/></label><label>Вақт<select className={inputClass} required><option value="">Интихоб кунед</option><option>09:00</option><option>10:30</option><option>12:00</option><option>14:30</option><option>16:00</option></select></label></div>
              <label>Ному насаб<input className={inputClass} required placeholder="Ному насаб"/></label>
              <label>Телефон<input className={inputClass} type="tel" required placeholder="+992 90 000 00 00"/></label>
            </>}

            {active === 'criminal' && <>
              <label>Ному насаб<input className={inputClass} required placeholder="Ному насаб"/></label>
              <div className="service-two"><label>Санаи таваллуд<input className={inputClass} type="date" required/></label><label>Рақами шиноснома<input className={inputClass} required placeholder="000000000"/></label></div>
              <label>Телефон<input className={inputClass} type="tel" required placeholder="+992 ..."/></label>
              <label>Ҳуҷҷати тасдиқкунанда<input className={inputClass} type="file" accept=".pdf,.jpg,.jpeg,.png" required/></label>
            </>}

            {active === 'tin' && <>
              {step === 1 && <><label>Ному насаб<input className={inputClass} required placeholder="Ному насаб"/></label><label>Рақами телефон<input className={inputClass} type="tel" required placeholder="+992 ..."/></label></>}
              {step === 2 && <><label>Рақами шиноснома<input className={inputClass} required placeholder="000000000"/></label><label>Санаи таваллуд<input className={inputClass} type="date" required/></label></>}
              {step === 3 && <label>Нишонии истиқомат<input className={inputClass} required placeholder="Шаҳр, кӯча, хона"/></label>}
              {step < 3 ? <button type="button" className="service-primary" onClick={() => setStep(step + 1)}>Қадами навбатӣ →</button> : <button className="service-primary">Ирсоли дархост →</button>}
            </>}

            {active === 'birth' && <>
              <div className="service-two"><label>Номи кӯдак<input className={inputClass} required placeholder="Ном"/></label><label>Насаб<input className={inputClass} required placeholder="Насаб"/></label></div>
              <div className="service-two"><label>Санаи таваллуд<input className={inputClass} type="date" required/></label><label>Ҷинс<select className={inputClass} required><option value="">Интихоб</option><option>Мард</option><option>Зан</option></select></label></div>
              <label>Номи падар<input className={inputClass} required placeholder="Номи падар"/></label>
              <label>Шаҳодатномаи беморхона<input className={inputClass} type="file" accept=".pdf,.jpg,.jpeg,.png" required/></label>
              <label>Эзоҳ<textarea className={inputClass} placeholder="Маълумоти иловагӣ"/></label>
              <button className="service-primary">Ирсоли дархост →</button>
            </>}

            {active !== 'tin' && <div style={{display:'flex',gap:10}}><button type="button" className="service-secondary" onClick={close}>Бекор кардан</button><button className="service-primary" type="submit">Ирсоли дархост →</button></div>}
          </form>
        </>}
      </div>
    </div>}
  </>
}
