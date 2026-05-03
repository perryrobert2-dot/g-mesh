import { Link } from 'react-router-dom'

function Friction() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 pb-24 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="mb-8">
        <Link to="/essays" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
          ← Observation Logs
        </Link>
      </div>

      {/* Header Section */}
      <header className="max-w-3xl mb-16">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">
          Real-World Case // Identity Delegation
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
          The Friction Tax
        </h1>
        <p className="text-xl text-text-muted leading-relaxed">
          Why personal agents must evolve into Digital Twins to bypass legacy administrative hurdles and predatory "loyalty taxes."
        </p>
      </header>

      {/* Essay Content */}
      <article className="max-w-3xl space-y-12 text-text-muted leading-relaxed text-lg">
        <section>
          <p>
            The current digital economy relies on a "friction tax"—a hidden cost paid in human time and cognitive labor. We see this most clearly in the gap between what a company <em className="text-text-main">can</em> offer and what it <em className="text-text-main">does</em> offer to its loyal customers.
          </p>
          <p className="mt-4">
            Take the standard insurance renewal: a quote arrives $1,200 higher than the same company’s "online-only" rate for new customers. This price discrepancy is a calculated bet on human exhaustion. The insurer assumes the "sorting process"—the phone menus, the identification hurdles, and the repetitive verification spiels—will be frustrating enough to discourage the customer from seeking the lower price.
          </p>
        </section>

        <section className="bg-surface/30 border-l-2 border-primary p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4 italic">The Identity Wall</h2>
          <p>
            A standard Personal Agent can solve the first half of this problem. It can scrape comparison sites and identify the discrepancy. However, the agent currently hits a ceiling at the <strong>Identity Wall</strong>. When it comes time to execute a contract or match a quote, the system demands a biological human for voice biometrics or "secret questions." Until an agent can "be" you in a legal and cryptographic sense, it remains a researcher, not a representative.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-main mb-6 uppercase tracking-wider text-sm">Comparison // Delegation Logic</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border bg-surface/20">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="p-4 text-text-main font-bold uppercase text-xs tracking-widest">Process Phase</th>
                  <th className="p-4 text-text-main font-bold uppercase text-xs tracking-widest">Manual (Today)</th>
                  <th className="p-4 text-text-main font-bold uppercase text-xs tracking-widest">Digital Twin (G-Mesh)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border/50">
                  <td className="p-4 font-bold text-primary">Discovery</td>
                  <td className="p-4">Manual searching and sorting</td>
                  <td className="p-4">Continuous market monitoring</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-bold text-primary">Verification</td>
                  <td className="p-4">10-minute phone identification</td>
                  <td className="p-4">Zero-Knowledge Proof (ZKP)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-bold text-primary">Negotiation</td>
                  <td className="p-4">Human-to-system matching</td>
                  <td className="p-4">Machine-to-machine API call</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-primary">Efficiency</td>
                  <td className="p-4">Hours of labor</td>
                  <td className="p-4">Milliseconds of compute</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-text-main mb-4 italic">Expanding the Mesh</h2>
          <p>The logic of the Digital Twin extends to every sector where asymmetric information creates a "loyalty tax":</p>
          
          <div className="grid gap-6">
            <div className="p-6 bg-surface/50 border border-border">
              <h3 className="text-primary font-bold mb-2 uppercase tracking-widest text-xs">01 // Dynamic Energy</h3>
              <p className="text-sm text-text-muted">A Twin integrates with home telemetry to autonomously negotiate contract swaps when wholesale price spikes make current rates suboptimal.</p>
            </div>
            <div className="p-6 bg-surface/50 border border-border">
              <h3 className="text-primary font-bold mb-2 uppercase tracking-widest text-xs">02 // Health Advocacy</h3>
              <p className="text-sm text-text-muted">Persistent proxies monitor interactions between phytochemical supplements and pharmaceutical baselines, negotiating specialist access via anonymized biometric markers.</p>
            </div>
            <div className="p-6 bg-surface/50 border border-border">
              <h3 className="text-primary font-bold mb-2 uppercase tracking-widest text-xs">03 // Creative IP</h3>
              <p className="text-sm text-text-muted">The Twin acts as a licensing agent for narrative engines, issuing micro-licenses or "pantomime protocols" for collaborative projects autonomously.</p>
            </div>
          </div>
        </section>

        <section className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-text-main mb-4">Conclusion</h2>
          <p>
            The frustration of today’s "sorting processes" is the final gasp of an interface designed to gate-keep information. As we move toward the G-Mesh architecture, the Digital Twin removes the incentive for companies to hide discounts behind friction. When the cost of switching providers drops to zero, companies are forced to compete on actual value rather than their ability to exhaust the customer.
          </p>
        </section>
      </article>

      <footer className="mt-24 pt-8 border-t border-border/30">
        <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
          ← Back to Home
        </Link>
      </footer>
    </div>
  )
}

export default Friction