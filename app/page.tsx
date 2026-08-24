import Image from "next/image"

const faculties = [
  {
    id: "discovery",
    number: "I",
    verb: "It learns the client.",
    title: "Opportunity Intelligence",
    prose: "Before the first conversation, the firm arrives already acquainted. The system studies the business, its agreements, its public record, its risks, and the legal weather gathering at its horizon.",
    work: ["Company and industry research", "Contract and filing signals", "Relationship history", "Counsel-ready briefing"],
    coda: "Not a lead list. A considered point of view.",
  },
  {
    id: "matters",
    number: "II",
    verb: "It prepares the matter.",
    title: "Matter Command",
    prose: "Every obligation is drawn into one field of view: documents, dates, parties, promises, dependencies. The system keeps the chronology intact and the next decision in sight.",
    work: ["Matter intake and organization", "Deadline and obligation extraction", "Drafting preparation", "Exception and risk review"],
    coda: "The file does not wait to be opened. It remains awake.",
  },
  {
    id: "knowledge",
    number: "III",
    verb: "It remembers precedent.",
    title: "Firm Memory",
    prose: "The best work of the firm should not vanish into folders. Language, judgment, negotiation history, and hard-won patterns become a private body of knowledge that can be found when it matters.",
    work: ["Clause and precedent retrieval", "Prior position comparison", "Expertise mapping", "Institutional knowledge capture"],
    coda: "The firm remembers as one mind, without surrendering a single confidence.",
  },
  {
    id: "municipal",
    number: "IV",
    verb: "It watches the landscape.",
    title: "Municipal Watch",
    prose: "Agendas appear. Ordinances change. Permits move. Public records begin to tell a story. The system watches continuously and brings forward only what deserves a lawyer&apos;s attention.",
    work: ["Agenda and meeting monitoring", "Ordinance and filing changes", "Permit and parcel signals", "Jurisdiction-specific alerts"],
    coda: "Nothing material should depend upon someone remembering to look.",
  },
  {
    id: "portfolio",
    number: "V",
    verb: "It surveys the whole.",
    title: "Portfolio Counsel",
    prose: "Across entities and matters, the system sees what no individual file can reveal: repeated exposure, approaching obligations, shared counterparties, and the quiet concentration of risk.",
    work: ["Cross-matter visibility", "Entity and obligation mapping", "Portfolio risk patterns", "Executive-ready counsel"],
    coda: "The whole practice becomes legible without becoming simple.",
  },
]

const valuePools = [
  ["Capacity", "Hours returned to judgment, counsel, negotiation, and advocacy."],
  ["Resilience", "More work absorbed before another hire becomes necessary."],
  ["Margin", "Less delivery effort on appropriately defined legal services."],
  ["Throughput", "Recovered capacity placed back into client work and growth."],
]

export default function HomePage() {
  return (
    <main>
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Macchi connected intelligence, return to top">
          <Image src="/deltapoint-partners-logo.png" alt="DeltaPoint Partners" width={156} height={104} priority />
          <span><b>MACCHI</b><small>Connected Intelligence</small></span>
        </a>
        <nav aria-label="Proposal sections">
          {faculties.map((item) => <a key={item.id} href={`#${item.id}`}>{item.number}</a>)}
          <a className="nav-cta" href="#working-session">Begin</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-rule" aria-hidden="true"><span /></div>
        <div className="hero-copy">
          <p className="kicker">A private intelligence for Macchi</p>
          <h1>One system.<br /><em>Always in chambers.</em></h1>
          <p className="hero-lead">It learns how the firm thinks. It remembers what the firm knows. It watches what is changing, prepares what comes next, and places the right truth before the right lawyer.</p>
          <p className="hero-quiet">Constantly working. Exclusively yours.</p>
        </div>
        <div className="hero-aside">
          <p>Not five tools.</p>
          <p>Five faculties of one private, connected intelligence—each making the others more perceptive.</p>
          <a href="#thesis">Read the brief <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="thesis" id="thesis">
        <div className="section-label"><span>01</span> The thesis</div>
        <blockquote>“A firm should not have to begin again each morning.”</blockquote>
        <div className="thesis-grid">
          <p>Macchi already possesses the intelligence: in its matters, its documents, its people, its judgment, and the long memory of work done well.</p>
          <p>The opportunity is to connect it. To create a private operating intelligence that learns from the practice while remaining subordinate to it—persistent enough to watch, disciplined enough to prepare, and wise enough to leave judgment to counsel.</p>
        </div>
      </section>

      <section className="living-system" aria-labelledby="system-title">
        <div className="system-orbit" aria-hidden="true"><span>Learn</span><span>Prepare</span><span>Remember</span><span>Watch</span><span>Survey</span><i>MACCHI</i></div>
        <div className="system-copy">
          <p className="kicker">The connected advantage</p>
          <h2 id="system-title">Every matter teaches it.<br />Every signal sharpens it.<br /><em>Every lawyer remains in command.</em></h2>
          <p>A prospect brief informs matter intake. Matter work enriches firm memory. Firm memory gives context to municipal change. Portfolio intelligence reveals where attention should turn next. The system is not a shelf of applications. It is a single, living thread through the practice.</p>
        </div>
      </section>

      <section className="faculties" aria-labelledby="faculties-title">
        <div className="section-intro">
          <div className="section-label"><span>02</span> Five connected faculties</div>
          <h2 id="faculties-title">One intelligence,<br /><em>expressed five ways.</em></h2>
        </div>
        {faculties.map((item) => (
          <article className="faculty" id={item.id} key={item.id}>
            <div className="faculty-index">{item.number}</div>
            <div className="faculty-main">
              <p className="faculty-verb">{item.verb}</p>
              <h3>{item.title}</h3>
              <p className="faculty-prose" dangerouslySetInnerHTML={{ __html: item.prose }} />
              <p className="faculty-coda">{item.coda}</p>
            </div>
            <ul>{item.work.map((work) => <li key={work}>{work}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="judgment">
        <p className="kicker">The governing principle</p>
        <h2>The machine may find the pattern.<br />The lawyer decides what it means.</h2>
        <div className="judgment-line"><span>Search</span><span>Extract</span><span>Compare</span><span>Organize</span><strong>COUNSEL</strong></div>
        <p>Human review is not an exception path. It is the architecture. Strategy, privilege, interpretation, negotiation, and advocacy remain where they belong: with the lawyer.</p>
      </section>

      <section className="economics" id="economic-opportunity">
        <div className="section-label"><span>03</span> The economic argument</div>
        <div className="economics-head">
          <h2>Protect the hours<br /><em>only lawyers can create.</em></h2>
          <p>Multiply the value of every hour beneath them. The figures belong to Macchi, not to a software price sheet. The first task is to learn where time goes, what repeats, and where intelligence can return capacity to the practice.</p>
        </div>
        <div className="work-layers">
          <div><small>Attorney judgment</small><b>Strategy · Counsel · Negotiation · Advocacy</b><span>Protect these hours.</span></div>
          <div><small>Paralegal execution</small><b>Preparation · Organization · Research · Readiness</b><span>Compress and redeploy.</span></div>
          <div><small>Connected intelligence</small><b>Search · Extract · Compare · Monitor · Remember</b><span>Let the system carry repetition.</span></div>
        </div>
        <div className="value-pools">{valuePools.map(([title, text]) => <div key={title}><b>{title}</b><p>{text}</p></div>)}</div>
        <p className="disclaimer">Illustrative planning framework only. These value pools overlap and should be validated against Macchi&apos;s compensation, overhead, matter volume, billing history, and the actual redeployment of recovered capacity.</p>
      </section>

      <section className="defined-service">
        <div className="section-label light"><span>04</span> Defined-service economics</div>
        <h2>History tells us what the work required.<br /><em>Intelligence changes what it will require.</em></h2>
        <div className="equation"><span>Agreed client fee</span><i>−</i><span>Actual AI-enabled delivery cost</span><i>=</i><strong>Contribution margin</strong></div>
        <div className="ethics-copy">
          <p>Historical matters establish an empirical benchmark for a fixed, defined-service, or hybrid fee. They reveal complexity, variance, exceptions, and the true shape of delivery.</p>
          <p>They never become fictional time on an hourly invoice. Hourly work remains actual-time billing. The client buys a defined legal service; Macchi retains the value of delivering it with greater intelligence.</p>
        </div>
      </section>

      <section className="working-session" id="working-session">
        <div className="section-label"><span>05</span> The first engagement</div>
        <p className="kicker">Not software selection. The search for leverage.</p>
        <h2>Find the first workflow<br /><em>worth teaching the system.</em></h2>
        <ol>
          <li><span>01</span><b>Measure</b><p>Where does professional time actually go?</p></li>
          <li><span>02</span><b>Identify</b><p>Which repeatable work carries the greatest weight?</p></li>
          <li><span>03</span><b>Model</b><p>What is the capacity, margin, and hiring consequence?</p></li>
          <li><span>04</span><b>Build</b><p>Teach one connected workflow using real Macchi work.</p></li>
          <li><span>05</span><b>Prove</b><p>Measure time, quality, adoption, and economic return.</p></li>
        </ol>
        <div className="closing">
          <p>Before DeltaPoint prices a solution,<br />we should know what the problem is worth.</p>
          <a className="button" href="mailto:hello@deltapointpartners.com?subject=Macchi%20Working%20Session">Begin the working session <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-mark">M</div>
        <p><b>MACCHI × DELTAPOINT</b><span>A private intelligence, built around the practice.</span></p>
        <a href="#top">Return to chambers ↑</a>
      </footer>
    </main>
  )
}
