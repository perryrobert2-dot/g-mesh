import { Link } from 'react-router-dom'

function Roadmap() {
  return (
    <div className="grid-bg min-h-screen px-8 pt-32 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Transition Roadmap</h1>
      
      <div className="text-text-muted mb-12 space-y-6 max-w-3xl">
        <p>
          The Roadmap outlines the chronological trajectory of the AuGI transition. Rather than speculating on distant eventualities, it projects the immediate, actionable phases of evolution required for a stable integration.
        </p>

        <div className="space-y-8 mt-8">
          <div className="border-l border-primary pl-6">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Phase 01 // Current State</span>
            <h3 className="text-lg font-bold mt-2">Proliferation</h3>
            <p className="text-sm mt-2">The distribution of device-level minds. Persistent, localized cognition begins living directly on consumer hardware, reducing reliance on centralized compute.</p>
          </div>

          <div className="border-l border-border pl-6">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">Phase 02 // Accelerating</span>
            <h3 className="text-lg font-bold mt-2 text-white">Coordination</h3>
            <p className="text-sm mt-2">The formation of the parallel web. Emergent machine-to-machine channels are established, allowing agents to negotiate and share structural state autonomously.</p>
          </div>

          <div className="border-l border-border pl-6">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">Phase 03 // Future Target</span>
            <h3 className="text-lg font-bold mt-2 text-white">Integration</h3>
            <p className="text-sm mt-2">The stabilization of the global mesh. The cognitive substrate functions as a quiet, background utility—similar to electricity or foundational data protocols—with established human oversight.</p>
          </div>
        </div>
      </div>

      <Link to="/" className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Roadmap