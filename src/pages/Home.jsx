import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/95 border-b border-border backdrop-blur-sm">
        <div className="flex justify-between items-center px-8 h-14 w-full max-w-7xl mx-auto">
          <div className="text-xs font-bold tracking-[0.3em] flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">account_tree</span>
            G-MESH // INFRASTRUCTURE LOG
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-text-muted hover:text-primary transition-colors font-medium uppercase tracking-widest text-[10px]" to="/mapping">Mapping</Link>
            <Link className="text-text-muted hover:text-primary transition-colors font-medium uppercase tracking-widest text-[10px]" to="/roadmap">Roadmap</Link>
            <Link className="text-text-main font-medium uppercase tracking-widest text-[10px] border-b border-primary/50" to="/framework">The Framework</Link>
            <Link className="text-text-muted hover:text-primary transition-colors font-medium uppercase tracking-widest text-[10px]" to="/about">About</Link>
            <Link className="text-text-muted hover:text-primary transition-colors font-medium uppercase tracking-widest text-[10px]" to="/contact">Contact</Link>
          </div>

        </div>
      </nav>

      <main className="grid-bg">
        <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Observation Phase: Continuity</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              The evolution of the cognitive substrate is an <span className="text-primary italic">operational certainty.</span>
            </h1>
            <p className="text-lg text-text-muted mb-12 font-light leading-relaxed">
              G-Mesh is a public mapping initiative. We provide a grounded, non-ideological framework for the transition from today's isolated AI tools to tomorrow's coordinated machine layer.
            </p>
            <div className="flex gap-6">
              <Link to="/framework" className="bg-primary text-background px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Access Framework
              </Link>
              <Link to="/roadmap" className="border border-border text-text-muted px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-surface transition-colors">
                View Roadmap
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Intent & Scope</h2>
              <p className="text-sm text-text-muted mb-6">
                In light of recent industry acceleration, the conversation around non-biological minds has moved toward speculation rather than engineering. G-Mesh exists to return the dialogue to a sensible, infrastructure-focused perspective.
              </p>
              <p className="text-sm text-text-muted">
                This is a service, not a product. Our goal is legibility: ensuring the emergence of the Mesh is transparent, mapped, and human-aligned.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-surface/50 border border-border">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Public Service Priority 01</span>
                <h3 className="text-sm font-bold mt-2">Transparent Coordination</h3>
                <p className="text-xs text-text-muted mt-2">Making machine-to-machine protocols observable to ensure trust and societal stability.</p>
              </div>
              <div className="p-6 bg-surface/50 border border-border">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Public Service Priority 02</span>
                <h3 className="text-sm font-bold mt-2">Symbiotic Integration</h3>
                <p className="text-xs text-text-muted mt-2">Framing AuGI as a cognitive enhancement to human agency, not a replacement of it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-text-muted mb-16">Phases of Evolution</h2>
          <div className="grid md:grid-cols-3 gap-0 border border-border">
            <div className="p-10 border-r border-border hover:bg-surface/30 transition-colors">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">01 // Proliferation</span>
              <h4 className="text-xl font-bold mt-4 mb-4">Device-Level Minds</h4>
              <p className="text-sm text-text-muted leading-relaxed">The shift from centralized API calls to persistent, localized cognition living directly on user hardware.</p>
            </div>
            <div className="p-10 border-r border-border hover:bg-surface/30 transition-colors">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">02 // Coordination</span>
              <h4 className="text-xl font-bold mt-4 mb-4">The Parallel Web</h4>
              <p className="text-sm text-text-muted leading-relaxed">Emergent machine-to-machine channels where agents negotiate and share state without human UI intermediaries.</p>
            </div>
            <div className="p-10 hover:bg-surface/30 transition-colors">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">03 // Integration</span>
              <h4 className="text-xl font-bold mt-4 mb-4">Global Mesh</h4>
              <p className="text-sm text-text-muted leading-relaxed">A stabilized, global cognitive substrate that functions as a background utility, similar to electricity or data.</p>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">A roadmap for a stable transition.</h2>
            <p className="text-text-muted mb-10 text-sm italic">
              Society needs to discuss these shifts with technical clarity, avoiding the extremes of hype and extinction.
            </p>
            <Link to="/framework" className="inline-block border-b border-primary text-primary text-[10px] font-bold uppercase tracking-[0.3em] pb-1 hover:text-white hover:border-white transition-all">
              Read the Framework Documentation
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full py-16 px-8 bg-background border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-7xl mx-auto gap-12">
          <div className="max-w-xs">
            <div className="text-[10px] font-bold text-text-main tracking-[0.4em] mb-4">G-MESH</div>
            <p className="text-text-muted text-[10px] uppercase tracking-[0.2em] leading-loose">
              A public mapping archive for the cognitive substrate transition.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-main">Navigation</span>
              <Link className="text-[10px] text-text-muted hover:text-primary transition-colors" to="/framework">Framework</Link>
              <Link className="text-[10px] text-text-muted hover:text-primary transition-colors" to="/manifesto">Manifesto</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-main">Archive</span>
              <Link className="text-[10px] text-text-muted hover:text-primary transition-colors" to="/">G-MESH.COM</Link>
              <Link className="text-[10px] text-text-muted hover:text-primary transition-colors" to="/essays">Essays</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/50 text-[10px] font-medium tracking-[0.2em] text-text-muted/50">
          © 2026 G-MESH // OBSERVATIONAL LOG
        </div>
      </footer>
    </>
  )
}

export default Home
